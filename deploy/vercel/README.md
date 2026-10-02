# Additional Vercel address

Production: https://codego-radar.vercel.app/

Deploy this directory as a Vercel project with no framework or build command.
The public directory contains the same allowlisted frontend build as Pages.
The snapshot function reads the existing public Pages endpoint with a compatible
User-Agent; a plain external rewrite is rejected by the upstream service.
Both addresses use the same rankings and test results. No API credentials,
private configuration or additional model testing are needed.

For frontend releases, run `python deploy/vercel/build.py` from the repository
root, then `vercel --prod` from this directory. Publish Pages as usual as well.
Snapshot updates are shared automatically. The original Pages address remains
available. Browser-local preferences are separate on each domain.
