$ErrorActionPreference = 'Stop'
$routerDir = $PSScriptRoot
$routerPort = 8765
$routerUrl = "http://127.0.0.1:$routerPort"
$routerRunning = $false
try {
    $routerHealth = Invoke-RestMethod -Uri "$routerUrl/api/health" -TimeoutSec 2
    $routerRunning = $routerHealth.ok -and $routerHealth.readOnly
} catch {}
if (-not $routerRunning) {
    $routerPython = (Get-Command python -ErrorAction Stop).Source
    Start-Process -FilePath $routerPython -ArgumentList @('server.py', '--port', "$routerPort") -WorkingDirectory $routerDir -WindowStyle Hidden
    for ($routerAttempt = 0; $routerAttempt -lt 20; $routerAttempt++) {
        Start-Sleep -Milliseconds 200
        try {
            $routerHealth = Invoke-RestMethod -Uri "$routerUrl/api/health" -TimeoutSec 1
            if ($routerHealth.ok) { $routerRunning = $true; break }
        } catch {}
    }
}
if (-not $routerRunning) { throw '服务未启动，请检查 Python 或 8765 端口。' }
Start-Process $routerUrl
