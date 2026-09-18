window.ROUTER_SNAPSHOT = {
  "schemaVersion": 2,
  "capturedAt": "2026-09-18T15:22:52.744973+00:00",
  "liveCapturedAt": "2026-09-18T15:22:52.744973+00:00",
  "model": "gpt-6-astra",
  "source": "Codex Pro",
  "minMultiplier": 0.2,
  "marketTotal": 85,
  "count": 73,
  "complete": true,
  "pricing": {
    "model_name": "gpt-6-astra",
    "quota_type": 0,
    "model_ratio": 5,
    "model_price": 0,
    "owner_by": "",
    "completion_ratio": 5,
    "cache_ratio": 0.1,
    "enable_groups": [],
    "supported_endpoint_types": [
      "openai"
    ],
    "billing_mode": "tiered_expr",
    "billing_expr": "len \u003c= 272000 ? tier(\"0_272k\", p * 10 + c * 50 + cr * 1 + cc * 12.5) : tier(\"272k_plus\", p * 20 + c * 75 + cr * 2 + cc * 25)",
    "pricing_version": "9d31d94c6e1ec64de1cf66f93783919fa08f15504215145e869f095730c9f728",
    "pricing_available": true
  },
  "quotaPerUnit": 500000,
  "currency": "USD platform quota",
  "sources": [
    "https://shu26.cfd/api/marketplace/groups?model=gpt-6-astra&window_hours=24&page=1&page_size=20&source=Codex+Pro",
    "https://shu26.cfd/api/group-status",
    "https://shu26.cfd/api/pricing",
    "https://shu26.cfd/api/status"
  ],
  "rows": [
    {
      "id": "07eb296c65c54f6ab3f90f7363e604a8",
      "channelId": "466",
      "name": "466-Codex Pro-0.5x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.5,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 3,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 66.53,
      "groupRequests": 2360,
      "groupSuccess": 93.09,
      "ttftAvg": 3192,
      "ttftP50": 2000,
      "ttftP95": 5000,
      "ttftSamples": 2094,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.023548,
      "maxConcurrency": 200,
      "currentConcurrency": 3,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 3
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 83.88278388278388,
      "latestGroupRequests": 273,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 44,
          "windowHours": 1,
          "cache": 89.6
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 226,
          "windowHours": 1,
          "cache": 16.18
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 3,
          "windowHours": 1,
          "cache": 66.53
        }
      ]
    },
    {
      "id": "c4fc885c26814c92879ffdfce12f7b7e",
      "channelId": "440",
      "name": "440-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 316,
      "modelWindowHours": 1,
      "success": 91.45569620253164,
      "cache": 93.75,
      "groupRequests": 24978,
      "groupSuccess": 96.04,
      "ttftAvg": 9603,
      "ttftP50": 5000,
      "ttftP95": 20000,
      "ttftSamples": 21366,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.770182,
      "maxConcurrency": 200,
      "currentConcurrency": 5,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 98.63013698630137,
          "request_count": 876
        },
        {
          "ts": 1789729200,
          "success_rate": 99.56584659913169,
          "request_count": 691
        },
        {
          "ts": 1789732800,
          "success_rate": 92.15358931552588,
          "request_count": 599
        },
        {
          "ts": 1789736400,
          "success_rate": 94.12997903563941,
          "request_count": 477
        },
        {
          "ts": 1789740000,
          "success_rate": 97.00996677740864,
          "request_count": 602
        },
        {
          "ts": 1789743600,
          "success_rate": 91.45569620253164,
          "request_count": 316
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 93.33333333333333,
      "latestGroupRequests": 405,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "healthy",
          "success": 100,
          "requests": 38,
          "windowHours": 1,
          "cache": 82.22
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 34,
          "windowHours": 1,
          "cache": 87.12
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 17,
          "windowHours": 1,
          "cache": 86.3
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 91.45569620253164,
          "requests": 316,
          "windowHours": 1,
          "cache": 93.75
        }
      ]
    },
    {
      "id": "5f32196895b34f7ca398b514402937aa",
      "channelId": "551",
      "name": "551-Codex Pro-0.2889x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.2889,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 75.21,
      "groupRequests": 2430,
      "groupSuccess": 94.44,
      "ttftAvg": 6187,
      "ttftP50": 5000,
      "ttftP95": 15000,
      "ttftSamples": 2290,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.214944,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 80,
          "request_count": 5
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": 0,
          "request_count": 1
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 0,
      "latestGroupRequests": 3,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 89.98
        },
        {
          "model": "gpt-5.6-terra",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 84.27
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 75.21
        }
      ]
    },
    {
      "id": "fe9f2ce121284a0980e2f6e05164f120",
      "channelId": "525",
      "name": "525-Codex Pro-0.26x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "codex-auto-review"
      ],
      "multiplier": 0.26,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 296,
      "modelWindowHours": 1,
      "success": 97.63513513513513,
      "cache": 92.44,
      "groupRequests": 15377,
      "groupSuccess": 95.79,
      "ttftAvg": 9967,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 12893,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.463448,
      "maxConcurrency": 40,
      "currentConcurrency": 13,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 95.38461538461539,
          "request_count": 130
        },
        {
          "ts": 1789729200,
          "success_rate": 93.47826086956522,
          "request_count": 46
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 58
        },
        {
          "ts": 1789736400,
          "success_rate": 99.10714285714286,
          "request_count": 224
        },
        {
          "ts": 1789740000,
          "success_rate": 96.93251533742331,
          "request_count": 489
        },
        {
          "ts": 1789743600,
          "success_rate": 97.63513513513513,
          "request_count": 296
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 97.31543624161074,
      "latestGroupRequests": 596,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 97.58620689655172,
          "requests": 290,
          "windowHours": 1,
          "cache": 93.43
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 97.63513513513513,
          "requests": 296,
          "windowHours": 1,
          "cache": 92.44
        },
        {
          "model": "codex-auto-review",
          "status": "unstable",
          "success": 80,
          "requests": 10,
          "windowHours": 1,
          "cache": 87.94
        }
      ]
    },
    {
      "id": "9261a9c42f034bce8088158c23892096",
      "channelId": "295",
      "name": "295-Codex Pro-0.65x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.65,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 93.28,
      "groupRequests": 130,
      "groupSuccess": 91.54,
      "ttftAvg": 3745,
      "ttftP50": 2000,
      "ttftP95": 5000,
      "ttftSamples": 129,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 94.66
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 68.92
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 93.28
        }
      ]
    },
    {
      "id": "cea48c8c5ac840cb95662fc99c5d06d0",
      "channelId": "503",
      "name": "503-Codex Pro-0.215x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.215,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 262,
      "modelWindowHours": 1,
      "success": 98.47328244274809,
      "cache": 89.55,
      "groupRequests": 14137,
      "groupSuccess": 94.45,
      "ttftAvg": 10102,
      "ttftP50": 5000,
      "ttftP95": 15000,
      "ttftSamples": 11567,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.516394,
      "maxConcurrency": 500,
      "currentConcurrency": 12,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 97.06546275395034,
          "request_count": 443
        },
        {
          "ts": 1789729200,
          "success_rate": 97.83549783549783,
          "request_count": 462
        },
        {
          "ts": 1789732800,
          "success_rate": 99.07621247113164,
          "request_count": 433
        },
        {
          "ts": 1789736400,
          "success_rate": 88.37638376383764,
          "request_count": 542
        },
        {
          "ts": 1789740000,
          "success_rate": 98.60627177700349,
          "request_count": 574
        },
        {
          "ts": 1789743600,
          "success_rate": 98.47328244274809,
          "request_count": 262
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 97.13340683572216,
      "latestGroupRequests": 907,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "unstable",
          "success": 88.88888888888889,
          "requests": 54,
          "windowHours": 1,
          "cache": 91.13
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 97.9381443298969,
          "requests": 582,
          "windowHours": 1,
          "cache": 89.99
        },
        {
          "model": "gpt-5.6-terra",
          "status": "failed",
          "success": 55.55555555555556,
          "requests": 9,
          "windowHours": 1,
          "cache": 79.31
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 98.47328244274809,
          "requests": 262,
          "windowHours": 1,
          "cache": 89.55
        }
      ]
    },
    {
      "id": "e68b9a7d91824423be1cb6e82602eaca",
      "channelId": "467",
      "name": "467-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-5.6-terra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "unstable",
      "modelRequests": 43,
      "modelWindowHours": 1,
      "success": 81.3953488372093,
      "cache": 89.42,
      "groupRequests": 13041,
      "groupSuccess": 95.45,
      "ttftAvg": 9998,
      "ttftP50": 5000,
      "ttftP95": 15000,
      "ttftSamples": 12952,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.596668,
      "maxConcurrency": 0,
      "currentConcurrency": 3,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 41.66666666666667,
          "request_count": 96
        },
        {
          "ts": 1789729200,
          "success_rate": 74.54545454545455,
          "request_count": 55
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 51
        },
        {
          "ts": 1789736400,
          "success_rate": 96.29629629629629,
          "request_count": 81
        },
        {
          "ts": 1789740000,
          "success_rate": 57.77777777777777,
          "request_count": 135
        },
        {
          "ts": 1789743600,
          "success_rate": 81.3953488372093,
          "request_count": 43
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 93.6986301369863,
      "latestGroupRequests": 365,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 95.32710280373831,
          "requests": 321,
          "windowHours": 1,
          "cache": 92.48
        },
        {
          "model": "gpt-6-astra",
          "status": "unstable",
          "success": 81.3953488372093,
          "requests": 43,
          "windowHours": 1,
          "cache": 89.42
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 94.02
        }
      ]
    },
    {
      "id": "cca5300ab0594ea7a88de07b7b8e63dc",
      "channelId": "552",
      "name": "552-Codex Pro-0.32x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.32,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "failed",
      "modelRequests": 2,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 95.28,
      "groupRequests": 660,
      "groupSuccess": 96.21,
      "ttftAvg": 9992,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 636,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789740000,
          "success_rate": 11.11111111111111,
          "request_count": 18
        },
        {
          "ts": 1789743600,
          "success_rate": 0,
          "request_count": 2
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 95.74468085106383,
      "latestGroupRequests": 47,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 45,
          "windowHours": 1,
          "cache": 91.03
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 2,
          "windowHours": 1,
          "cache": 95.28
        }
      ]
    },
    {
      "id": "d41e75dd453a483f807aa1328bf77d47",
      "channelId": "490",
      "name": "490-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 11,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 83.66,
      "groupRequests": 2970,
      "groupSuccess": 86.84,
      "ttftAvg": 13505,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 942,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.0119,
      "maxConcurrency": 100,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 30
        },
        {
          "ts": 1789729200,
          "success_rate": 73.33333333333333,
          "request_count": 30
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 30
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 34
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 75
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 11
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 40,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 17,
          "windowHours": 1,
          "cache": 85.84
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 12,
          "windowHours": 1,
          "cache": 83.32
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 11,
          "windowHours": 1,
          "cache": 83.66
        }
      ]
    },
    {
      "id": "2f109e7d813a442fa390de8ae697b962",
      "channelId": "452",
      "name": "452-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 54,
      "modelWindowHours": 1,
      "success": 44.44444444444444,
      "cache": 89.47,
      "groupRequests": 3793,
      "groupSuccess": 93.91,
      "ttftAvg": 9353,
      "ttftP50": 5000,
      "ttftP95": 20000,
      "ttftSamples": 3425,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.78675,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 96.29629629629629,
          "request_count": 27
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 6
        },
        {
          "ts": 1789732800,
          "success_rate": 97.11191335740072,
          "request_count": 277
        },
        {
          "ts": 1789736400,
          "success_rate": 93.10344827586206,
          "request_count": 203
        },
        {
          "ts": 1789740000,
          "success_rate": 94.51219512195121,
          "request_count": 164
        },
        {
          "ts": 1789743600,
          "success_rate": 44.44444444444444,
          "request_count": 54
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 74.59016393442623,
      "latestGroupRequests": 122,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "healthy",
          "success": 100,
          "requests": 23,
          "windowHours": 1,
          "cache": 87.38
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 97.61904761904762,
          "requests": 42,
          "windowHours": 1,
          "cache": 86.1
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 3,
          "windowHours": 1,
          "cache": 61.15
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 44.44444444444444,
          "requests": 54,
          "windowHours": 1,
          "cache": 89.47
        }
      ]
    },
    {
      "id": "b5d2189668974ca1819703cb59070ab2",
      "channelId": "330",
      "name": "330-Codex Pro-0.279x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-5.6-terra",
        "codex-auto-review"
      ],
      "multiplier": 0.279,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 19,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 90.64,
      "groupRequests": 13403,
      "groupSuccess": 94.25,
      "ttftAvg": 9812,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 10949,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.59672,
      "maxConcurrency": 50,
      "currentConcurrency": 1,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 269
        },
        {
          "ts": 1789729200,
          "success_rate": 56.12903225806451,
          "request_count": 155
        },
        {
          "ts": 1789732800,
          "success_rate": 98.18181818181819,
          "request_count": 110
        },
        {
          "ts": 1789736400,
          "success_rate": 98.57142857142858,
          "request_count": 140
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 60
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 19
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 98.2905982905983,
      "latestGroupRequests": 117,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 97.59036144578313,
          "requests": 83,
          "windowHours": 1,
          "cache": 89.07
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 19,
          "windowHours": 1,
          "cache": 90.64
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 15,
          "windowHours": 1,
          "cache": 81.66
        },
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 70.23
        }
      ]
    },
    {
      "id": "ab39242226a2493da65058749e40b4ef",
      "channelId": "516",
      "name": "516-Codex Pro-0.23x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.23,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 89.08,
      "groupRequests": 1931,
      "groupSuccess": 89.23,
      "ttftAvg": 10255,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 1728,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.523246,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": 0,
          "request_count": 1
        },
        {
          "ts": 1789736400,
          "success_rate": 0,
          "request_count": 1
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 0,
      "latestGroupRequests": 1,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 91.71
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 89.08
        }
      ]
    },
    {
      "id": "c19218fee1f146ff93f053a47c6931b7",
      "channelId": "385",
      "name": "385-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 12,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 88.3,
      "groupRequests": 11299,
      "groupSuccess": 94.84,
      "ttftAvg": 11805,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 7745,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.677548,
      "maxConcurrency": 1000,
      "currentConcurrency": 4,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 86.66666666666667,
          "request_count": 45
        },
        {
          "ts": 1789729200,
          "success_rate": 46.93877551020408,
          "request_count": 98
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 43
        },
        {
          "ts": 1789736400,
          "success_rate": 94.73684210526315,
          "request_count": 38
        },
        {
          "ts": 1789740000,
          "success_rate": 96.92307692307692,
          "request_count": 65
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 12
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 99.16666666666667,
      "latestGroupRequests": 120,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "healthy",
          "success": 100,
          "requests": 3,
          "windowHours": 1,
          "cache": 67.82
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 98.9010989010989,
          "requests": 91,
          "windowHours": 1,
          "cache": 88.41
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 14,
          "windowHours": 1,
          "cache": 80.9
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 12,
          "windowHours": 1,
          "cache": 88.3
        }
      ]
    },
    {
      "id": "a9695b30a3cd47deb7990878eecc16bc",
      "channelId": "309",
      "name": "309-Codex Pro-0.29x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.29,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 51,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 84.46,
      "groupRequests": 4904,
      "groupSuccess": 97.68,
      "ttftAvg": 16320,
      "ttftP50": 10000,
      "ttftP95": 30000,
      "ttftSamples": 2218,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.687552,
      "maxConcurrency": 100,
      "currentConcurrency": 1,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 96.05263157894737,
          "request_count": 76
        },
        {
          "ts": 1789729200,
          "success_rate": 89.40092165898618,
          "request_count": 217
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 107
        },
        {
          "ts": 1789736400,
          "success_rate": 94.39252336448598,
          "request_count": 107
        },
        {
          "ts": 1789740000,
          "success_rate": 98.52941176470588,
          "request_count": 136
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 51
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 69,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 66.38
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 15,
          "windowHours": 1,
          "cache": 79.77
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 88.08
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 51,
          "windowHours": 1,
          "cache": 84.46
        }
      ]
    },
    {
      "id": "76fdfb467862408ea1cee481dd6a0cd0",
      "channelId": "441",
      "name": "441-Codex Pro-0.24x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-5.6-terra"
      ],
      "multiplier": 0.24,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 158,
      "modelWindowHours": 1,
      "success": 93.0379746835443,
      "cache": 87.53,
      "groupRequests": 16096,
      "groupSuccess": 87.98,
      "ttftAvg": 12324,
      "ttftP50": 7500,
      "ttftP95": 30000,
      "ttftSamples": 13387,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.608232,
      "maxConcurrency": 100,
      "currentConcurrency": 3,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 82.82828282828282,
          "request_count": 99
        },
        {
          "ts": 1789729200,
          "success_rate": 94.04761904761905,
          "request_count": 84
        },
        {
          "ts": 1789732800,
          "success_rate": 98.58156028368793,
          "request_count": 141
        },
        {
          "ts": 1789736400,
          "success_rate": 93.54838709677419,
          "request_count": 186
        },
        {
          "ts": 1789740000,
          "success_rate": 97.26027397260275,
          "request_count": 365
        },
        {
          "ts": 1789743600,
          "success_rate": 93.0379746835443,
          "request_count": 158
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 93.72384937238493,
      "latestGroupRequests": 239,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 94.8051948051948,
          "requests": 77,
          "windowHours": 1,
          "cache": 89.58
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 93.0379746835443,
          "requests": 158,
          "windowHours": 1,
          "cache": 87.53
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 4,
          "windowHours": 1,
          "cache": 68.59
        }
      ]
    },
    {
      "id": "19f45f73795a484d9b5fdfd4856878d3",
      "channelId": "416",
      "name": "416-Codex Pro-0.32x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.32,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 27,
      "modelWindowHours": 1,
      "success": 96.29629629629629,
      "cache": 91.05,
      "groupRequests": 4119,
      "groupSuccess": 95.46,
      "ttftAvg": 9547,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 2671,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.850138,
      "maxConcurrency": 100,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 99.21259842519686,
          "request_count": 127
        },
        {
          "ts": 1789729200,
          "success_rate": 81.57894736842105,
          "request_count": 76
        },
        {
          "ts": 1789732800,
          "success_rate": 98.59154929577466,
          "request_count": 71
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 74
        },
        {
          "ts": 1789740000,
          "success_rate": 98.66666666666667,
          "request_count": 75
        },
        {
          "ts": 1789743600,
          "success_rate": 96.29629629629629,
          "request_count": 27
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 97.5609756097561,
      "latestGroupRequests": 41,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 14,
          "windowHours": 1,
          "cache": 84.36
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 96.29629629629629,
          "requests": 27,
          "windowHours": 1,
          "cache": 91.05
        }
      ]
    },
    {
      "id": "8de3f4b626ce4f8d86ac6e5cc30713b2",
      "channelId": "355",
      "name": "355-Codex Pro-0.26x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.26,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 35,
      "modelWindowHours": 1,
      "success": 2.857142857142857,
      "cache": 84.37,
      "groupRequests": 1030,
      "groupSuccess": 86.7,
      "ttftAvg": 8057,
      "ttftP50": 5000,
      "ttftP95": 10000,
      "ttftSamples": 932,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.621692,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": 98.52941176470588,
          "request_count": 68
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 97
        },
        {
          "ts": 1789736400,
          "success_rate": 68.08510638297872,
          "request_count": 94
        },
        {
          "ts": 1789740000,
          "success_rate": 2.857142857142857,
          "request_count": 35
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 8.108108108108109,
      "latestGroupRequests": 37,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 84.87
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 2.857142857142857,
          "requests": 35,
          "windowHours": 1,
          "cache": 84.37
        }
      ]
    },
    {
      "id": "e9c37bb8c32f45f88610e8d9a09b828a",
      "channelId": "545",
      "name": "545-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 8,
      "modelWindowHours": 1,
      "success": 62.5,
      "cache": 91.99,
      "groupRequests": 9335,
      "groupSuccess": 94.89,
      "ttftAvg": 10395,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 9195,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.553128,
      "maxConcurrency": 200,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 98.86363636363636,
          "request_count": 88
        },
        {
          "ts": 1789729200,
          "success_rate": 98.30508474576271,
          "request_count": 59
        },
        {
          "ts": 1789732800,
          "success_rate": 94.11764705882352,
          "request_count": 17
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789740000,
          "success_rate": 82.75862068965517,
          "request_count": 87
        },
        {
          "ts": 1789743600,
          "success_rate": 62.5,
          "request_count": 8
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 95.30516431924883,
      "latestGroupRequests": 213,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 76.65
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 89.48
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 96.58536585365853,
          "requests": 205,
          "windowHours": 1,
          "cache": 93.37
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 83.07
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 62.5,
          "requests": 8,
          "windowHours": 1,
          "cache": 91.99
        }
      ]
    },
    {
      "id": "03939e48b62f4bdfa709d5c71b0d2718",
      "channelId": "535",
      "name": "535-Codex Pro-0.35x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.35,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "failed",
      "modelRequests": 23,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 94.73,
      "groupRequests": 1569,
      "groupSuccess": 89.55,
      "ttftAvg": 17615,
      "ttftP50": 7500,
      "ttftP95": 45000,
      "ttftSamples": 1556,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.969288,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 85.1063829787234,
          "request_count": 47
        },
        {
          "ts": 1789729200,
          "success_rate": 33.33333333333333,
          "request_count": 6
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": 0,
          "request_count": 22
        },
        {
          "ts": 1789743600,
          "success_rate": 0,
          "request_count": 23
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 44.57831325301204,
      "latestGroupRequests": 83,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unstable",
          "success": 75,
          "requests": 4,
          "windowHours": 1,
          "cache": 88.25
        },
        {
          "model": "gpt-5.6-terra",
          "status": "failed",
          "success": 60.71428571428571,
          "requests": 56,
          "windowHours": 1,
          "cache": 82.96
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 23,
          "windowHours": 1,
          "cache": 94.73
        }
      ]
    },
    {
      "id": "9fe835af7e6e4b80a90b013204b79ae9",
      "channelId": "244",
      "name": "244-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 74.81,
      "groupRequests": 209,
      "groupSuccess": 84.69,
      "ttftAvg": 7450,
      "ttftP50": 5000,
      "ttftP95": 15000,
      "ttftSamples": 184,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.95198,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 33.33333333333333,
      "latestGroupRequests": 15,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 33.33333333333333,
          "requests": 15,
          "windowHours": 1,
          "cache": 77.42
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 74.81
        }
      ]
    },
    {
      "id": "7ef2f4b1c3d6409ba3512a9ec83e256d",
      "channelId": "153",
      "name": "153-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 12,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 87.59,
      "groupRequests": 8172,
      "groupSuccess": 85.07,
      "ttftAvg": 9738,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 6349,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.751726,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 97.70642201834863,
          "request_count": 436
        },
        {
          "ts": 1789729200,
          "success_rate": 3.7383177570093453,
          "request_count": 107
        },
        {
          "ts": 1789732800,
          "success_rate": 0,
          "request_count": 30
        },
        {
          "ts": 1789736400,
          "success_rate": 0,
          "request_count": 33
        },
        {
          "ts": 1789740000,
          "success_rate": 0,
          "request_count": 42
        },
        {
          "ts": 1789743600,
          "success_rate": 0,
          "request_count": 12
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 0,
      "latestGroupRequests": 46,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 34,
          "windowHours": 1,
          "cache": 88.81
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 12,
          "windowHours": 1,
          "cache": 87.59
        }
      ]
    },
    {
      "id": "e25d0a1d12b048a39a1a1b0b7dc184eb",
      "channelId": "44",
      "name": "44-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 61,
      "modelWindowHours": 1,
      "success": 95.08196721311475,
      "cache": 90.66,
      "groupRequests": 10877,
      "groupSuccess": 92.05,
      "ttftAvg": 10780,
      "ttftP50": 5000,
      "ttftP95": 15000,
      "ttftSamples": 8577,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.558738,
      "maxConcurrency": 50,
      "currentConcurrency": 1,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 97.2972972972973,
          "request_count": 148
        },
        {
          "ts": 1789729200,
          "success_rate": 65.3061224489796,
          "request_count": 98
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 66
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 39
        },
        {
          "ts": 1789740000,
          "success_rate": 95.78947368421052,
          "request_count": 190
        },
        {
          "ts": 1789743600,
          "success_rate": 95.08196721311475,
          "request_count": 61
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 97.16312056737588,
      "latestGroupRequests": 141,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 58,
          "windowHours": 1,
          "cache": 89.94
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 95.45454545454545,
          "requests": 22,
          "windowHours": 1,
          "cache": 90.01
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 95.08196721311475,
          "requests": 61,
          "windowHours": 1,
          "cache": 90.66
        }
      ]
    },
    {
      "id": "d8c3831a51d24ac3a2d85a52d7b7e60c",
      "channelId": "550",
      "name": "550-Codex Pro-0.2888x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.2888,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 101,
      "modelWindowHours": 1,
      "success": 40.5940594059406,
      "cache": 89.95,
      "groupRequests": 1846,
      "groupSuccess": 87.05,
      "ttftAvg": 19819,
      "ttftP50": 10000,
      "ttftP95": 45000,
      "ttftSamples": 1711,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.666984,
      "maxConcurrency": 1000,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 11
        },
        {
          "ts": 1789729200,
          "success_rate": 96.96969696969697,
          "request_count": 33
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 20
        },
        {
          "ts": 1789736400,
          "success_rate": 92.7710843373494,
          "request_count": 83
        },
        {
          "ts": 1789740000,
          "success_rate": 40.5940594059406,
          "request_count": 101
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 46.15384615384615,
      "latestGroupRequests": 117,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 70,
          "requests": 10,
          "windowHours": 1,
          "cache": 83.12
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 6,
          "windowHours": 1,
          "cache": 74.82
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 40.5940594059406,
          "requests": 101,
          "windowHours": 1,
          "cache": 89.95
        }
      ]
    },
    {
      "id": "6d258194af484af7a31251ba7d9c3cff",
      "channelId": "218",
      "name": "218-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-image-2",
        "gpt-6-astra",
        "gpt-image-2.5-flare",
        "gpt-image-2.5-sunburst"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 92.16,
      "groupRequests": 445,
      "groupSuccess": 83.82,
      "ttftAvg": 10601,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 393,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.439612,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 7,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 6,
          "windowHours": 1,
          "cache": 76.01
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 85.18
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 92.16
        },
        {
          "model": "gpt-image-2.5-flare",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2.5-sunburst",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "663a02e550454f528bdb25cd57058084",
      "channelId": "501",
      "name": "501-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 47,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 90.61,
      "groupRequests": 4395,
      "groupSuccess": 83.37,
      "ttftAvg": 15675,
      "ttftP50": 7500,
      "ttftP95": 45000,
      "ttftSamples": 3595,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.515372,
      "maxConcurrency": 50,
      "currentConcurrency": 4,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 29
        },
        {
          "ts": 1789729200,
          "success_rate": 93.10344827586206,
          "request_count": 29
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 83
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 8
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 38
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 47
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 97.72727272727273,
      "latestGroupRequests": 132,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 96.47058823529412,
          "requests": 85,
          "windowHours": 1,
          "cache": 88.08
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 47,
          "windowHours": 1,
          "cache": 90.61
        }
      ]
    },
    {
      "id": "260b1d107a8f415291a9d8953b1aec80",
      "channelId": "80",
      "name": "80-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 23,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 86.27,
      "groupRequests": 14203,
      "groupSuccess": 91.32,
      "ttftAvg": 10139,
      "ttftP50": 5000,
      "ttftP95": 20000,
      "ttftSamples": 12044,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.535802,
      "maxConcurrency": 0,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 80.97826086956522,
          "request_count": 184
        },
        {
          "ts": 1789729200,
          "success_rate": 94.23076923076923,
          "request_count": 104
        },
        {
          "ts": 1789732800,
          "success_rate": 97.77777777777777,
          "request_count": 45
        },
        {
          "ts": 1789736400,
          "success_rate": 93.19371727748691,
          "request_count": 191
        },
        {
          "ts": 1789740000,
          "success_rate": 90.33333333333333,
          "request_count": 300
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 23
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 96.82539682539682,
      "latestGroupRequests": 63,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 69.87
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 94.87179487179486,
          "requests": 39,
          "windowHours": 1,
          "cache": 87.48
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 23,
          "windowHours": 1,
          "cache": 86.27
        }
      ]
    },
    {
      "id": "50372a1bc6f94e2ba0ce620778c36ea8",
      "channelId": "72",
      "name": "72-Codex Pro-0.289x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.289,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "healthy",
      "modelRequests": 45,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 87.15,
      "groupRequests": 4388,
      "groupSuccess": 96.01,
      "ttftAvg": 7490,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 4341,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 2.792152,
      "maxConcurrency": 100,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 93.24324324324324,
          "request_count": 222
        },
        {
          "ts": 1789729200,
          "success_rate": 95.08196721311475,
          "request_count": 305
        },
        {
          "ts": 1789732800,
          "success_rate": 94.39655172413794,
          "request_count": 232
        },
        {
          "ts": 1789736400,
          "success_rate": 90.69767441860465,
          "request_count": 86
        },
        {
          "ts": 1789740000,
          "success_rate": 95.74468085106383,
          "request_count": 141
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 45
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 47,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 84.06
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 45,
          "windowHours": 1,
          "cache": 87.15
        }
      ]
    },
    {
      "id": "d5dce405b91347589f1317214a505d8e",
      "channelId": "567",
      "name": "567-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 51,
      "modelWindowHours": 1,
      "success": 96.07843137254902,
      "cache": 86.15,
      "groupRequests": 442,
      "groupSuccess": 77.38,
      "ttftAvg": 5030,
      "ttftP50": 5000,
      "ttftP95": 10000,
      "ttftSamples": 347,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 2.022222,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 22
        },
        {
          "ts": 1789736400,
          "success_rate": 57.89473684210527,
          "request_count": 38
        },
        {
          "ts": 1789740000,
          "success_rate": 90.9090909090909,
          "request_count": 11
        },
        {
          "ts": 1789743600,
          "success_rate": 96.07843137254902,
          "request_count": 51
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 96.15384615384616,
      "latestGroupRequests": 52,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 96.92
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 96.07843137254902,
          "requests": 51,
          "windowHours": 1,
          "cache": 86.15
        }
      ]
    },
    {
      "id": "ca3f6b848d474e509a7d1ccfd946ead2",
      "channelId": "420",
      "name": "420-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 6,
      "modelWindowHours": 1,
      "success": 66.66666666666666,
      "cache": 81.01,
      "groupRequests": 2242,
      "groupSuccess": 80.33,
      "ttftAvg": 12764,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 2053,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.678542,
      "maxConcurrency": 30,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 22.22222222222222,
          "request_count": 36
        },
        {
          "ts": 1789729200,
          "success_rate": 0,
          "request_count": 3
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 10
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 48
        },
        {
          "ts": 1789740000,
          "success_rate": 98.30508474576271,
          "request_count": 59
        },
        {
          "ts": 1789743600,
          "success_rate": 66.66666666666666,
          "request_count": 6
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 94.04761904761907,
      "latestGroupRequests": 84,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 96.15384615384616,
          "requests": 78,
          "windowHours": 1,
          "cache": 88.03
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 66.66666666666666,
          "requests": 6,
          "windowHours": 1,
          "cache": 81.01
        }
      ]
    },
    {
      "id": "505dd119c03349b2ad712d85f5219087",
      "channelId": "76",
      "name": "76-Codex Pro-0.22x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.22,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 42,
      "groupSuccess": 97.62,
      "ttftAvg": 8273,
      "ttftP50": 3000,
      "ttftP95": 20000,
      "ttftSamples": 41,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.383104,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 83.33333333333333,
      "latestGroupRequests": 6,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 87.17
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unstable",
          "success": 75,
          "requests": 4,
          "windowHours": 1,
          "cache": 36.73
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        }
      ]
    },
    {
      "id": "b31c5c2435234e84b8d6b14944582351",
      "channelId": "537",
      "name": "537-Codex Pro-0.35x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.35,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 55.8,
      "groupRequests": 66,
      "groupSuccess": 98.48,
      "ttftAvg": 15427,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 66,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 80
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 61.52
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 55.8
        }
      ]
    },
    {
      "id": "8a74e669a4f74ea1bdce090251a2f28c",
      "channelId": "335",
      "name": "335-Codex Pro-0.8x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.8,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 95.16,
      "groupRequests": 54,
      "groupSuccess": 100,
      "ttftAvg": 5701,
      "ttftP50": 3000,
      "ttftP95": 3000,
      "ttftSamples": 54,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 1,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 1,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 95.16
        }
      ]
    },
    {
      "id": "e008df1e54c84655b46cb345e694ddbe",
      "channelId": "350",
      "name": "350-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 89.92,
      "groupRequests": 351,
      "groupSuccess": 86.61,
      "ttftAvg": 15484,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 346,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.508544,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789729200,
          "success_rate": 2.3255813953488373,
          "request_count": 43
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 24,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 23,
          "windowHours": 1,
          "cache": 93.36
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 89.92
        }
      ]
    },
    {
      "id": "6eff70232add416ebd526ffd3ab5d0d6",
      "channelId": "489",
      "name": "489-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-5.6-terra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "failed",
      "modelRequests": 9,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 92.29,
      "groupRequests": 1076,
      "groupSuccess": 80.95,
      "ttftAvg": 12357,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 1045,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.649256,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 55.55555555555556,
          "request_count": 54
        },
        {
          "ts": 1789729200,
          "success_rate": 0,
          "request_count": 9
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 44.44444444444444,
      "latestGroupRequests": 18,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 87.23
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 9,
          "windowHours": 1,
          "cache": 92.29
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 100,
          "requests": 8,
          "windowHours": 1,
          "cache": 50.44
        }
      ]
    },
    {
      "id": "a8da00b88f7245d78eb7be72199bc7de",
      "channelId": "344",
      "name": "344-Codex Pro-0.279x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.279,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 9,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 95.88,
      "groupRequests": 480,
      "groupSuccess": 77.29,
      "ttftAvg": 8446,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 449,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 56.043956043956044,
          "request_count": 91
        },
        {
          "ts": 1789729200,
          "success_rate": 67.64705882352942,
          "request_count": 68
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 9
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 90,
      "latestGroupRequests": 10,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 82.63
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 86.88
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 9,
          "windowHours": 1,
          "cache": 95.88
        }
      ]
    },
    {
      "id": "bb5fbeca60f3468eaa063213980af61d",
      "channelId": "162",
      "name": "162-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 20,
      "modelWindowHours": 1,
      "success": 95,
      "cache": 75.69,
      "groupRequests": 352,
      "groupSuccess": 90.06,
      "ttftAvg": 12497,
      "ttftP50": 10000,
      "ttftP95": 30000,
      "ttftSamples": 342,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 2.652694,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 95,
          "request_count": 20
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 95,
      "latestGroupRequests": 20,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 83.62
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 82.14
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 95,
          "requests": 20,
          "windowHours": 1,
          "cache": 75.69
        }
      ]
    },
    {
      "id": "db9dfe3737b34640b8e9407272e030e7",
      "channelId": "71",
      "name": "71-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 66,
      "groupSuccess": 87.88,
      "ttftAvg": 18982,
      "ttftP50": 10000,
      "ttftP95": 60000,
      "ttftSamples": 57,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 1000,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 70.89
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "18d335825fc447ce963a2793e7421d3d",
      "channelId": "241",
      "name": "241-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": false,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 77.6,
      "groupRequests": 40,
      "groupSuccess": 95,
      "ttftAvg": 26739,
      "ttftP50": 15000,
      "ttftP95": 45000,
      "ttftSamples": 38,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.071318,
      "maxConcurrency": 20,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 46.07
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 77.6
        }
      ]
    },
    {
      "id": "a929259fabf44510a33104ff6c017294",
      "channelId": "338",
      "name": "338-Codex Pro-0.2338x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.2338,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 5,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 71.98,
      "groupRequests": 14,
      "groupSuccess": 100,
      "ttftAvg": 23659,
      "ttftP50": 7500,
      "ttftP95": 90000,
      "ttftSamples": 13,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.02712,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 5
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 6,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 41.28
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 5,
          "windowHours": 1,
          "cache": 71.98
        }
      ]
    },
    {
      "id": "5322c54899894b8c92be13d384717076",
      "channelId": "554",
      "name": "554-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 29.98,
      "groupRequests": 162,
      "groupSuccess": 72.22,
      "ttftAvg": 11120,
      "ttftP50": 7500,
      "ttftP95": 30000,
      "ttftSamples": 154,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 85.1
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 29.98
        }
      ]
    },
    {
      "id": "9cac3a04bff0465c8071aab8283605f4",
      "channelId": "445",
      "name": "445-Codex Pro-0.32x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.32,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 17,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 82.5,
      "groupRequests": 2525,
      "groupSuccess": 74.38,
      "ttftAvg": 9556,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 1967,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 2.598346,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 44
        },
        {
          "ts": 1789729200,
          "success_rate": 88.88888888888889,
          "request_count": 45
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 43
        },
        {
          "ts": 1789736400,
          "success_rate": 87.5,
          "request_count": 72
        },
        {
          "ts": 1789740000,
          "success_rate": 88.88888888888889,
          "request_count": 45
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 17
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 19,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 84.31
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 17,
          "windowHours": 1,
          "cache": 82.5
        }
      ]
    },
    {
      "id": "d9303b43bb4841e39563daaa4829c04c",
      "channelId": "254",
      "name": "254-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-image-2",
        "gpt-5.6-luna",
        "gpt-5.6-terra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 111,
      "groupSuccess": 78.38,
      "ttftAvg": 12786,
      "ttftP50": 5000,
      "ttftP95": 20000,
      "ttftSamples": 90,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 95,
      "latestGroupRequests": 20,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-luna",
          "status": "healthy",
          "success": 95,
          "requests": 20,
          "windowHours": 1,
          "cache": 48.49
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "66be9971c27349cb8f89bbdd4779666c",
      "channelId": "90",
      "name": "90-Codex Pro-0.48x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.48,
      "lifecycle": "active",
      "verified": false,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 69,
      "modelWindowHours": 1,
      "success": 98.55072463768117,
      "cache": 85.58,
      "groupRequests": 1889,
      "groupSuccess": 94.81,
      "ttftAvg": 9570,
      "ttftP50": 3000,
      "ttftP95": 45000,
      "ttftSamples": 1827,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 4.343986,
      "maxConcurrency": 100,
      "currentConcurrency": 2,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 97.59036144578313,
          "request_count": 83
        },
        {
          "ts": 1789729200,
          "success_rate": 96.03960396039604,
          "request_count": 101
        },
        {
          "ts": 1789732800,
          "success_rate": 95.1219512195122,
          "request_count": 41
        },
        {
          "ts": 1789736400,
          "success_rate": 92.98245614035088,
          "request_count": 57
        },
        {
          "ts": 1789740000,
          "success_rate": 98.46153846153847,
          "request_count": 65
        },
        {
          "ts": 1789743600,
          "success_rate": 98.55072463768117,
          "request_count": 69
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 98.59154929577466,
      "latestGroupRequests": 71,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 91.99
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 98.55072463768117,
          "requests": 69,
          "windowHours": 1,
          "cache": 85.58
        }
      ]
    },
    {
      "id": "82c210fb57894565b9259f490e1c2675",
      "channelId": "271",
      "name": "271-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-image-2",
        "gpt-5.6-luna",
        "gpt-5.6-terra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 81.51,
      "groupRequests": 106,
      "groupSuccess": 76.42,
      "ttftAvg": 12530,
      "ttftP50": 5000,
      "ttftP95": 20000,
      "ttftSamples": 87,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.665446,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 75,
      "latestGroupRequests": 12,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 30.03
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 81.51
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-luna",
          "status": "unstable",
          "success": 75,
          "requests": 12,
          "windowHours": 1,
          "cache": 30.61
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "0b61d945ce034d2fa950c3cc246f000a",
      "channelId": "517",
      "name": "517-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 87.49,
      "groupRequests": 39,
      "groupSuccess": 74.36,
      "ttftAvg": 16120,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 37,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.68783,
      "maxConcurrency": 1000,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 68.35
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 87.49
        }
      ]
    },
    {
      "id": "decc81e3846340b98702c0c34bcbb2f7",
      "channelId": "461",
      "name": "461-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 4,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 86.6,
      "groupRequests": 239,
      "groupSuccess": 60.67,
      "ttftAvg": 15323,
      "ttftP50": 5000,
      "ttftP95": 60000,
      "ttftSamples": 223,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.57112,
      "maxConcurrency": 20,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 4
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 5,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 4,
          "windowHours": 1,
          "cache": 86.6
        }
      ]
    },
    {
      "id": "013c20e2cb394ffdb47f154f773e5b82",
      "channelId": "93",
      "name": "93-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 12,
      "modelWindowHours": 1,
      "success": 91.66666666666666,
      "cache": 65.24,
      "groupRequests": 3596,
      "groupSuccess": 48.16,
      "ttftAvg": 14507,
      "ttftP50": 7500,
      "ttftP95": 20000,
      "ttftSamples": 543,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.928788,
      "maxConcurrency": 300,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 31
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 30
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 30
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 30
        },
        {
          "ts": 1789740000,
          "success_rate": 93.33333333333333,
          "request_count": 30
        },
        {
          "ts": 1789743600,
          "success_rate": 91.66666666666666,
          "request_count": 12
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 67.9245283018868,
      "latestGroupRequests": 53,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "healthy",
          "success": 91.66666666666666,
          "requests": 12,
          "windowHours": 1,
          "cache": 37.51
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unstable",
          "success": 82.35294117647058,
          "requests": 17,
          "windowHours": 1,
          "cache": 78.96
        },
        {
          "model": "gpt-5.6-terra",
          "status": "failed",
          "success": 0,
          "requests": 12,
          "windowHours": 1,
          "cache": 86.31
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 91.66666666666666,
          "requests": 12,
          "windowHours": 1,
          "cache": 65.24
        }
      ]
    },
    {
      "id": "19a93b3479c8401cbb367dc10e230070",
      "channelId": "399",
      "name": "399-Codex Pro-0.24x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-6-astra",
        "gpt-5.6-sol"
      ],
      "multiplier": 0.24,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 57.22,
      "groupRequests": 41,
      "groupSuccess": 75.61,
      "ttftAvg": 17890,
      "ttftP50": 10000,
      "ttftP95": 60000,
      "ttftSamples": 31,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.178462,
      "maxConcurrency": 30,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 1,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 57.22
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 50.21
        }
      ]
    },
    {
      "id": "73247c23624b49a49768b6c2a7524008",
      "channelId": "424",
      "name": "424-Codex Pro-0.299x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-6-astra"
      ],
      "multiplier": 0.299,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 79.11,
      "groupRequests": 184,
      "groupSuccess": 98.91,
      "ttftAvg": 8756,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 183,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 12
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 21
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 1,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 79.11
        }
      ]
    },
    {
      "id": "89ba7a9cecef48319068dc66cf386934",
      "channelId": "527",
      "name": "527-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 6,
      "groupSuccess": 66.67,
      "ttftAvg": 8774,
      "ttftP50": 10000,
      "ttftP95": 15000,
      "ttftSamples": 6,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.55336,
      "maxConcurrency": 10,
      "currentConcurrency": 1,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 54.17
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "ee0c51c7ca404f3fae8acc168bb5cbf4",
      "channelId": "497",
      "name": "497-Codex Pro-0.55x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.55,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 15,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 81.48,
      "groupRequests": 1566,
      "groupSuccess": 72.86,
      "ttftAvg": 13783,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 1157,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 7.642464,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 90.69767441860465,
          "request_count": 43
        },
        {
          "ts": 1789729200,
          "success_rate": 97.67441860465115,
          "request_count": 43
        },
        {
          "ts": 1789732800,
          "success_rate": 95.34883720930233,
          "request_count": 43
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 41
        },
        {
          "ts": 1789740000,
          "success_rate": 95.45454545454545,
          "request_count": 44
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 15
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 23,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 8,
          "windowHours": 1,
          "cache": 35.37
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 15,
          "windowHours": 1,
          "cache": 81.48
        }
      ]
    },
    {
      "id": "414ed5a8f5674da3a8beca5976b7b1ba",
      "channelId": "544",
      "name": "544-Codex Pro-0.245x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-6-astra"
      ],
      "multiplier": 0.245,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "failed",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 0,
      "cache": 55.97,
      "groupRequests": 7,
      "groupSuccess": 71.43,
      "ttftAvg": 11323,
      "ttftP50": 10000,
      "ttftP95": 15000,
      "ttftSamples": 3,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.76728,
      "maxConcurrency": 30,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 0,
          "request_count": 1
        },
        {
          "ts": 1789729200,
          "success_rate": 0,
          "request_count": 1
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 0,
      "latestGroupRequests": 1,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 0,
          "requests": 1,
          "windowHours": 1,
          "cache": 55.97
        }
      ]
    },
    {
      "id": "519e34eba1a04e018689b175edbca3b7",
      "channelId": "57",
      "name": "57-Codex Pro-0.28x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "codex-auto-review",
        "gpt-6-astra"
      ],
      "multiplier": 0.28,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 2,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 79.96,
      "groupRequests": 385,
      "groupSuccess": 78.18,
      "ttftAvg": 10716,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 378,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 7.889918,
      "maxConcurrency": 400,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789736400,
          "success_rate": 50,
          "request_count": 2
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 4,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 82.07
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 93.8
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 2,
          "windowHours": 1,
          "cache": 79.96
        }
      ]
    },
    {
      "id": "5776362721244a01875fafd199826880",
      "channelId": "557",
      "name": "557-Codex Pro-0.6x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.6,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 10,
      "groupSuccess": 100,
      "ttftAvg": 10969,
      "ttftP50": 10000,
      "ttftP95": 15000,
      "ttftSamples": 10,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 47.5
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        }
      ]
    },
    {
      "id": "d75b05c77d374c5aa369684f01c90971",
      "channelId": "208",
      "name": "208-Codex Pro-0.208x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.208,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 39.01,
      "groupRequests": 5,
      "groupSuccess": 100,
      "ttftAvg": 52200,
      "ttftP50": 15000,
      "ttftP95": 90000,
      "ttftSamples": 5,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.380202,
      "maxConcurrency": 30,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 1,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 14.18
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 39.01
        }
      ]
    },
    {
      "id": "444a48a313f345dca3b313969f60592b",
      "channelId": "526",
      "name": "526-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 2,
      "groupSuccess": 100,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 85.31
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "35a9974f63e74a9eb4b441e3a04c4b79",
      "channelId": "115",
      "name": "115-Codex Pro-0.215x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.215,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 85.77,
      "groupRequests": 12,
      "groupSuccess": 75,
      "ttftAvg": 21827,
      "ttftP50": 15000,
      "ttftP95": 20000,
      "ttftSamples": 8,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.679254,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 40,
      "latestGroupRequests": 5,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 25,
          "requests": 4,
          "windowHours": 1,
          "cache": 20.4
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 27.51
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 85.77
        }
      ]
    },
    {
      "id": "93fa8013cc394cc3afe0c37e8cc2b186",
      "channelId": "405",
      "name": "405-Codex Pro-0.2x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "codex-auto-review",
        "gpt-6-astra"
      ],
      "multiplier": 0.2,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unstable",
      "modelRequests": 12,
      "modelWindowHours": 1,
      "success": 83.33333333333334,
      "cache": 86.17,
      "groupRequests": 12,
      "groupSuccess": 83.33,
      "ttftAvg": 26794,
      "ttftP50": 15000,
      "ttftP95": 90000,
      "ttftSamples": 12,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": 83.33333333333334,
          "request_count": 12
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 83.33333333333334,
      "latestGroupRequests": 12,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unstable",
          "success": 83.33333333333334,
          "requests": 12,
          "windowHours": 1,
          "cache": 86.17
        }
      ]
    },
    {
      "id": "83349af05f87465ea605fbab2ade7748",
      "channelId": "470",
      "name": "470-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-6-astra",
        "gpt-5.6-terra",
        "gpt-5.6-sol"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 1,
      "groupSuccess": 100,
      "ttftAvg": 134115,
      "ttftP50": 180000,
      "ttftP95": 180000,
      "ttftSamples": 1,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 7.01
        }
      ]
    },
    {
      "id": "cb60d99c61224665a33d1a3e40d66b4c",
      "channelId": "377",
      "name": "377-Codex Pro-0.35x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-6-astra",
        "gpt-5.6-luna"
      ],
      "multiplier": 0.35,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 130,
      "groupSuccess": 3.08,
      "ttftAvg": 8405,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 125,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 93.8
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.6-luna",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        }
      ]
    },
    {
      "id": "b0810508b78d46e7b92486b7d041eae0",
      "channelId": "423",
      "name": "423-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-6-astra"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.15656,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "03a48df021294a8c81f9c0e73d21c5aa",
      "channelId": "408",
      "name": "408-Codex Pro-0.266x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-terra",
        "gpt-6-astra",
        "gpt-5.6-sol"
      ],
      "multiplier": 0.266,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 2,
      "groupSuccess": 50,
      "ttftAvg": 13168,
      "ttftP50": 10000,
      "ttftP95": 20000,
      "ttftSamples": 2,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 2.6862,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "b46515a26ac443dd9e70001a424d0394",
      "channelId": "276",
      "name": "276-Codex Pro-0.22x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.22,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 423,
      "groupSuccess": 3.31,
      "ttftAvg": 9008,
      "ttftP50": 7500,
      "ttftP95": 15000,
      "ttftSamples": 386,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 6.666666666666667,
      "latestGroupRequests": 15,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 11.11111111111111,
          "requests": 9,
          "windowHours": 1,
          "cache": 22.05
        },
        {
          "model": "gpt-5.6-terra",
          "status": "failed",
          "success": 0,
          "requests": 6,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        }
      ]
    },
    {
      "id": "58119ed8664b466f955a125908739978",
      "channelId": "219",
      "name": "219-Codex Pro-0.29x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.3-codex-spark",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.29,
      "lifecycle": "active",
      "verified": false,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 100,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.3-codex-spark",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "7bcc0f9bebd44ac58d6e500d47c2dbc6",
      "channelId": "417",
      "name": "417-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 3.0362,
      "maxConcurrency": 30,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "0d57898a48524a54a445daabab77bc27",
      "channelId": "549",
      "name": "549-Codex Pro-0.25x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.25,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "9f9ed80a336741c1bb98b3b96e98d11c",
      "channelId": "468",
      "name": "468-Codex Pro-0.4x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.4,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 1,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "c9971b3af6a9460898464b5240c197cc",
      "channelId": "465",
      "name": "465-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 50,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "c280b0b4939043fdbbadd56e2fbfb104",
      "channelId": "456",
      "name": "456-Codex Pro-0.6x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.6,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "7c6e0733c10046eca3f5a0609010ada8",
      "channelId": "419",
      "name": "419-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-6-astra",
        "gpt-5.6-sol"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 30,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "2ca5c99a8feb4ccb9128f71dc38394d0",
      "channelId": "396",
      "name": "396-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.2",
        "gpt-5.3-codex-spark",
        "gpt-5.4",
        "gpt-5.4-mini",
        "gpt-5.5",
        "gpt-5.6",
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 20,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.3-codex-spark",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.4",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.4-mini",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "48c7e7ba8d754c80be9ffddb0bfda55b",
      "channelId": "284",
      "name": "284-Codex Pro-0.35x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-6-astra",
        "gpt-5.5",
        "gpt-5.6-terra",
        "gpt-5.6-sol"
      ],
      "multiplier": 0.35,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 1,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "8faf5aa0adff4534ad8fbba5e956d1d8",
      "channelId": "176",
      "name": "176-Codex Pro-0.3x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-5.5",
        "codex-auto-review",
        "gpt-image-2",
        "gpt-6-astra",
        "gpt-image-2.5-flare",
        "gpt-image-2.5-sunburst"
      ],
      "multiplier": 0.3,
      "lifecycle": "active",
      "verified": false,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2.5-flare",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2.5-sunburst",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    }
  ],
  "lookupRows": [
    {
      "id": "addc7f5192a64591941208e01903a4d7",
      "channelId": "177",
      "name": "177-Codex Pro-0.1799x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.5",
        "gpt-6-astra"
      ],
      "multiplier": 0.1799,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 2,
      "modelWindowHours": 1,
      "success": 50,
      "cache": 88.4,
      "groupRequests": 1846,
      "groupSuccess": 85.37,
      "ttftAvg": 13414,
      "ttftP50": 7500,
      "ttftP95": 30000,
      "ttftSamples": 1772,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.369186,
      "maxConcurrency": 10000,
      "currentConcurrency": 3,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 59.57446808510638,
          "request_count": 94
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 68
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 24
        },
        {
          "ts": 1789736400,
          "success_rate": 80,
          "request_count": 20
        },
        {
          "ts": 1789740000,
          "success_rate": 99.42857142857143,
          "request_count": 175
        },
        {
          "ts": 1789743600,
          "success_rate": 50,
          "request_count": 2
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 89.28571428571429,
      "latestGroupRequests": 84,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 90.2439024390244,
          "requests": 82,
          "windowHours": 1,
          "cache": 88.45
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 50,
          "requests": 2,
          "windowHours": 1,
          "cache": 88.4
        }
      ]
    },
    {
      "id": "33946de04f404c04a23102a4391c8ecb",
      "channelId": "546",
      "name": "546-Codex Pro-0.1667x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra",
        "gpt-5.5"
      ],
      "multiplier": 0.1667,
      "lifecycle": "active",
      "verified": true,
      "observing": false,
      "modelStatus": "failed",
      "modelRequests": 3,
      "modelWindowHours": 1,
      "success": 66.66666666666666,
      "cache": 45.02,
      "groupRequests": 321,
      "groupSuccess": 95.02,
      "ttftAvg": 30318,
      "ttftP50": 15000,
      "ttftP95": 120000,
      "ttftSamples": 307,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.188412,
      "maxConcurrency": 10,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 85.71428571428571,
          "request_count": 14
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 6
        },
        {
          "ts": 1789732800,
          "success_rate": 66.66666666666666,
          "request_count": 3
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 81.81818181818181,
      "latestGroupRequests": 11,
      "latestGroupStatus": "unstable",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 11.92
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 12.69
        },
        {
          "model": "gpt-6-astra",
          "status": "failed",
          "success": 66.66666666666666,
          "requests": 3,
          "windowHours": 1,
          "cache": 45.02
        },
        {
          "model": "gpt-5.5",
          "status": "unstable",
          "success": 87.5,
          "requests": 8,
          "windowHours": 1,
          "cache": 89.64
        }
      ]
    },
    {
      "id": "cbeb94c27aa446eabbcf6c1981e53423",
      "channelId": "73",
      "name": "73-Codex Pro-0.18x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.18,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 3,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 29.56,
      "groupRequests": 419,
      "groupSuccess": 90.45,
      "ttftAvg": 8917,
      "ttftP50": 5000,
      "ttftP95": 30000,
      "ttftSamples": 415,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 1.727284,
      "maxConcurrency": 1000,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789729200,
          "success_rate": 100,
          "request_count": 2
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 3
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 92.98245614035088,
      "latestGroupRequests": 57,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "unstable",
          "success": 84.21052631578947,
          "requests": 19,
          "windowHours": 1,
          "cache": 82.26
        },
        {
          "model": "gpt-5.6-terra",
          "status": "healthy",
          "success": 97.14285714285714,
          "requests": 35,
          "windowHours": 1,
          "cache": 79.48
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 3,
          "windowHours": 1,
          "cache": 29.56
        }
      ]
    },
    {
      "id": "abfbc6e8082942af986c6824c6f937d4",
      "channelId": "339",
      "name": "339-Codex Pro-0.18x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.18,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 687,
      "groupSuccess": 79.62,
      "ttftAvg": 19686,
      "ttftP50": 5000,
      "ttftP95": 90000,
      "ttftSamples": 568,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 26.38
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "08847a19eeae4042b57ab94eef399d4c",
      "channelId": "180",
      "name": "180-Codex Pro-0.1499x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-6-astra",
        "gpt-image-2",
        "gpt-5.3-codex-spark",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "codex-auto-review"
      ],
      "multiplier": 0.1499,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 127,
      "groupSuccess": 78.74,
      "ttftAvg": 46154,
      "ttftP50": 30000,
      "ttftP95": 90000,
      "ttftSamples": 14,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 5,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 5,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.3-codex-spark",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "healthy",
          "success": 100,
          "requests": 5,
          "windowHours": 1,
          "cache": 76.78
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "a224592ce987445eb10a960f7a7a7b41",
      "channelId": "47",
      "name": "47-Codex Pro-0.15x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.5",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.15,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "healthy",
      "modelRequests": 1,
      "modelWindowHours": 1,
      "success": 100,
      "cache": 41.57,
      "groupRequests": 17,
      "groupSuccess": 88.24,
      "ttftAvg": 18401,
      "ttftP50": 7500,
      "ttftP95": 180000,
      "ttftSamples": 17,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 500,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789729200,
          "success_rate": 81.81818181818183,
          "request_count": 11
        },
        {
          "ts": 1789732800,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789736400,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789740000,
          "success_rate": 100,
          "request_count": 1
        },
        {
          "ts": 1789743600,
          "success_rate": 100,
          "request_count": 1
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 100,
      "latestGroupRequests": 1,
      "latestGroupStatus": "healthy",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "healthy",
          "success": 100,
          "requests": 1,
          "windowHours": 1,
          "cache": 41.57
        }
      ]
    },
    {
      "id": "666a0c0cb17a489b9c8d384107ccc868",
      "channelId": "261",
      "name": "261-Codex Pro-0.19x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.19,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": 0,
      "groupRequests": 42,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.548946,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 0,
      "latestGroupRequests": 2,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 0,
          "requests": 2,
          "windowHours": 1,
          "cache": 0
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": 0
        }
      ]
    },
    {
      "id": "812acbcfebeb474586faa406908e6501",
      "channelId": "294",
      "name": "294-Codex Pro-0.145x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.145,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 1,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": 0.994496,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "a722a3e345534bc683eed18adaa7bb48",
      "channelId": "263",
      "name": "263-Codex Pro-0.15x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.15,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "338bf85374cb4a8997b704d165e41933",
      "channelId": "54",
      "name": "54-Codex Pro-0.18x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.6-sol",
        "gpt-6-astra"
      ],
      "multiplier": 0.18,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 660,
      "groupSuccess": 5.15,
      "ttftAvg": 6507,
      "ttftP50": 3000,
      "ttftP95": 3000,
      "ttftSamples": 617,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 200,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": 16.666666666666664,
      "latestGroupRequests": 12,
      "latestGroupStatus": "failed",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "failed",
          "success": 16.666666666666664,
          "requests": 12,
          "windowHours": 1,
          "cache": 4.52
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "0ce7369e06e842bbb662a8d7e358771d",
      "channelId": "298",
      "name": "298-Codex Pro-0.14x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra"
      ],
      "multiplier": 0.14,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 0,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    },
    {
      "id": "acefe4e93e7a451fb48e50c8b73fe4a6",
      "channelId": "158",
      "name": "158-Codex Pro-0.198x",
      "source": "Codex Pro",
      "model": "gpt-6-astra",
      "models": [
        "codex-auto-review",
        "gpt-5.3-codex-spark",
        "gpt-5.5",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-6-astra",
        "gpt-image-2",
        "gpt-image-2-4K"
      ],
      "multiplier": 0.198,
      "lifecycle": "active",
      "verified": true,
      "observing": true,
      "modelStatus": "unknown",
      "modelRequests": 0,
      "modelWindowHours": 1,
      "success": null,
      "cache": null,
      "groupRequests": 0,
      "groupSuccess": 0,
      "ttftAvg": 0,
      "ttftP50": 0,
      "ttftP95": 0,
      "ttftSamples": 0,
      "ttftScope": "group_all_models_24h",
      "historicalCost": null,
      "maxConcurrency": 8888,
      "currentConcurrency": 0,
      "series": [
        {
          "ts": 1789725600,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789729200,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789732800,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789736400,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789740000,
          "success_rate": null,
          "request_count": 0
        },
        {
          "ts": 1789743600,
          "success_rate": null,
          "request_count": 0
        }
      ],
      "seriesWindowHours": 6,
      "latestGroupSuccess": null,
      "latestGroupRequests": 0,
      "latestGroupStatus": "unknown",
      "groupWindowHours": 1,
      "modelStats": [
        {
          "model": "codex-auto-review",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.3-codex-spark",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.5",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-sol",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-5.6-terra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-6-astra",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        },
        {
          "model": "gpt-image-2-4K",
          "status": "unknown",
          "success": null,
          "requests": 0,
          "windowHours": 1,
          "cache": null
        }
      ]
    }
  ],
  "modelSnapshots": {
    "claude-opus-5": {
      "schemaVersion": 2,
      "capturedAt": "2026-09-18T15:22:52.744973+00:00",
      "liveCapturedAt": "2026-09-18T15:22:52.744973+00:00",
      "model": "claude-opus-5",
      "source": null,
      "minMultiplier": 0.2,
      "marketTotal": 32,
      "count": 21,
      "complete": true,
      "pricing": {
        "model_name": "claude-opus-5",
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "owner_by": "",
        "completion_ratio": 5,
        "cache_ratio": 0.1,
        "create_cache_ratio": 1.25,
        "enable_groups": [],
        "supported_endpoint_types": [
          "anthropic",
          "openai"
        ],
        "pricing_version": "9d31d94c6e1ec64de1cf66f93783919fa08f15504215145e869f095730c9f728",
        "pricing_available": true
      },
      "quotaPerUnit": 500000,
      "currency": "USD platform quota",
      "sources": [
        "https://shu26.cfd/api/marketplace/groups?model=claude-opus-5&window_hours=24&page=1&page_size=20",
        "https://shu26.cfd/api/group-status",
        "https://shu26.cfd/api/pricing",
        "https://shu26.cfd/api/status"
      ],
      "rows": [
        {
          "id": "da8d86150e3749a7bdb02c9a7f7909a8",
          "channelId": "541",
          "name": "541-CC-Max-0.45x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.45,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 42,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 71.35,
          "groupRequests": 939,
          "groupSuccess": 90.31,
          "ttftAvg": 3657,
          "ttftP50": 2000,
          "ttftP95": 3000,
          "ttftSamples": 776,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 53.280586,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.96969696969697,
              "request_count": 33
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 57
            },
            {
              "ts": 1789732800,
              "success_rate": 75,
              "request_count": 80
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 31
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 42
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 70,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 94.74
            },
            {
              "model": "claude-fable-5-1",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 38.36
            },
            {
              "model": "claude-haiku-4-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 42,
              "windowHours": 1,
              "cache": 71.35
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 22,
              "windowHours": 1,
              "cache": 61.14
            }
          ]
        },
        {
          "id": "1acbc364a2034ff2b5cc6ed2ec732bb0",
          "channelId": "305",
          "name": "305-CC-Max-0.75x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.75,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 90.31,
          "groupRequests": 60,
          "groupSuccess": 100,
          "ttftAvg": 12456,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 60,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 20.70804,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 90.31
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "d3e23979795e4a1d85d83e2e4ac62dbe",
          "channelId": "270",
          "name": "270-CC-Max-0.66x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.66,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 65.32,
          "groupRequests": 34,
          "groupSuccess": 97.06,
          "ttftAvg": 6977,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 28,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 10.600512,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 62.51
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.32
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "fc4fe806072b4bb7b91f549df8242058",
          "channelId": "319",
          "name": "319-CC其它-1.5x",
          "source": "CC其它",
          "model": "claude-opus-5",
          "models": [
            "claude-opus-4-8",
            "claude-opus-5"
          ],
          "multiplier": 1.5,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 0,
          "groupRequests": 38,
          "groupSuccess": 100,
          "ttftAvg": 3367,
          "ttftP50": 3000,
          "ttftP95": 7500,
          "ttftSamples": 37,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 7.863476,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 2
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 2,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "18a425b0d61a478992a353f7addf4fe0",
          "channelId": "226",
          "name": "226-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 35.9,
          "groupRequests": 4,
          "groupSuccess": 100,
          "ttftAvg": 13459,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 4,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 352.573672,
          "maxConcurrency": 14,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 35.9
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "34e9a25042424ceabfde26ad7df36f93",
          "channelId": "460",
          "name": "460-CC-Max-0.9x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 3454,
          "ttftP50": 3000,
          "ttftP95": 5000,
          "ttftSamples": 3,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "f84c7fec87494435a99d29551c7424da",
          "channelId": "457",
          "name": "457-CC其它-0.9x",
          "source": "CC其它",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 36.99,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 24335,
          "ttftP50": 7500,
          "ttftP95": 7500,
          "ttftSamples": 2,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 15.811964,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 36.99
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "d33de2e5965c4bbdb69edd9050f2d23a",
          "channelId": "211",
          "name": "211-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "24607a9fdfc44ae59b87562404e29158",
          "channelId": "107",
          "name": "107-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 1,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a4bac302d0004097819ceaf77b003f9b",
          "channelId": "336",
          "name": "336-CC-Max-1.4x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8"
          ],
          "multiplier": 1.4,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "61a46c8bdbb84c388aa34d7e546e1489",
          "channelId": "42",
          "name": "42-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-5-20251101",
            "claude-opus-4-7",
            "claude-sonnet-4-6",
            "claude-sonnet-4-5-20250929",
            "claude-opus-5",
            "claude-opus-4-5",
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "1da58ad680bf49369ab04f2d56ff0941",
          "channelId": "273",
          "name": "273-CC-Max-1.15x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "418ee4a5ef3c4cba8d7bd243bbe65d2b",
          "channelId": "209",
          "name": "209-CC-Max-0.9x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "028ef872f1434713813028aec4e8af19",
          "channelId": "482",
          "name": "482-CC-Max-0.6x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-fable-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.6,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "2fde4b345c0445dcab872cc7c66accb4",
          "channelId": "454",
          "name": "454-CC其它-0.54x",
          "source": "CC其它",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8",
            "claude-opus-4-6",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-7"
          ],
          "multiplier": 0.54,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "15f832a2cbe14bdabe5adf91a276a4d7",
          "channelId": "449",
          "name": "449-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-5"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a316674642fa4035a6736a02e7d29a97",
          "channelId": "282",
          "name": "282-CC-Max-1.25x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 500,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "b189351efa0f4657a727c92e374c6c58",
          "channelId": "193",
          "name": "193-CC-Kiro-0.3x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-sonnet-4-6",
            "claude-opus-4-7",
            "claude-opus-5",
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "23cfad2b7fa64fc48a431ec152ab4f2f",
          "channelId": "125",
          "name": "125-CC-Max-1.5x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-opus-4-8",
            "claude-opus-5"
          ],
          "multiplier": 1.5,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "ddab352d9de14e7f89e7b9a43797910d",
          "channelId": "113",
          "name": "113-CC其它-0.55x",
          "source": "CC其它",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.55,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "23e5af13e19d4954b4cb5e61702ab798",
          "channelId": "23",
          "name": "23-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-5-20251101",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-5-20250929",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ],
      "lookupRows": [
        {
          "id": "1b60f63242164315856d1cb867c1f028",
          "channelId": "213",
          "name": "213-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 58,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 71.88,
          "groupRequests": 5469,
          "groupSuccess": 97.79,
          "ttftAvg": 9832,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 442,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.271788,
          "maxConcurrency": 100,
          "currentConcurrency": 3,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 98.48484848484848,
              "request_count": 198
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 178
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 161
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 148
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 151
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 58
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 172,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 52.31
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 69.38
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "healthy",
              "success": 100,
              "requests": 110,
              "windowHours": 1,
              "cache": 26.95
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 58,
              "windowHours": 1,
              "cache": 71.88
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 45.28
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 75.53
            }
          ]
        },
        {
          "id": "c29bceab27a74209a5b353e87236d0b6",
          "channelId": "476",
          "name": "476-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-3-5-haiku-20241022",
            "claude-3-5-sonnet-20240620",
            "claude-3-5-sonnet-20241022",
            "claude-3-7-sonnet-20250219",
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-1-20250805",
            "claude-opus-4-20250514",
            "claude-opus-4-5",
            "claude-opus-4-5-20251101",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-20250514",
            "claude-sonnet-4-5",
            "claude-sonnet-4-5-20250929",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 65.75,
          "groupRequests": 400,
          "groupSuccess": 95,
          "ttftAvg": 11168,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 373,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.910326,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-3-5-haiku-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0.15
            },
            {
              "model": "claude-3-5-sonnet-20240620",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-5-sonnet-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-7-sonnet-20250219",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 87.94
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 4.17
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-1-20250805",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 22.1
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.75
            },
            {
              "model": "claude-sonnet-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "447530eeda1c4b26826d719416eee2fc",
          "channelId": "264",
          "name": "264-CC-Kiro-0.11x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.11,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 79.56,
          "groupRequests": 744,
          "groupSuccess": 96.51,
          "ttftAvg": 9077,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 570,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.727764,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 2
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 21
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 19,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 97.37
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "healthy",
              "success": 100,
              "requests": 5,
              "windowHours": 1,
              "cache": 17.54
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 10,
              "windowHours": 1,
              "cache": 0.3
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 77.93
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 79.56
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "4a830b0ba52845c994bc482cb1ea7db7",
          "channelId": "453",
          "name": "453-CC-Kiro-0.14x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-sonnet-4-6",
            "claude-opus-4-7",
            "claude-opus-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-haiku-4-5-20251001",
            "claude-sonnet-5"
          ],
          "multiplier": 0.14,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 65.68,
          "groupRequests": 59,
          "groupSuccess": 100,
          "ttftAvg": 7660,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 58,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 8.735716,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.68
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 79.58
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 21.38
            }
          ]
        },
        {
          "id": "d9eb53c79bcf4a0889e072294ff99fba",
          "channelId": "227",
          "name": "227-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unstable",
          "modelRequests": 5,
          "modelWindowHours": 1,
          "success": 80,
          "cache": 93.48,
          "groupRequests": 1128,
          "groupSuccess": 99.02,
          "ttftAvg": 7236,
          "ttftP50": 5000,
          "ttftP95": 7500,
          "ttftSamples": 1116,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 25.260628,
          "maxConcurrency": 35,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 3
            },
            {
              "ts": 1789736400,
              "success_rate": 80,
              "request_count": 5
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.95918367346938,
          "latestGroupRequests": 49,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 14,
              "windowHours": 1,
              "cache": 92.49
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-4-7",
              "status": "healthy",
              "success": 100,
              "requests": 19,
              "windowHours": 1,
              "cache": 96.72
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-5",
              "status": "unstable",
              "success": 80,
              "requests": 5,
              "windowHours": 1,
              "cache": 93.48
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 11,
              "windowHours": 1,
              "cache": 54.79
            }
          ]
        },
        {
          "id": "5cb2feefd40e472d93f694466b633e4a",
          "channelId": "265",
          "name": "265-CC-Kiro-0.19x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.19,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 8,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 71.38,
          "groupRequests": 48,
          "groupSuccess": 89.58,
          "ttftAvg": 17264,
          "ttftP50": 10000,
          "ttftP95": 45000,
          "ttftSamples": 42,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 23.871812,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 8
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 75,
          "latestGroupRequests": 20,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "failed",
              "success": 54.54545454545454,
              "requests": 11,
              "windowHours": 1,
              "cache": 28.18
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 8,
              "windowHours": 1,
              "cache": 71.38
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "e9b902f084ce4e74bff5d609ae9f7006",
          "channelId": "281",
          "name": "281-CC-Kiro-0.16x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-haiku-4-5",
            "claude-opus-4-7",
            "claude-sonnet-4-6",
            "claude-opus-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-sonnet-5"
          ],
          "multiplier": 0.16,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 2,
          "groupSuccess": 100,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.0,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "0034d45601454634bdc778e860ecb29f",
          "channelId": "296",
          "name": "296-CC-Kiro-0.12x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.12,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 606,
          "groupSuccess": 1.82,
          "ttftAvg": 4092,
          "ttftP50": 5000,
          "ttftP95": 5000,
          "ttftSamples": 11,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 92.64
            }
          ]
        },
        {
          "id": "11fc178ea2334790aaf4056db7244b86",
          "channelId": "106",
          "name": "106-CC其它-0.1x",
          "source": "CC其它",
          "model": "claude-opus-5",
          "models": [
            "gemini-3.7-flash",
            "grok-4.20-multi-agent-0309",
            "claude-opus-5-thinking",
            "Qwen3.6-35B-A3B-FP8",
            "nvidia/llama-3.1-nemoguard-8b-content-safety",
            "grok-4.6",
            "meta/llama-3.1-8b-instruct",
            "cbai/glm-5v-turbo",
            "nvidia/nemotron-3-nano-30b-a3b",
            "seed-2.0-pro",
            "gpt-5.4",
            "grok-composer-2.5-fast",
            "claude-opus-4-8",
            "grok-build-0.1",
            "grok-4.20-0309-non-reasoning",
            "nvidia/llama-3.1-nemotron-nano-vl-8b-v1",
            "openrouter/free",
            "nvidia/ising-calibration-1.5-31b",
            "claude-opus-4.6",
            "nvidia/nemotron-3.5-content-safety",
            "kimi-k2.5",
            "meta/llama-3.2-11b-vision-instruct",
            "glm-5v-turbo",
            "poolside/laguna-s-2.1:free",
            "mimo-v2.5-pro",
            "moonshotai/Kimi-K2.6",
            "gemini-3.5-flash-thinking",
            "qwen3.7-max",
            "grok-4.5",
            "gemini-3.6-flash",
            "gemini-3.1-pro-enhanced",
            "Kimi-K2.6【本地达到限制就重试】",
            "gemini-flash-lite",
            "DeepSeek-V4-Pro",
            "kimi-k2.6【官】",
            "minimax-m2.7",
            "nvidia/nemotron-3.5-lightning-30b-a3b",
            "kimi-k2-thinking",
            "nvidia/llama-3.1-nemoguard-8b-topic-control",
            "minimax-m3",
            "google/gemma-4-31b-it",
            "gpt-oss-120b",
            "gemini-auto",
            "claude-opus-5",
            "gemini-3.5-flash-thinking-lite",
            "grok-chat-fast",
            "nvidia/nemotron-3-ultra-550b-a55b:free",
            "grok-4.20-0309-reasoning",
            "nvidia/riva-translate-4b-instruct-v2",
            "macaron-v1-preview",
            "claude-opus-4-8-thinking",
            "nvidia/riva-translate-4b-instruct-v1.1",
            "macaron-v1-venti",
            "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
            "cbai/glm-5.2",
            "nvidia/nemotron-mini-4b-instruct",
            "Qwen3-Coder-Next-FP8",
            "gemini-3.1-pro",
            "glm-5.2",
            "nvidia/llama-3.3-nemotron-super-49b-v1",
            "glm-5.1",
            "grok-4.3"
          ],
          "multiplier": 0.1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 1,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gemini-3.7-flash",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "grok-4.20-multi-agent-0309",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5-thinking",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "Qwen3.6-35B-A3B-FP8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/llama-3.1-nemoguard-8b-content-safety",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-4.6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "meta/llama-3.1-8b-instruct",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "cbai/glm-5v-turbo",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/nemotron-3-nano-30b-a3b",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "seed-2.0-pro",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-composer-2.5-fast",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-build-0.1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-4.20-0309-non-reasoning",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/llama-3.1-nemotron-nano-vl-8b-v1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "openrouter/free",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/ising-calibration-1.5-31b",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4.6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/nemotron-3.5-content-safety",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "kimi-k2.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "meta/llama-3.2-11b-vision-instruct",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "glm-5v-turbo",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "poolside/laguna-s-2.1:free",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "mimo-v2.5-pro",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "moonshotai/Kimi-K2.6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-3.5-flash-thinking",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "qwen3.7-max",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-4.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-3.6-flash",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-3.1-pro-enhanced",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "Kimi-K2.6【本地达到限制就重试】",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-flash-lite",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "DeepSeek-V4-Pro",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "kimi-k2.6【官】",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "minimax-m2.7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/nemotron-3.5-lightning-30b-a3b",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "kimi-k2-thinking",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/llama-3.1-nemoguard-8b-topic-control",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "minimax-m3",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "google/gemma-4-31b-it",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-oss-120b",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-auto",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-3.5-flash-thinking-lite",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-chat-fast",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/nemotron-3-ultra-550b-a55b:free",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-4.20-0309-reasoning",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/riva-translate-4b-instruct-v2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "macaron-v1-preview",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8-thinking",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/riva-translate-4b-instruct-v1.1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "macaron-v1-venti",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "cbai/glm-5.2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/nemotron-mini-4b-instruct",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "Qwen3-Coder-Next-FP8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gemini-3.1-pro",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "glm-5.2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "nvidia/llama-3.3-nemotron-super-49b-v1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "glm-5.1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "grok-4.3",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "b1bfa0a6dadc435aa836e897e9cbdb0f",
          "channelId": "74",
          "name": "74-CC-Kiro-0.13x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.13,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 999,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "618c6a90469d4a13b9e3b006b432f0b7",
          "channelId": "13",
          "name": "13-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-opus-5",
          "models": [
            "claude-opus-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ]
    },
    "claude-sonnet-5": {
      "schemaVersion": 2,
      "capturedAt": "2026-09-18T15:22:52.744973+00:00",
      "liveCapturedAt": "2026-09-18T15:22:52.744973+00:00",
      "model": "claude-sonnet-5",
      "source": null,
      "minMultiplier": 0.2,
      "marketTotal": 30,
      "count": 18,
      "complete": true,
      "pricing": {
        "model_name": "claude-sonnet-5",
        "quota_type": 0,
        "model_ratio": 1.5,
        "model_price": 0,
        "owner_by": "",
        "completion_ratio": 5,
        "cache_ratio": 0.01,
        "create_cache_ratio": 1.25,
        "enable_groups": [],
        "supported_endpoint_types": [
          "anthropic",
          "openai"
        ],
        "pricing_version": "9d31d94c6e1ec64de1cf66f93783919fa08f15504215145e869f095730c9f728",
        "pricing_available": true
      },
      "quotaPerUnit": 500000,
      "currency": "USD platform quota",
      "sources": [
        "https://shu26.cfd/api/marketplace/groups?model=claude-sonnet-5&window_hours=24&page=1&page_size=20",
        "https://shu26.cfd/api/group-status",
        "https://shu26.cfd/api/pricing",
        "https://shu26.cfd/api/status"
      ],
      "rows": [
        {
          "id": "da8d86150e3749a7bdb02c9a7f7909a8",
          "channelId": "541",
          "name": "541-CC-Max-0.45x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.45,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 22,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 61.14,
          "groupRequests": 939,
          "groupSuccess": 90.31,
          "ttftAvg": 3657,
          "ttftP50": 2000,
          "ttftP95": 3000,
          "ttftSamples": 776,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 480.423908,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 5
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 22
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 70,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 94.74
            },
            {
              "model": "claude-fable-5-1",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 38.36
            },
            {
              "model": "claude-haiku-4-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 42,
              "windowHours": 1,
              "cache": 71.35
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 22,
              "windowHours": 1,
              "cache": 61.14
            }
          ]
        },
        {
          "id": "1acbc364a2034ff2b5cc6ed2ec732bb0",
          "channelId": "305",
          "name": "305-CC-Max-0.75x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.75,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 60,
          "groupSuccess": 100,
          "ttftAvg": 12456,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 60,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 90.31
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "d3e23979795e4a1d85d83e2e4ac62dbe",
          "channelId": "270",
          "name": "270-CC-Max-0.66x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.66,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 0,
          "groupRequests": 34,
          "groupSuccess": 97.06,
          "ttftAvg": 6977,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 28,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 9.625,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 1
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 62.51
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.32
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "18a425b0d61a478992a353f7addf4fe0",
          "channelId": "226",
          "name": "226-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 4,
          "groupSuccess": 100,
          "ttftAvg": 13459,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 4,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 14,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 35.9
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "34e9a25042424ceabfde26ad7df36f93",
          "channelId": "460",
          "name": "460-CC-Max-0.9x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 3454,
          "ttftP50": 3000,
          "ttftP95": 5000,
          "ttftSamples": 3,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 3.29331,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "f84c7fec87494435a99d29551c7424da",
          "channelId": "457",
          "name": "457-CC其它-0.9x",
          "source": "CC其它",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 24335,
          "ttftP50": 7500,
          "ttftP95": 7500,
          "ttftSamples": 2,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 36.99
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "d33de2e5965c4bbdb69edd9050f2d23a",
          "channelId": "211",
          "name": "211-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 4.163492,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "24607a9fdfc44ae59b87562404e29158",
          "channelId": "107",
          "name": "107-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 1,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 3.966138,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a4bac302d0004097819ceaf77b003f9b",
          "channelId": "336",
          "name": "336-CC-Max-1.4x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8"
          ],
          "multiplier": 1.4,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 10.041792,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "61a46c8bdbb84c388aa34d7e546e1489",
          "channelId": "42",
          "name": "42-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-5-20251101",
            "claude-opus-4-7",
            "claude-sonnet-4-6",
            "claude-sonnet-4-5-20250929",
            "claude-opus-5",
            "claude-opus-4-5",
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 3.603582,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "1da58ad680bf49369ab04f2d56ff0941",
          "channelId": "273",
          "name": "273-CC-Max-1.15x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 5.329122,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "418ee4a5ef3c4cba8d7bd243bbe65d2b",
          "channelId": "209",
          "name": "209-CC-Max-0.9x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 12.890952,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "028ef872f1434713813028aec4e8af19",
          "channelId": "482",
          "name": "482-CC-Max-0.6x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-fable-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.6,
          "lifecycle": "active",
          "verified": false,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "2fde4b345c0445dcab872cc7c66accb4",
          "channelId": "454",
          "name": "454-CC其它-0.54x",
          "source": "CC其它",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8",
            "claude-opus-4-6",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-7"
          ],
          "multiplier": 0.54,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a316674642fa4035a6736a02e7d29a97",
          "channelId": "282",
          "name": "282-CC-Max-1.25x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 6.450502,
          "maxConcurrency": 500,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "b189351efa0f4657a727c92e374c6c58",
          "channelId": "193",
          "name": "193-CC-Kiro-0.3x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-sonnet-4-6",
            "claude-opus-4-7",
            "claude-opus-5",
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-sonnet-5",
            "claude-opus-4-8"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "ddab352d9de14e7f89e7b9a43797910d",
          "channelId": "113",
          "name": "113-CC其它-0.55x",
          "source": "CC其它",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.55,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "23e5af13e19d4954b4cb5e61702ab798",
          "channelId": "23",
          "name": "23-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-5-20251101",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-5-20250929",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ],
      "lookupRows": [
        {
          "id": "1b60f63242164315856d1cb867c1f028",
          "channelId": "213",
          "name": "213-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 75.53,
          "groupRequests": 5469,
          "groupSuccess": 97.79,
          "ttftAvg": 9832,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 442,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.050362,
          "maxConcurrency": 100,
          "currentConcurrency": 3,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 2
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 172,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 52.31
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 69.38
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "healthy",
              "success": 100,
              "requests": 110,
              "windowHours": 1,
              "cache": 26.95
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 58,
              "windowHours": 1,
              "cache": 71.88
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 45.28
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 75.53
            }
          ]
        },
        {
          "id": "c29bceab27a74209a5b353e87236d0b6",
          "channelId": "476",
          "name": "476-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-3-5-haiku-20241022",
            "claude-3-5-sonnet-20240620",
            "claude-3-5-sonnet-20241022",
            "claude-3-7-sonnet-20250219",
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-1-20250805",
            "claude-opus-4-20250514",
            "claude-opus-4-5",
            "claude-opus-4-5-20251101",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-20250514",
            "claude-sonnet-4-5",
            "claude-sonnet-4-5-20250929",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 400,
          "groupSuccess": 95,
          "ttftAvg": 11168,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 373,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-3-5-haiku-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0.15
            },
            {
              "model": "claude-3-5-sonnet-20240620",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-5-sonnet-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-7-sonnet-20250219",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 87.94
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 4.17
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-1-20250805",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 22.1
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.75
            },
            {
              "model": "claude-sonnet-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "447530eeda1c4b26826d719416eee2fc",
          "channelId": "264",
          "name": "264-CC-Kiro-0.11x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.11,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 0,
          "groupRequests": 744,
          "groupSuccess": 96.51,
          "ttftAvg": 9077,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 570,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.364154,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 3
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 2
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 19,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 97.37
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "healthy",
              "success": 100,
              "requests": 5,
              "windowHours": 1,
              "cache": 17.54
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 10,
              "windowHours": 1,
              "cache": 0.3
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 77.93
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 79.56
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "4a830b0ba52845c994bc482cb1ea7db7",
          "channelId": "453",
          "name": "453-CC-Kiro-0.14x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-sonnet-4-6",
            "claude-opus-4-7",
            "claude-opus-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-haiku-4-5-20251001",
            "claude-sonnet-5"
          ],
          "multiplier": 0.14,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 21.38,
          "groupRequests": 59,
          "groupSuccess": 100,
          "ttftAvg": 7660,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 58,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.68
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 79.58
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 21.38
            }
          ]
        },
        {
          "id": "d9eb53c79bcf4a0889e072294ff99fba",
          "channelId": "227",
          "name": "227-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 11,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 54.79,
          "groupRequests": 1128,
          "groupSuccess": 99.02,
          "ttftAvg": 7236,
          "ttftP50": 5000,
          "ttftP95": 7500,
          "ttftSamples": 1116,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 35,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 5
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 11
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.95918367346938,
          "latestGroupRequests": 49,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 14,
              "windowHours": 1,
              "cache": 92.49
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-4-7",
              "status": "healthy",
              "success": 100,
              "requests": 19,
              "windowHours": 1,
              "cache": 96.72
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-opus-5",
              "status": "unstable",
              "success": 80,
              "requests": 5,
              "windowHours": 1,
              "cache": 93.48
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 38.24
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 11,
              "windowHours": 1,
              "cache": 54.79
            }
          ]
        },
        {
          "id": "5cb2feefd40e472d93f694466b633e4a",
          "channelId": "265",
          "name": "265-CC-Kiro-0.19x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.19,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 48,
          "groupSuccess": 89.58,
          "ttftAvg": 17264,
          "ttftP50": 10000,
          "ttftP95": 45000,
          "ttftSamples": 42,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 75,
          "latestGroupRequests": 20,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "failed",
              "success": 54.54545454545454,
              "requests": 11,
              "windowHours": 1,
              "cache": 28.18
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 8,
              "windowHours": 1,
              "cache": 71.38
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "e9b902f084ce4e74bff5d609ae9f7006",
          "channelId": "281",
          "name": "281-CC-Kiro-0.16x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-haiku-4-5",
            "claude-opus-4-7",
            "claude-sonnet-4-6",
            "claude-opus-5",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-sonnet-5"
          ],
          "multiplier": 0.16,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 2,
          "groupSuccess": 100,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "0034d45601454634bdc778e860ecb29f",
          "channelId": "296",
          "name": "296-CC-Kiro-0.12x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.12,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 92.64,
          "groupRequests": 606,
          "groupSuccess": 1.82,
          "ttftAvg": 4092,
          "ttftP50": 5000,
          "ttftP95": 5000,
          "ttftSamples": 11,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 9.06784,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 92.64
            }
          ]
        },
        {
          "id": "b1bfa0a6dadc435aa836e897e9cbdb0f",
          "channelId": "74",
          "name": "74-CC-Kiro-0.13x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-fable-5",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.13,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 999,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "73b1516428474ae2a356581168df1b58",
          "channelId": "36",
          "name": "36-CC-Kiro-0.14x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-haiku-4-5-20251001",
            "claude-opus-4-7",
            "claude-sonnet-4-6",
            "claude-opus-4-6",
            "claude-opus-4-8",
            "claude-sonnet-5"
          ],
          "multiplier": 0.14,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 40,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a0fb574d9a744816b035e1e54b5db225",
          "channelId": "28",
          "name": "28-CC-Kiro-0.13x",
          "source": "CC-Kiro",
          "model": "claude-sonnet-5",
          "models": [
            "claude-opus-4-8",
            "claude-opus-4-7",
            "claude-opus-4-6",
            "claude-sonnet-5",
            "claude-sonnet-4-6",
            "claude-haiku-4-5-20251001"
          ],
          "multiplier": 0.13,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ]
    },
    "claude-fable-5-1": {
      "schemaVersion": 2,
      "capturedAt": "2026-09-18T15:22:52.744973+00:00",
      "liveCapturedAt": "2026-09-18T15:22:52.744973+00:00",
      "model": "claude-fable-5-1",
      "source": null,
      "minMultiplier": 0.2,
      "marketTotal": 13,
      "count": 10,
      "complete": true,
      "pricing": {
        "model_name": "claude-fable-5-1",
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "owner_by": "",
        "completion_ratio": 5,
        "cache_ratio": 0.025,
        "create_cache_ratio": 1.25,
        "enable_groups": [],
        "supported_endpoint_types": [
          "anthropic",
          "openai"
        ],
        "pricing_version": "9d31d94c6e1ec64de1cf66f93783919fa08f15504215145e869f095730c9f728",
        "pricing_available": true
      },
      "quotaPerUnit": 500000,
      "currency": "USD platform quota",
      "sources": [
        "https://shu26.cfd/api/marketplace/groups?model=claude-fable-5-1&window_hours=24&page=1&page_size=20",
        "https://shu26.cfd/api/group-status",
        "https://shu26.cfd/api/pricing",
        "https://shu26.cfd/api/status"
      ],
      "rows": [
        {
          "id": "da8d86150e3749a7bdb02c9a7f7909a8",
          "channelId": "541",
          "name": "541-CC-Max-0.45x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.45,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 3,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 38.36,
          "groupRequests": 939,
          "groupSuccess": 90.31,
          "ttftAvg": 3657,
          "ttftP50": 2000,
          "ttftP95": 3000,
          "ttftSamples": 776,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 91.535668,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 3
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 70,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 94.74
            },
            {
              "model": "claude-fable-5-1",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 38.36
            },
            {
              "model": "claude-haiku-4-5",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 42,
              "windowHours": 1,
              "cache": 71.35
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 22,
              "windowHours": 1,
              "cache": 61.14
            }
          ]
        },
        {
          "id": "d3e23979795e4a1d85d83e2e4ac62dbe",
          "channelId": "270",
          "name": "270-CC-Max-0.66x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.66,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 62.51,
          "groupRequests": 34,
          "groupSuccess": 97.06,
          "ttftAvg": 6977,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 28,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 32.5,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 62.51
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.32
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "18a425b0d61a478992a353f7addf4fe0",
          "channelId": "226",
          "name": "226-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 4,
          "groupSuccess": 100,
          "ttftAvg": 13459,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 4,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 14,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 35.9
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "34e9a25042424ceabfde26ad7df36f93",
          "channelId": "460",
          "name": "460-CC-Max-0.9x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 3454,
          "ttftP50": 3000,
          "ttftP95": 5000,
          "ttftSamples": 3,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "f84c7fec87494435a99d29551c7424da",
          "channelId": "457",
          "name": "457-CC其它-0.9x",
          "source": "CC其它",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-5",
            "claude-sonnet-5"
          ],
          "multiplier": 0.9,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 3,
          "groupSuccess": 100,
          "ttftAvg": 24335,
          "ttftP50": 7500,
          "ttftP95": 7500,
          "ttftSamples": 2,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 36.99
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "24607a9fdfc44ae59b87562404e29158",
          "channelId": "107",
          "name": "107-CC-Max-1.2x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 1,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "1da58ad680bf49369ab04f2d56ff0941",
          "channelId": "273",
          "name": "273-CC-Max-1.15x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "15f832a2cbe14bdabe5adf91a276a4d7",
          "channelId": "449",
          "name": "449-CC-Max-1x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-5"
          ],
          "multiplier": 1,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a316674642fa4035a6736a02e7d29a97",
          "channelId": "282",
          "name": "282-CC-Max-1.25x",
          "source": "CC-Max",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 1.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 500,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "ddab352d9de14e7f89e7b9a43797910d",
          "channelId": "113",
          "name": "113-CC其它-0.55x",
          "source": "CC其它",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.55,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ],
      "lookupRows": [
        {
          "id": "c29bceab27a74209a5b353e87236d0b6",
          "channelId": "476",
          "name": "476-CC-Kiro-0.15x",
          "source": "CC-Kiro",
          "model": "claude-fable-5-1",
          "models": [
            "claude-3-5-haiku-20241022",
            "claude-3-5-sonnet-20240620",
            "claude-3-5-sonnet-20241022",
            "claude-3-7-sonnet-20250219",
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-1-20250805",
            "claude-opus-4-20250514",
            "claude-opus-4-5",
            "claude-opus-4-5-20251101",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-20250514",
            "claude-sonnet-4-5",
            "claude-sonnet-4-5-20250929",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 400,
          "groupSuccess": 95,
          "ttftAvg": 11168,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 373,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-3-5-haiku-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0.15
            },
            {
              "model": "claude-3-5-sonnet-20240620",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-5-sonnet-20241022",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-3-7-sonnet-20250219",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 87.94
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-haiku-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 4.17
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-1-20250805",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-5-20251101",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 22.1
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 65.75
            },
            {
              "model": "claude-sonnet-4-20250514",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-5-20250929",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "447530eeda1c4b26826d719416eee2fc",
          "channelId": "264",
          "name": "264-CC-Kiro-0.11x",
          "source": "CC-Kiro",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.11,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 97.37,
          "groupRequests": 744,
          "groupSuccess": 96.51,
          "ttftAvg": 9077,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 570,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 19,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 97.37
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "healthy",
              "success": 100,
              "requests": 5,
              "windowHours": 1,
              "cache": 17.54
            },
            {
              "model": "claude-opus-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 10,
              "windowHours": 1,
              "cache": 0.3
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 77.93
            },
            {
              "model": "claude-opus-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 79.56
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "0034d45601454634bdc778e860ecb29f",
          "channelId": "296",
          "name": "296-CC-Kiro-0.12x",
          "source": "CC-Kiro",
          "model": "claude-fable-5-1",
          "models": [
            "claude-fable-5",
            "claude-fable-5-1",
            "claude-haiku-4-5-20251001",
            "claude-opus-4-6",
            "claude-opus-4-7",
            "claude-opus-4-8",
            "claude-opus-5",
            "claude-sonnet-4-6",
            "claude-sonnet-5"
          ],
          "multiplier": 0.12,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 606,
          "groupSuccess": 1.82,
          "ttftAvg": 4092,
          "ttftP50": 5000,
          "ttftP95": 5000,
          "ttftSamples": 11,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "claude-fable-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-fable-5-1",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "claude-haiku-4-5-20251001",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-7",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-4-8",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-opus-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-4-6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "claude-sonnet-5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 92.64
            }
          ]
        }
      ]
    },
    "gpt-5.6-sol": {
      "schemaVersion": 2,
      "capturedAt": "2026-09-18T15:22:52.744973+00:00",
      "liveCapturedAt": "2026-09-18T15:22:52.744973+00:00",
      "model": "gpt-5.6-sol",
      "source": "Codex Pro",
      "minMultiplier": 0.2,
      "marketTotal": 92,
      "count": 78,
      "complete": true,
      "pricing": {
        "model_name": "gpt-5.6-sol",
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "owner_by": "",
        "completion_ratio": 6,
        "cache_ratio": 0.1,
        "enable_groups": [],
        "supported_endpoint_types": [
          "openai"
        ],
        "billing_mode": "tiered_expr",
        "billing_expr": "len \u003c= 272000 ? tier(\"0_272k\", p * 5 + c * 30 + cr * 0.5 + cc * 6.25) : tier(\"272k_plus\", p * 10 + c * 45 + cr * 1 + cc * 12.5)",
        "pricing_version": "9d31d94c6e1ec64de1cf66f93783919fa08f15504215145e869f095730c9f728",
        "pricing_available": true
      },
      "quotaPerUnit": 500000,
      "currency": "USD platform quota",
      "sources": [
        "https://shu26.cfd/api/marketplace/groups?model=gpt-5.6-sol&window_hours=24&page=1&page_size=20&source=Codex+Pro",
        "https://shu26.cfd/api/group-status",
        "https://shu26.cfd/api/pricing",
        "https://shu26.cfd/api/status"
      ],
      "rows": [
        {
          "id": "07eb296c65c54f6ab3f90f7363e604a8",
          "channelId": "466",
          "name": "466-Codex Pro-0.5x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.5,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "failed",
          "modelRequests": 44,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 89.6,
          "groupRequests": 2360,
          "groupSuccess": 93.09,
          "ttftAvg": 3192,
          "ttftP50": 2000,
          "ttftP95": 5000,
          "ttftSamples": 2094,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.838774,
          "maxConcurrency": 200,
          "currentConcurrency": 2,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.93877551020408,
              "request_count": 98
            },
            {
              "ts": 1789729200,
              "success_rate": 96.47058823529412,
              "request_count": 85
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": 0,
              "request_count": 69
            },
            {
              "ts": 1789740000,
              "success_rate": 0,
              "request_count": 44
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 83.88278388278388,
          "latestGroupRequests": 273,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 44,
              "windowHours": 1,
              "cache": 89.6
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 226,
              "windowHours": 1,
              "cache": 16.18
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 66.53
            }
          ]
        },
        {
          "id": "c4fc885c26814c92879ffdfce12f7b7e",
          "channelId": "440",
          "name": "440-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 34,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 87.12,
          "groupRequests": 24978,
          "groupSuccess": 96.04,
          "ttftAvg": 9603,
          "ttftP50": 5000,
          "ttftP95": 20000,
          "ttftSamples": 21366,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.439512,
          "maxConcurrency": 200,
          "currentConcurrency": 6,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 99.60629921259843,
              "request_count": 762
            },
            {
              "ts": 1789729200,
              "success_rate": 99.81949458483754,
              "request_count": 554
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 409
            },
            {
              "ts": 1789736400,
              "success_rate": 96.6824644549763,
              "request_count": 211
            },
            {
              "ts": 1789740000,
              "success_rate": 95.83333333333334,
              "request_count": 216
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 34
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 93.33333333333333,
          "latestGroupRequests": 405,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "healthy",
              "success": 100,
              "requests": 38,
              "windowHours": 1,
              "cache": 82.22
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 34,
              "windowHours": 1,
              "cache": 87.12
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 17,
              "windowHours": 1,
              "cache": 86.3
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 91.45569620253164,
              "requests": 316,
              "windowHours": 1,
              "cache": 93.75
            }
          ]
        },
        {
          "id": "5f32196895b34f7ca398b514402937aa",
          "channelId": "551",
          "name": "551-Codex Pro-0.2889x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.2889,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "failed",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 89.98,
          "groupRequests": 2430,
          "groupSuccess": 94.44,
          "ttftAvg": 6187,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 2290,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.34724,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 100
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 65
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 4
            },
            {
              "ts": 1789736400,
              "success_rate": 85.71428571428571,
              "request_count": 7
            },
            {
              "ts": 1789740000,
              "success_rate": 97.5609756097561,
              "request_count": 41
            },
            {
              "ts": 1789743600,
              "success_rate": 0,
              "request_count": 1
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 0,
          "latestGroupRequests": 3,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 89.98
            },
            {
              "model": "gpt-5.6-terra",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 84.27
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 75.21
            }
          ]
        },
        {
          "id": "fe9f2ce121284a0980e2f6e05164f120",
          "channelId": "525",
          "name": "525-Codex Pro-0.26x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "codex-auto-review"
          ],
          "multiplier": 0.26,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 290,
          "modelWindowHours": 1,
          "success": 97.58620689655172,
          "cache": 93.43,
          "groupRequests": 15377,
          "groupSuccess": 95.79,
          "ttftAvg": 9967,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 12893,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.252326,
          "maxConcurrency": 40,
          "currentConcurrency": 8,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 99.81167608286252,
              "request_count": 531
            },
            {
              "ts": 1789729200,
              "success_rate": 99.39024390243902,
              "request_count": 328
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 322
            },
            {
              "ts": 1789736400,
              "success_rate": 95.34412955465586,
              "request_count": 494
            },
            {
              "ts": 1789740000,
              "success_rate": 95.58599695585997,
              "request_count": 657
            },
            {
              "ts": 1789743600,
              "success_rate": 97.58620689655172,
              "request_count": 290
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.31543624161074,
          "latestGroupRequests": 596,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 97.58620689655172,
              "requests": 290,
              "windowHours": 1,
              "cache": 93.43
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 97.63513513513513,
              "requests": 296,
              "windowHours": 1,
              "cache": 92.44
            },
            {
              "model": "codex-auto-review",
              "status": "unstable",
              "success": 80,
              "requests": 10,
              "windowHours": 1,
              "cache": 87.94
            }
          ]
        },
        {
          "id": "9261a9c42f034bce8088158c23892096",
          "channelId": "295",
          "name": "295-Codex Pro-0.65x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.65,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 130,
          "groupSuccess": 91.54,
          "ttftAvg": 3745,
          "ttftP50": 2000,
          "ttftP95": 5000,
          "ttftSamples": 129,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 94.66
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 68.92
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 93.28
            }
          ]
        },
        {
          "id": "cea48c8c5ac840cb95662fc99c5d06d0",
          "channelId": "503",
          "name": "503-Codex Pro-0.215x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.215,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 582,
          "modelWindowHours": 1,
          "success": 97.9381443298969,
          "cache": 89.99,
          "groupRequests": 14137,
          "groupSuccess": 94.45,
          "ttftAvg": 10102,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 11567,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.275426,
          "maxConcurrency": 500,
          "currentConcurrency": 13,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 99.54648526077098,
              "request_count": 441
            },
            {
              "ts": 1789729200,
              "success_rate": 99.00596421471172,
              "request_count": 503
            },
            {
              "ts": 1789732800,
              "success_rate": 99.76498237367802,
              "request_count": 851
            },
            {
              "ts": 1789736400,
              "success_rate": 89.66480446927375,
              "request_count": 1074
            },
            {
              "ts": 1789740000,
              "success_rate": 99.40535183349851,
              "request_count": 1009
            },
            {
              "ts": 1789743600,
              "success_rate": 97.9381443298969,
              "request_count": 582
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.13340683572216,
          "latestGroupRequests": 907,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "unstable",
              "success": 88.88888888888889,
              "requests": 54,
              "windowHours": 1,
              "cache": 91.13
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 97.9381443298969,
              "requests": 582,
              "windowHours": 1,
              "cache": 89.99
            },
            {
              "model": "gpt-5.6-terra",
              "status": "failed",
              "success": 55.55555555555556,
              "requests": 9,
              "windowHours": 1,
              "cache": 79.31
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 98.47328244274809,
              "requests": 262,
              "windowHours": 1,
              "cache": 89.55
            }
          ]
        },
        {
          "id": "e68b9a7d91824423be1cb6e82602eaca",
          "channelId": "467",
          "name": "467-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 321,
          "modelWindowHours": 1,
          "success": 95.32710280373831,
          "cache": 92.48,
          "groupRequests": 13041,
          "groupSuccess": 95.45,
          "ttftAvg": 9998,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 12952,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.244978,
          "maxConcurrency": 0,
          "currentConcurrency": 5,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.43705463182897,
              "request_count": 421
            },
            {
              "ts": 1789729200,
              "success_rate": 96.42184557438794,
              "request_count": 531
            },
            {
              "ts": 1789732800,
              "success_rate": 98.4126984126984,
              "request_count": 63
            },
            {
              "ts": 1789736400,
              "success_rate": 95.20958083832335,
              "request_count": 167
            },
            {
              "ts": 1789740000,
              "success_rate": 99.16317991631799,
              "request_count": 239
            },
            {
              "ts": 1789743600,
              "success_rate": 95.32710280373831,
              "request_count": 321
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 93.6986301369863,
          "latestGroupRequests": 365,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 95.32710280373831,
              "requests": 321,
              "windowHours": 1,
              "cache": 92.48
            },
            {
              "model": "gpt-6-astra",
              "status": "unstable",
              "success": 81.3953488372093,
              "requests": 43,
              "windowHours": 1,
              "cache": 89.42
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 94.02
            }
          ]
        },
        {
          "id": "cca5300ab0594ea7a88de07b7b8e63dc",
          "channelId": "552",
          "name": "552-Codex Pro-0.32x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.32,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 45,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 91.03,
          "groupRequests": 660,
          "groupSuccess": 96.21,
          "ttftAvg": 9992,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 636,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.295252,
          "maxConcurrency": 100,
          "currentConcurrency": 1,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 67
            },
            {
              "ts": 1789729200,
              "success_rate": 77.77777777777779,
              "request_count": 9
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 109
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 98,
              "request_count": 50
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 45
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 95.74468085106383,
          "latestGroupRequests": 47,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 45,
              "windowHours": 1,
              "cache": 91.03
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 2,
              "windowHours": 1,
              "cache": 95.28
            }
          ]
        },
        {
          "id": "d41e75dd453a483f807aa1328bf77d47",
          "channelId": "490",
          "name": "490-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 17,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 85.84,
          "groupRequests": 2970,
          "groupSuccess": 86.84,
          "ttftAvg": 13505,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 942,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.384916,
          "maxConcurrency": 100,
          "currentConcurrency": 1,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 89
            },
            {
              "ts": 1789729200,
              "success_rate": 73.33333333333333,
              "request_count": 30
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 78
            },
            {
              "ts": 1789736400,
              "success_rate": 98.6013986013986,
              "request_count": 143
            },
            {
              "ts": 1789740000,
              "success_rate": 95.29411764705881,
              "request_count": 85
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 17
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 40,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 17,
              "windowHours": 1,
              "cache": 85.84
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 12,
              "windowHours": 1,
              "cache": 83.32
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 11,
              "windowHours": 1,
              "cache": 83.66
            }
          ]
        },
        {
          "id": "f4105423c19e432b976f564bcb0d91f3",
          "channelId": "542",
          "name": "542-Codex Pro-0.36x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol"
          ],
          "multiplier": 0.36,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 70.65,
          "groupRequests": 85,
          "groupSuccess": 98.82,
          "ttftAvg": 25250,
          "ttftP50": 20000,
          "ttftP95": 45000,
          "ttftSamples": 82,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.53851,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 85.71428571428571,
              "request_count": 7
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 2,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 70.65
            }
          ]
        },
        {
          "id": "2f109e7d813a442fa390de8ae697b962",
          "channelId": "452",
          "name": "452-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 42,
          "modelWindowHours": 1,
          "success": 97.61904761904762,
          "cache": 86.1,
          "groupRequests": 3793,
          "groupSuccess": 93.91,
          "ttftAvg": 9353,
          "ttftP50": 5000,
          "ttftP95": 20000,
          "ttftSamples": 3425,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.310378,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 95.71428571428572,
              "request_count": 140
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 15
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789743600,
              "success_rate": 97.61904761904762,
              "request_count": 42
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 74.59016393442623,
          "latestGroupRequests": 122,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "healthy",
              "success": 100,
              "requests": 23,
              "windowHours": 1,
              "cache": 87.38
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 97.61904761904762,
              "requests": 42,
              "windowHours": 1,
              "cache": 86.1
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 61.15
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 44.44444444444444,
              "requests": 54,
              "windowHours": 1,
              "cache": 89.47
            }
          ]
        },
        {
          "id": "b5d2189668974ca1819703cb59070ab2",
          "channelId": "330",
          "name": "330-Codex Pro-0.279x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-5.6-terra",
            "codex-auto-review"
          ],
          "multiplier": 0.279,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 83,
          "modelWindowHours": 1,
          "success": 97.59036144578313,
          "cache": 89.07,
          "groupRequests": 13403,
          "groupSuccess": 94.25,
          "ttftAvg": 9812,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 10949,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.33127,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 286
            },
            {
              "ts": 1789729200,
              "success_rate": 86.45833333333334,
              "request_count": 96
            },
            {
              "ts": 1789732800,
              "success_rate": 99.2094861660079,
              "request_count": 253
            },
            {
              "ts": 1789736400,
              "success_rate": 96.85534591194968,
              "request_count": 159
            },
            {
              "ts": 1789740000,
              "success_rate": 95.77464788732394,
              "request_count": 142
            },
            {
              "ts": 1789743600,
              "success_rate": 97.59036144578313,
              "request_count": 83
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 98.2905982905983,
          "latestGroupRequests": 117,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 97.59036144578313,
              "requests": 83,
              "windowHours": 1,
              "cache": 89.07
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 19,
              "windowHours": 1,
              "cache": 90.64
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 15,
              "windowHours": 1,
              "cache": 81.66
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 70.23
            }
          ]
        },
        {
          "id": "ab39242226a2493da65058749e40b4ef",
          "channelId": "516",
          "name": "516-Codex Pro-0.23x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.23,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 91.71,
          "groupRequests": 1931,
          "groupSuccess": 89.23,
          "ttftAvg": 10255,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 1728,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.227054,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 0,
          "latestGroupRequests": 1,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 91.71
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 89.08
            }
          ]
        },
        {
          "id": "c19218fee1f146ff93f053a47c6931b7",
          "channelId": "385",
          "name": "385-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 91,
          "modelWindowHours": 1,
          "success": 98.9010989010989,
          "cache": 88.41,
          "groupRequests": 11299,
          "groupSuccess": 94.84,
          "ttftAvg": 11805,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 7745,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.440298,
          "maxConcurrency": 1000,
          "currentConcurrency": 4,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 86.5909090909091,
              "request_count": 440
            },
            {
              "ts": 1789729200,
              "success_rate": 85.16746411483254,
              "request_count": 209
            },
            {
              "ts": 1789732800,
              "success_rate": 89.44444444444444,
              "request_count": 180
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 222
            },
            {
              "ts": 1789740000,
              "success_rate": 98.58490566037736,
              "request_count": 212
            },
            {
              "ts": 1789743600,
              "success_rate": 98.9010989010989,
              "request_count": 91
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 99.16666666666667,
          "latestGroupRequests": 120,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 67.82
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 98.9010989010989,
              "requests": 91,
              "windowHours": 1,
              "cache": 88.41
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 14,
              "windowHours": 1,
              "cache": 80.9
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 12,
              "windowHours": 1,
              "cache": 88.3
            }
          ]
        },
        {
          "id": "a9695b30a3cd47deb7990878eecc16bc",
          "channelId": "309",
          "name": "309-Codex Pro-0.29x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.29,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 15,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 79.77,
          "groupRequests": 4904,
          "groupSuccess": 97.68,
          "ttftAvg": 16320,
          "ttftP50": 10000,
          "ttftP95": 30000,
          "ttftSamples": 2218,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.641156,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 98.75,
              "request_count": 80
            },
            {
              "ts": 1789729200,
              "success_rate": 97.36842105263158,
              "request_count": 38
            },
            {
              "ts": 1789732800,
              "success_rate": 98.11320754716981,
              "request_count": 53
            },
            {
              "ts": 1789736400,
              "success_rate": 92.95774647887323,
              "request_count": 71
            },
            {
              "ts": 1789740000,
              "success_rate": 95.23809523809523,
              "request_count": 63
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 15
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 69,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 66.38
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 15,
              "windowHours": 1,
              "cache": 79.77
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 88.08
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 51,
              "windowHours": 1,
              "cache": 84.46
            }
          ]
        },
        {
          "id": "76fdfb467862408ea1cee481dd6a0cd0",
          "channelId": "441",
          "name": "441-Codex Pro-0.24x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.24,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 77,
          "modelWindowHours": 1,
          "success": 94.8051948051948,
          "cache": 89.58,
          "groupRequests": 16096,
          "groupSuccess": 87.98,
          "ttftAvg": 12324,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 13387,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.293764,
          "maxConcurrency": 100,
          "currentConcurrency": 3,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 93.64705882352942,
              "request_count": 425
            },
            {
              "ts": 1789729200,
              "success_rate": 94.21965317919076,
              "request_count": 173
            },
            {
              "ts": 1789732800,
              "success_rate": 97.08029197080292,
              "request_count": 137
            },
            {
              "ts": 1789736400,
              "success_rate": 99.02912621359224,
              "request_count": 309
            },
            {
              "ts": 1789740000,
              "success_rate": 98.56115107913669,
              "request_count": 278
            },
            {
              "ts": 1789743600,
              "success_rate": 94.8051948051948,
              "request_count": 77
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 93.72384937238493,
          "latestGroupRequests": 239,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 94.8051948051948,
              "requests": 77,
              "windowHours": 1,
              "cache": 89.58
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 93.0379746835443,
              "requests": 158,
              "windowHours": 1,
              "cache": 87.53
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 4,
              "windowHours": 1,
              "cache": 68.59
            }
          ]
        },
        {
          "id": "19f45f73795a484d9b5fdfd4856878d3",
          "channelId": "416",
          "name": "416-Codex Pro-0.32x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.32,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 14,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 84.36,
          "groupRequests": 4119,
          "groupSuccess": 95.46,
          "ttftAvg": 9547,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 2671,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.33556,
          "maxConcurrency": 100,
          "currentConcurrency": 2,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 36
            },
            {
              "ts": 1789729200,
              "success_rate": 84.61538461538461,
              "request_count": 39
            },
            {
              "ts": 1789732800,
              "success_rate": 94.73684210526315,
              "request_count": 38
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 36
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 41
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 14
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.5609756097561,
          "latestGroupRequests": 41,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 14,
              "windowHours": 1,
              "cache": 84.36
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 96.29629629629629,
              "requests": 27,
              "windowHours": 1,
              "cache": 91.05
            }
          ]
        },
        {
          "id": "8de3f4b626ce4f8d86ac6e5cc30713b2",
          "channelId": "355",
          "name": "355-Codex Pro-0.26x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.26,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 84.87,
          "groupRequests": 1030,
          "groupSuccess": 86.7,
          "ttftAvg": 8057,
          "ttftP50": 5000,
          "ttftP95": 10000,
          "ttftSamples": 932,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.331132,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 135
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 203
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 61
            },
            {
              "ts": 1789736400,
              "success_rate": 58.18181818181818,
              "request_count": 165
            },
            {
              "ts": 1789740000,
              "success_rate": 98.23529411764706,
              "request_count": 170
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 8.108108108108109,
          "latestGroupRequests": 37,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 84.87
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 2.857142857142857,
              "requests": 35,
              "windowHours": 1,
              "cache": 84.37
            }
          ]
        },
        {
          "id": "e9c37bb8c32f45f88610e8d9a09b828a",
          "channelId": "545",
          "name": "545-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 205,
          "modelWindowHours": 1,
          "success": 96.58536585365853,
          "cache": 93.37,
          "groupRequests": 9335,
          "groupSuccess": 94.89,
          "ttftAvg": 10395,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 9195,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.305822,
          "maxConcurrency": 200,
          "currentConcurrency": 2,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 97.40484429065745,
              "request_count": 578
            },
            {
              "ts": 1789729200,
              "success_rate": 94.20289855072464,
              "request_count": 138
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 93
            },
            {
              "ts": 1789736400,
              "success_rate": 96.95121951219512,
              "request_count": 492
            },
            {
              "ts": 1789740000,
              "success_rate": 97.35099337748345,
              "request_count": 453
            },
            {
              "ts": 1789743600,
              "success_rate": 96.58536585365853,
              "request_count": 205
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 95.30516431924883,
          "latestGroupRequests": 213,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 76.65
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 89.48
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 96.58536585365853,
              "requests": 205,
              "windowHours": 1,
              "cache": 93.37
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 83.07
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 62.5,
              "requests": 8,
              "windowHours": 1,
              "cache": 91.99
            }
          ]
        },
        {
          "id": "03939e48b62f4bdfa709d5c71b0d2718",
          "channelId": "535",
          "name": "535-Codex Pro-0.35x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.35,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unstable",
          "modelRequests": 4,
          "modelWindowHours": 1,
          "success": 75,
          "cache": 88.25,
          "groupRequests": 1569,
          "groupSuccess": 89.55,
          "ttftAvg": 17615,
          "ttftP50": 7500,
          "ttftP95": 45000,
          "ttftSamples": 1556,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.38796,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 54
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 57
            },
            {
              "ts": 1789736400,
              "success_rate": 75,
              "request_count": 4
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 44.57831325301204,
          "latestGroupRequests": 83,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unstable",
              "success": 75,
              "requests": 4,
              "windowHours": 1,
              "cache": 88.25
            },
            {
              "model": "gpt-5.6-terra",
              "status": "failed",
              "success": 60.71428571428571,
              "requests": 56,
              "windowHours": 1,
              "cache": 82.96
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 23,
              "windowHours": 1,
              "cache": 94.73
            }
          ]
        },
        {
          "id": "9fe835af7e6e4b80a90b013204b79ae9",
          "channelId": "244",
          "name": "244-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 15,
          "modelWindowHours": 1,
          "success": 33.33333333333333,
          "cache": 77.42,
          "groupRequests": 209,
          "groupSuccess": 84.69,
          "ttftAvg": 7450,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 184,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.105512,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 33.33333333333333,
              "request_count": 15
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 33.33333333333333,
          "latestGroupRequests": 15,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 33.33333333333333,
              "requests": 15,
              "windowHours": 1,
              "cache": 77.42
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 74.81
            }
          ]
        },
        {
          "id": "7ef2f4b1c3d6409ba3512a9ec83e256d",
          "channelId": "153",
          "name": "153-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "failed",
          "modelRequests": 34,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 88.81,
          "groupRequests": 8172,
          "groupSuccess": 85.07,
          "ttftAvg": 9738,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 6349,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.301714,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.60606060606061,
              "request_count": 825
            },
            {
              "ts": 1789729200,
              "success_rate": 6.422018348623854,
              "request_count": 218
            },
            {
              "ts": 1789732800,
              "success_rate": 0,
              "request_count": 30
            },
            {
              "ts": 1789736400,
              "success_rate": 0,
              "request_count": 33
            },
            {
              "ts": 1789740000,
              "success_rate": 0,
              "request_count": 51
            },
            {
              "ts": 1789743600,
              "success_rate": 0,
              "request_count": 34
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 0,
          "latestGroupRequests": 46,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 34,
              "windowHours": 1,
              "cache": 88.81
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 12,
              "windowHours": 1,
              "cache": 87.59
            }
          ]
        },
        {
          "id": "e25d0a1d12b048a39a1a1b0b7dc184eb",
          "channelId": "44",
          "name": "44-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 58,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 89.94,
          "groupRequests": 10877,
          "groupSuccess": 92.05,
          "ttftAvg": 10780,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 8577,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.352018,
          "maxConcurrency": 50,
          "currentConcurrency": 1,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 84
            },
            {
              "ts": 1789729200,
              "success_rate": 66.17647058823529,
              "request_count": 204
            },
            {
              "ts": 1789732800,
              "success_rate": 97.5,
              "request_count": 80
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 65
            },
            {
              "ts": 1789740000,
              "success_rate": 99.03846153846155,
              "request_count": 104
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 58
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.16312056737588,
          "latestGroupRequests": 141,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 58,
              "windowHours": 1,
              "cache": 89.94
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 95.45454545454545,
              "requests": 22,
              "windowHours": 1,
              "cache": 90.01
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 95.08196721311475,
              "requests": 61,
              "windowHours": 1,
              "cache": 90.66
            }
          ]
        },
        {
          "id": "d8c3831a51d24ac3a2d85a52d7b7e60c",
          "channelId": "550",
          "name": "550-Codex Pro-0.2888x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.2888,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "failed",
          "modelRequests": 10,
          "modelWindowHours": 1,
          "success": 70,
          "cache": 83.12,
          "groupRequests": 1846,
          "groupSuccess": 87.05,
          "ttftAvg": 19819,
          "ttftP50": 10000,
          "ttftP95": 45000,
          "ttftSamples": 1711,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.448274,
          "maxConcurrency": 1000,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.7741935483871,
              "request_count": 62
            },
            {
              "ts": 1789729200,
              "success_rate": 81.13207547169812,
              "request_count": 53
            },
            {
              "ts": 1789732800,
              "success_rate": 86.11111111111111,
              "request_count": 36
            },
            {
              "ts": 1789736400,
              "success_rate": 90.9090909090909,
              "request_count": 11
            },
            {
              "ts": 1789740000,
              "success_rate": 70,
              "request_count": 10
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 46.15384615384615,
          "latestGroupRequests": 117,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 70,
              "requests": 10,
              "windowHours": 1,
              "cache": 83.12
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 6,
              "windowHours": 1,
              "cache": 74.82
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 40.5940594059406,
              "requests": 101,
              "windowHours": 1,
              "cache": 89.95
            }
          ]
        },
        {
          "id": "6d258194af484af7a31251ba7d9c3cff",
          "channelId": "218",
          "name": "218-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-image-2",
            "gpt-6-astra",
            "gpt-image-2.5-flare",
            "gpt-image-2.5-sunburst"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 6,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 76.01,
          "groupRequests": 445,
          "groupSuccess": 83.82,
          "ttftAvg": 10601,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 393,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.113468,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 7,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 6,
              "windowHours": 1,
              "cache": 76.01
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 85.18
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 92.16
            },
            {
              "model": "gpt-image-2.5-flare",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2.5-sunburst",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "663a02e550454f528bdb25cd57058084",
          "channelId": "501",
          "name": "501-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 85,
          "modelWindowHours": 1,
          "success": 96.47058823529412,
          "cache": 88.08,
          "groupRequests": 4395,
          "groupSuccess": 83.37,
          "ttftAvg": 15675,
          "ttftP50": 7500,
          "ttftP95": 45000,
          "ttftSamples": 3595,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.286298,
          "maxConcurrency": 50,
          "currentConcurrency": 4,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.96969696969697,
              "request_count": 66
            },
            {
              "ts": 1789729200,
              "success_rate": 98.30508474576271,
              "request_count": 118
            },
            {
              "ts": 1789732800,
              "success_rate": 82.85714285714286,
              "request_count": 70
            },
            {
              "ts": 1789736400,
              "success_rate": 73.91304347826086,
              "request_count": 92
            },
            {
              "ts": 1789740000,
              "success_rate": 77.30061349693251,
              "request_count": 163
            },
            {
              "ts": 1789743600,
              "success_rate": 96.47058823529412,
              "request_count": 85
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 97.72727272727273,
          "latestGroupRequests": 132,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 96.47058823529412,
              "requests": 85,
              "windowHours": 1,
              "cache": 88.08
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 47,
              "windowHours": 1,
              "cache": 90.61
            }
          ]
        },
        {
          "id": "260b1d107a8f415291a9d8953b1aec80",
          "channelId": "80",
          "name": "80-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 39,
          "modelWindowHours": 1,
          "success": 94.87179487179486,
          "cache": 87.48,
          "groupRequests": 14203,
          "groupSuccess": 91.32,
          "ttftAvg": 10139,
          "ttftP50": 5000,
          "ttftP95": 20000,
          "ttftSamples": 12044,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.301968,
          "maxConcurrency": 0,
          "currentConcurrency": 3,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 78.57142857142857,
              "request_count": 406
            },
            {
              "ts": 1789729200,
              "success_rate": 63.36000000000001,
              "request_count": 625
            },
            {
              "ts": 1789732800,
              "success_rate": 89.32038834951457,
              "request_count": 412
            },
            {
              "ts": 1789736400,
              "success_rate": 93.83697813121272,
              "request_count": 503
            },
            {
              "ts": 1789740000,
              "success_rate": 99.13793103448276,
              "request_count": 232
            },
            {
              "ts": 1789743600,
              "success_rate": 94.87179487179486,
              "request_count": 39
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 96.82539682539682,
          "latestGroupRequests": 63,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 69.87
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 94.87179487179486,
              "requests": 39,
              "windowHours": 1,
              "cache": 87.48
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 23,
              "windowHours": 1,
              "cache": 86.27
            }
          ]
        },
        {
          "id": "50372a1bc6f94e2ba0ce620778c36ea8",
          "channelId": "72",
          "name": "72-Codex Pro-0.289x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.289,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 84.06,
          "groupRequests": 4388,
          "groupSuccess": 96.01,
          "ttftAvg": 7490,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 4341,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.33932,
          "maxConcurrency": 100,
          "currentConcurrency": 1,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 75,
              "request_count": 8
            },
            {
              "ts": 1789729200,
              "success_rate": 62.5,
              "request_count": 8
            },
            {
              "ts": 1789732800,
              "success_rate": 54.54545454545454,
              "request_count": 11
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 47,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 84.06
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 45,
              "windowHours": 1,
              "cache": 87.15
            }
          ]
        },
        {
          "id": "d5dce405b91347589f1317214a505d8e",
          "channelId": "567",
          "name": "567-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 96.92,
          "groupRequests": 442,
          "groupSuccess": 77.38,
          "ttftAvg": 5030,
          "ttftP50": 5000,
          "ttftP95": 10000,
          "ttftSamples": 347,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": 74.6875,
              "request_count": 320
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 96.15384615384616,
          "latestGroupRequests": 52,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 96.92
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 96.07843137254902,
              "requests": 51,
              "windowHours": 1,
              "cache": 86.15
            }
          ]
        },
        {
          "id": "ca3f6b848d474e509a7d1ccfd946ead2",
          "channelId": "420",
          "name": "420-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 78,
          "modelWindowHours": 1,
          "success": 96.15384615384616,
          "cache": 88.03,
          "groupRequests": 2242,
          "groupSuccess": 80.33,
          "ttftAvg": 12764,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 2053,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.277046,
          "maxConcurrency": 30,
          "currentConcurrency": 2,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 95.87628865979381,
              "request_count": 97
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 99.36305732484077,
              "request_count": 157
            },
            {
              "ts": 1789736400,
              "success_rate": 99.24812030075188,
              "request_count": 133
            },
            {
              "ts": 1789740000,
              "success_rate": 99.06976744186046,
              "request_count": 215
            },
            {
              "ts": 1789743600,
              "success_rate": 96.15384615384616,
              "request_count": 78
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 94.04761904761907,
          "latestGroupRequests": 84,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 96.15384615384616,
              "requests": 78,
              "windowHours": 1,
              "cache": 88.03
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 66.66666666666666,
              "requests": 6,
              "windowHours": 1,
              "cache": 81.01
            }
          ]
        },
        {
          "id": "505dd119c03349b2ad712d85f5219087",
          "channelId": "76",
          "name": "76-Codex Pro-0.22x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.22,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 87.17,
          "groupRequests": 42,
          "groupSuccess": 97.62,
          "ttftAvg": 8273,
          "ttftP50": 3000,
          "ttftP95": 20000,
          "ttftSamples": 41,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.241184,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 83.33333333333333,
          "latestGroupRequests": 6,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 87.17
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unstable",
              "success": 75,
              "requests": 4,
              "windowHours": 1,
              "cache": 36.73
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "b31c5c2435234e84b8d6b14944582351",
          "channelId": "537",
          "name": "537-Codex Pro-0.35x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.35,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 80,
          "groupRequests": 66,
          "groupSuccess": 98.48,
          "ttftAvg": 15427,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 66,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.775414,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 80
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 61.52
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 55.8
            }
          ]
        },
        {
          "id": "8a74e669a4f74ea1bdce090251a2f28c",
          "channelId": "335",
          "name": "335-Codex Pro-0.8x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.8,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 0,
          "groupRequests": 54,
          "groupSuccess": 100,
          "ttftAvg": 5701,
          "ttftP50": 3000,
          "ttftP95": 3000,
          "ttftSamples": 54,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 10.25,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 95.16
            }
          ]
        },
        {
          "id": "e008df1e54c84655b46cb345e694ddbe",
          "channelId": "350",
          "name": "350-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 23,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 93.36,
          "groupRequests": 351,
          "groupSuccess": 86.61,
          "ttftAvg": 15484,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 346,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.453624,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 45
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 23
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 24,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 23,
              "windowHours": 1,
              "cache": 93.36
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 89.92
            }
          ]
        },
        {
          "id": "6eff70232add416ebd526ffd3ab5d0d6",
          "channelId": "489",
          "name": "489-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 87.23,
          "groupRequests": 1076,
          "groupSuccess": 80.95,
          "ttftAvg": 12357,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 1045,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.446386,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 0,
              "request_count": 40
            },
            {
              "ts": 1789729200,
              "success_rate": 0,
              "request_count": 1
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 44.44444444444444,
          "latestGroupRequests": 18,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 87.23
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 0,
              "requests": 9,
              "windowHours": 1,
              "cache": 92.29
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 8,
              "windowHours": 1,
              "cache": 50.44
            }
          ]
        },
        {
          "id": "a8da00b88f7245d78eb7be72199bc7de",
          "channelId": "344",
          "name": "344-Codex Pro-0.279x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.279,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 82.63,
          "groupRequests": 480,
          "groupSuccess": 77.29,
          "ttftAvg": 8446,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 449,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.409822,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 53
            },
            {
              "ts": 1789729200,
              "success_rate": 0,
              "request_count": 1
            },
            {
              "ts": 1789732800,
              "success_rate": 0,
              "request_count": 4
            },
            {
              "ts": 1789736400,
              "success_rate": 0,
              "request_count": 1
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 90,
          "latestGroupRequests": 10,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 1,
              "windowHours": 1,
              "cache": 82.63
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 86.88
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 9,
              "windowHours": 1,
              "cache": 95.88
            }
          ]
        },
        {
          "id": "bb5fbeca60f3468eaa063213980af61d",
          "channelId": "162",
          "name": "162-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 83.62,
          "groupRequests": 352,
          "groupSuccess": 90.06,
          "ttftAvg": 12497,
          "ttftP50": 10000,
          "ttftP95": 30000,
          "ttftSamples": 342,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.843056,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 95,
          "latestGroupRequests": 20,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 83.62
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 82.14
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 95,
              "requests": 20,
              "windowHours": 1,
              "cache": 75.69
            }
          ]
        },
        {
          "id": "db9dfe3737b34640b8e9407272e030e7",
          "channelId": "71",
          "name": "71-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 70.89,
          "groupRequests": 66,
          "groupSuccess": 87.88,
          "ttftAvg": 18982,
          "ttftP50": 10000,
          "ttftP95": 60000,
          "ttftSamples": 57,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.38598,
          "maxConcurrency": 1000,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 70.89
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "18d335825fc447ce963a2793e7421d3d",
          "channelId": "241",
          "name": "241-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": false,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 46.07,
          "groupRequests": 40,
          "groupSuccess": 95,
          "ttftAvg": 26739,
          "ttftP50": 15000,
          "ttftP95": 45000,
          "ttftSamples": 38,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 46.07
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 77.6
            }
          ]
        },
        {
          "id": "01315671815649308b7b49eda10d84c8",
          "channelId": "60",
          "name": "60-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 82.11,
          "groupRequests": 38,
          "groupSuccess": 92.11,
          "ttftAvg": 9285,
          "ttftP50": 3000,
          "ttftP95": 45000,
          "ttftSamples": 38,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.27097,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 66.66666666666666,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 2,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 82.11
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a929259fabf44510a33104ff6c017294",
          "channelId": "338",
          "name": "338-Codex Pro-0.2338x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.2338,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 41.28,
          "groupRequests": 14,
          "groupSuccess": 100,
          "ttftAvg": 23659,
          "ttftP50": 7500,
          "ttftP95": 90000,
          "ttftSamples": 13,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.805684,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 6,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 41.28
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 5,
              "windowHours": 1,
              "cache": 71.98
            }
          ]
        },
        {
          "id": "5322c54899894b8c92be13d384717076",
          "channelId": "554",
          "name": "554-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 85.1,
          "groupRequests": 162,
          "groupSuccess": 72.22,
          "ttftAvg": 11120,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 154,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.212272,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 85.1
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 29.98
            }
          ]
        },
        {
          "id": "9cac3a04bff0465c8071aab8283605f4",
          "channelId": "445",
          "name": "445-Codex Pro-0.32x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.32,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 84.31,
          "groupRequests": 2525,
          "groupSuccess": 74.38,
          "ttftAvg": 9556,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 1967,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.598156,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 19,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 84.31
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 17,
              "windowHours": 1,
              "cache": 82.5
            }
          ]
        },
        {
          "id": "d9303b43bb4841e39563daaa4829c04c",
          "channelId": "254",
          "name": "254-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-image-2",
            "gpt-5.6-luna",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 111,
          "groupSuccess": 78.38,
          "ttftAvg": 12786,
          "ttftP50": 5000,
          "ttftP95": 20000,
          "ttftSamples": 90,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 95,
          "latestGroupRequests": 20,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-luna",
              "status": "healthy",
              "success": 95,
              "requests": 20,
              "windowHours": 1,
              "cache": 48.49
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "66be9971c27349cb8f89bbdd4779666c",
          "channelId": "90",
          "name": "90-Codex Pro-0.48x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.48,
          "lifecycle": "active",
          "verified": false,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 91.99,
          "groupRequests": 1889,
          "groupSuccess": 94.81,
          "ttftAvg": 9570,
          "ttftP50": 3000,
          "ttftP95": 45000,
          "ttftSamples": 1827,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 2,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 85.71428571428571,
              "request_count": 7
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 98.59154929577466,
          "latestGroupRequests": 71,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 91.99
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 98.55072463768117,
              "requests": 69,
              "windowHours": 1,
              "cache": 85.58
            }
          ]
        },
        {
          "id": "82c210fb57894565b9259f490e1c2675",
          "channelId": "271",
          "name": "271-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-image-2",
            "gpt-5.6-luna",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 30.03,
          "groupRequests": 106,
          "groupSuccess": 76.42,
          "ttftAvg": 12530,
          "ttftP50": 5000,
          "ttftP95": 20000,
          "ttftSamples": 87,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.04657,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 75,
          "latestGroupRequests": 12,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 30.03
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 81.51
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-luna",
              "status": "unstable",
              "success": 75,
              "requests": 12,
              "windowHours": 1,
              "cache": 30.61
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "0b61d945ce034d2fa950c3cc246f000a",
          "channelId": "517",
          "name": "517-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 68.35,
          "groupRequests": 39,
          "groupSuccess": 74.36,
          "ttftAvg": 16120,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 37,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.714286,
          "maxConcurrency": 1000,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 68.35
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 87.49
            }
          ]
        },
        {
          "id": "decc81e3846340b98702c0c34bcbb2f7",
          "channelId": "461",
          "name": "461-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 0,
          "groupRequests": 239,
          "groupSuccess": 60.67,
          "ttftAvg": 15323,
          "ttftP50": 5000,
          "ttftP95": 60000,
          "ttftSamples": 223,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 5.3,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 5,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 4,
              "windowHours": 1,
              "cache": 86.6
            }
          ]
        },
        {
          "id": "013c20e2cb394ffdb47f154f773e5b82",
          "channelId": "93",
          "name": "93-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unstable",
          "modelRequests": 17,
          "modelWindowHours": 1,
          "success": 82.35294117647058,
          "cache": 78.96,
          "groupRequests": 3596,
          "groupSuccess": 48.16,
          "ttftAvg": 14507,
          "ttftP50": 7500,
          "ttftP95": 20000,
          "ttftSamples": 543,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.261028,
          "maxConcurrency": 300,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 97.43589743589743,
              "request_count": 39
            },
            {
              "ts": 1789729200,
              "success_rate": 96.22641509433963,
              "request_count": 53
            },
            {
              "ts": 1789732800,
              "success_rate": 96.34146341463415,
              "request_count": 82
            },
            {
              "ts": 1789736400,
              "success_rate": 97.5,
              "request_count": 40
            },
            {
              "ts": 1789740000,
              "success_rate": 91.22807017543859,
              "request_count": 57
            },
            {
              "ts": 1789743600,
              "success_rate": 82.35294117647058,
              "request_count": 17
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 67.9245283018868,
          "latestGroupRequests": 53,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "healthy",
              "success": 91.66666666666666,
              "requests": 12,
              "windowHours": 1,
              "cache": 37.51
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unstable",
              "success": 82.35294117647058,
              "requests": 17,
              "windowHours": 1,
              "cache": 78.96
            },
            {
              "model": "gpt-5.6-terra",
              "status": "failed",
              "success": 0,
              "requests": 12,
              "windowHours": 1,
              "cache": 86.31
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 91.66666666666666,
              "requests": 12,
              "windowHours": 1,
              "cache": 65.24
            }
          ]
        },
        {
          "id": "19a93b3479c8401cbb367dc10e230070",
          "channelId": "399",
          "name": "399-Codex Pro-0.24x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-6-astra",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.24,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 50.21,
          "groupRequests": 41,
          "groupSuccess": 75.61,
          "ttftAvg": 17890,
          "ttftP50": 10000,
          "ttftP95": 60000,
          "ttftSamples": 31,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 30,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 10
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 57.22
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 50.21
            }
          ]
        },
        {
          "id": "89ba7a9cecef48319068dc66cf386934",
          "channelId": "527",
          "name": "527-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 6,
          "groupSuccess": 66.67,
          "ttftAvg": 8774,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 6,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.211722,
          "maxConcurrency": 10,
          "currentConcurrency": 1,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 54.17
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "ee0c51c7ca404f3fae8acc168bb5cbf4",
          "channelId": "497",
          "name": "497-Codex Pro-0.55x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.55,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 8,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 35.37,
          "groupRequests": 1566,
          "groupSuccess": 72.86,
          "ttftAvg": 13783,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 1157,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.007198,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 8
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 23,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 8,
              "windowHours": 1,
              "cache": 35.37
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 15,
              "windowHours": 1,
              "cache": 81.48
            }
          ]
        },
        {
          "id": "519e34eba1a04e018689b175edbca3b7",
          "channelId": "57",
          "name": "57-Codex Pro-0.28x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-6-astra"
          ],
          "multiplier": 0.28,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 82.07,
          "groupRequests": 385,
          "groupSuccess": 78.18,
          "ttftAvg": 10716,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 378,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 400,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 9
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 66.66666666666666,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 83.33333333333334,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 4,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 82.07
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 93.8
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 2,
              "windowHours": 1,
              "cache": 79.96
            }
          ]
        },
        {
          "id": "5776362721244a01875fafd199826880",
          "channelId": "557",
          "name": "557-Codex Pro-0.6x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.6,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 47.5,
          "groupRequests": 10,
          "groupSuccess": 100,
          "ttftAvg": 10969,
          "ttftP50": 10000,
          "ttftP95": 15000,
          "ttftSamples": 10,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 47.5
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "d75b05c77d374c5aa369684f01c90971",
          "channelId": "208",
          "name": "208-Codex Pro-0.208x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.208,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 1,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 14.18,
          "groupRequests": 5,
          "groupSuccess": 100,
          "ttftAvg": 52200,
          "ttftP50": 15000,
          "ttftP95": 90000,
          "ttftSamples": 5,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.693658,
          "maxConcurrency": 30,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 1
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 1,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 14.18
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 39.01
            }
          ]
        },
        {
          "id": "e705064af3fa48c180e82e63c99a39cb",
          "channelId": "224",
          "name": "224-Codex Pro-0.27x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.27,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 92.61,
          "groupRequests": 80,
          "groupSuccess": 82.5,
          "ttftAvg": 8243,
          "ttftP50": 5000,
          "ttftP95": 15000,
          "ttftSamples": 79,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 92.61
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "444a48a313f345dca3b313969f60592b",
          "channelId": "526",
          "name": "526-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 85.31,
          "groupRequests": 2,
          "groupSuccess": 100,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.289486,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 85.31
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "35a9974f63e74a9eb4b441e3a04c4b79",
          "channelId": "115",
          "name": "115-Codex Pro-0.215x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.215,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 4,
          "modelWindowHours": 1,
          "success": 25,
          "cache": 20.4,
          "groupRequests": 12,
          "groupSuccess": 75,
          "ttftAvg": 21827,
          "ttftP50": 15000,
          "ttftP95": 20000,
          "ttftSamples": 8,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.893968,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 25,
              "request_count": 4
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 40,
          "latestGroupRequests": 5,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 25,
              "requests": 4,
              "windowHours": 1,
              "cache": 20.4
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 27.51
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 1,
              "windowHours": 1,
              "cache": 85.77
            }
          ]
        },
        {
          "id": "93fa8013cc394cc3afe0c37e8cc2b186",
          "channelId": "405",
          "name": "405-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-6-astra"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 12,
          "groupSuccess": 83.33,
          "ttftAvg": 26794,
          "ttftP50": 15000,
          "ttftP95": 90000,
          "ttftSamples": 12,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 83.33333333333334,
          "latestGroupRequests": 12,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unstable",
              "success": 83.33333333333334,
              "requests": 12,
              "windowHours": 1,
              "cache": 86.17
            }
          ]
        },
        {
          "id": "83349af05f87465ea605fbab2ade7748",
          "channelId": "470",
          "name": "470-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-6-astra",
            "gpt-5.6-terra",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 7.01,
          "groupRequests": 1,
          "groupSuccess": 100,
          "ttftAvg": 134115,
          "ttftP50": 180000,
          "ttftP95": 180000,
          "ttftSamples": 1,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.538662,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 7.01
            }
          ]
        },
        {
          "id": "f72fff3dc9fb4af3a924a80c50920097",
          "channelId": "67",
          "name": "67-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.4",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 5,
          "groupSuccess": 20,
          "ttftAvg": 12951,
          "ttftP50": 15000,
          "ttftP95": 15000,
          "ttftSamples": 1,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 2.153846,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "cb60d99c61224665a33d1a3e40d66b4c",
          "channelId": "377",
          "name": "377-Codex Pro-0.35x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-6-astra",
            "gpt-5.6-luna"
          ],
          "multiplier": 0.35,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 130,
          "groupSuccess": 3.08,
          "ttftAvg": 8405,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 125,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.395596,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 93.8
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-luna",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "03a48df021294a8c81f9c0e73d21c5aa",
          "channelId": "408",
          "name": "408-Codex Pro-0.266x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-terra",
            "gpt-6-astra",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.266,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 2,
          "groupSuccess": 50,
          "ttftAvg": 13168,
          "ttftP50": 10000,
          "ttftP95": 20000,
          "ttftSamples": 2,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "b46515a26ac443dd9e70001a424d0394",
          "channelId": "276",
          "name": "276-Codex Pro-0.22x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.22,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 9,
          "modelWindowHours": 1,
          "success": 11.11111111111111,
          "cache": 22.05,
          "groupRequests": 423,
          "groupSuccess": 3.31,
          "ttftAvg": 9008,
          "ttftP50": 7500,
          "ttftP95": 15000,
          "ttftSamples": 386,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.58113,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 2.564102564102564,
              "request_count": 39
            },
            {
              "ts": 1789729200,
              "success_rate": 3.7037037037037033,
              "request_count": 54
            },
            {
              "ts": 1789732800,
              "success_rate": 0,
              "request_count": 3
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": 11.11111111111111,
              "request_count": 9
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 6.666666666666667,
          "latestGroupRequests": 15,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 11.11111111111111,
              "requests": 9,
              "windowHours": 1,
              "cache": 22.05
            },
            {
              "model": "gpt-5.6-terra",
              "status": "failed",
              "success": 0,
              "requests": 6,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "58119ed8664b466f955a125908739978",
          "channelId": "219",
          "name": "219-Codex Pro-0.29x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.3-codex-spark",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.29,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.226362,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.3-codex-spark",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "7bcc0f9bebd44ac58d6e500d47c2dbc6",
          "channelId": "417",
          "name": "417-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 3.080746,
          "maxConcurrency": 30,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "944c0431fce04d568a44e8fb84db0933",
          "channelId": "27",
          "name": "27-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.4",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 16,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "0d57898a48524a54a445daabab77bc27",
          "channelId": "549",
          "name": "549-Codex Pro-0.25x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.25,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "9f9ed80a336741c1bb98b3b96e98d11c",
          "channelId": "468",
          "name": "468-Codex Pro-0.4x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.4,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "c9971b3af6a9460898464b5240c197cc",
          "channelId": "465",
          "name": "465-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 50,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "c280b0b4939043fdbbadd56e2fbfb104",
          "channelId": "456",
          "name": "456-Codex Pro-0.6x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.6,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "7c6e0733c10046eca3f5a0609010ada8",
          "channelId": "419",
          "name": "419-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-6-astra",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 30,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "2ca5c99a8feb4ccb9128f71dc38394d0",
          "channelId": "396",
          "name": "396-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.2",
            "gpt-5.3-codex-spark",
            "gpt-5.4",
            "gpt-5.4-mini",
            "gpt-5.5",
            "gpt-5.6",
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 20,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.3-codex-spark",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.4-mini",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "48c7e7ba8d754c80be9ffddb0bfda55b",
          "channelId": "284",
          "name": "284-Codex Pro-0.35x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-6-astra",
            "gpt-5.5",
            "gpt-5.6-terra",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.35,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "f9e80c7c53af4f74b2a486598ec429c0",
          "channelId": "179",
          "name": "179-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "8faf5aa0adff4534ad8fbba5e956d1d8",
          "channelId": "176",
          "name": "176-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-5.5",
            "codex-auto-review",
            "gpt-image-2",
            "gpt-6-astra",
            "gpt-image-2.5-flare",
            "gpt-image-2.5-sunburst"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2.5-flare",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2.5-sunburst",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "25aeed7131934cca8583c40faf7b33ec",
          "channelId": "168",
          "name": "168-Codex Pro-0.2x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol"
          ],
          "multiplier": 0.2,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "84d664fab5ef4fa6860c05d8ea415349",
          "channelId": "92",
          "name": "92-Codex Pro-0.3x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.4",
            "gpt-5.4-mini",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.3,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 8,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.4-mini",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ],
      "lookupRows": [
        {
          "id": "addc7f5192a64591941208e01903a4d7",
          "channelId": "177",
          "name": "177-Codex Pro-0.1799x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.5",
            "gpt-6-astra"
          ],
          "multiplier": 0.1799,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 82,
          "modelWindowHours": 1,
          "success": 90.2439024390244,
          "cache": 88.45,
          "groupRequests": 1846,
          "groupSuccess": 85.37,
          "ttftAvg": 13414,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 1772,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.242512,
          "maxConcurrency": 10000,
          "currentConcurrency": 3,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 100,
              "request_count": 37
            },
            {
              "ts": 1789729200,
              "success_rate": 100,
              "request_count": 65
            },
            {
              "ts": 1789732800,
              "success_rate": 100,
              "request_count": 64
            },
            {
              "ts": 1789736400,
              "success_rate": 100,
              "request_count": 143
            },
            {
              "ts": 1789740000,
              "success_rate": 99.58847736625515,
              "request_count": 243
            },
            {
              "ts": 1789743600,
              "success_rate": 90.2439024390244,
              "request_count": 82
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 89.28571428571429,
          "latestGroupRequests": 84,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 90.2439024390244,
              "requests": 82,
              "windowHours": 1,
              "cache": 88.45
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 50,
              "requests": 2,
              "windowHours": 1,
              "cache": 88.4
            }
          ]
        },
        {
          "id": "33946de04f404c04a23102a4391c8ecb",
          "channelId": "546",
          "name": "546-Codex Pro-0.1667x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra",
            "gpt-5.5"
          ],
          "multiplier": 0.1667,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 11.92,
          "groupRequests": 321,
          "groupSuccess": 95.02,
          "ttftAvg": 30318,
          "ttftP50": 15000,
          "ttftP95": 120000,
          "ttftSamples": 307,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.647118,
          "maxConcurrency": 10,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 81.81818181818181,
          "latestGroupRequests": 11,
          "latestGroupStatus": "unstable",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 11.92
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 12.69
            },
            {
              "model": "gpt-6-astra",
              "status": "failed",
              "success": 66.66666666666666,
              "requests": 3,
              "windowHours": 1,
              "cache": 45.02
            },
            {
              "model": "gpt-5.5",
              "status": "unstable",
              "success": 87.5,
              "requests": 8,
              "windowHours": 1,
              "cache": 89.64
            }
          ]
        },
        {
          "id": "cbeb94c27aa446eabbcf6c1981e53423",
          "channelId": "73",
          "name": "73-Codex Pro-0.18x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.18,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unstable",
          "modelRequests": 19,
          "modelWindowHours": 1,
          "success": 84.21052631578947,
          "cache": 82.26,
          "groupRequests": 419,
          "groupSuccess": 90.45,
          "ttftAvg": 8917,
          "ttftP50": 5000,
          "ttftP95": 30000,
          "ttftSamples": 415,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.239684,
          "maxConcurrency": 1000,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 88.88888888888889,
              "request_count": 9
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": 93.75,
              "request_count": 16
            },
            {
              "ts": 1789736400,
              "success_rate": 93.61702127659575,
              "request_count": 47
            },
            {
              "ts": 1789740000,
              "success_rate": 84.21052631578947,
              "request_count": 19
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 92.98245614035088,
          "latestGroupRequests": 57,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "unstable",
              "success": 84.21052631578947,
              "requests": 19,
              "windowHours": 1,
              "cache": 82.26
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 97.14285714285714,
              "requests": 35,
              "windowHours": 1,
              "cache": 79.48
            },
            {
              "model": "gpt-6-astra",
              "status": "healthy",
              "success": 100,
              "requests": 3,
              "windowHours": 1,
              "cache": 29.56
            }
          ]
        },
        {
          "id": "d924126105f94892a6649dd1941d1454",
          "channelId": "212",
          "name": "212-Codex Pro-0.18x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra"
          ],
          "multiplier": 0.18,
          "lifecycle": "active",
          "verified": true,
          "observing": false,
          "modelStatus": "healthy",
          "modelRequests": 18,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 77.27,
          "groupRequests": 2092,
          "groupSuccess": 82.84,
          "ttftAvg": 13277,
          "ttftP50": 7500,
          "ttftP95": 30000,
          "ttftSamples": 1968,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.35201,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 96.49122807017544,
              "request_count": 114
            },
            {
              "ts": 1789729200,
              "success_rate": 90,
              "request_count": 20
            },
            {
              "ts": 1789732800,
              "success_rate": 76.78571428571429,
              "request_count": 56
            },
            {
              "ts": 1789736400,
              "success_rate": 97.91666666666666,
              "request_count": 192
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 113
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 18
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 40,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "healthy",
              "success": 100,
              "requests": 14,
              "windowHours": 1,
              "cache": 67.47
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 18,
              "windowHours": 1,
              "cache": 77.27
            },
            {
              "model": "gpt-5.6-terra",
              "status": "healthy",
              "success": 100,
              "requests": 8,
              "windowHours": 1,
              "cache": 34.39
            }
          ]
        },
        {
          "id": "abfbc6e8082942af986c6824c6f937d4",
          "channelId": "339",
          "name": "339-Codex Pro-0.18x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.18,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 26.38,
          "groupRequests": 687,
          "groupSuccess": 79.62,
          "ttftAvg": 19686,
          "ttftP50": 5000,
          "ttftP95": 90000,
          "ttftSamples": 568,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.20768,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 26.38
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "08847a19eeae4042b57ab94eef399d4c",
          "channelId": "180",
          "name": "180-Codex Pro-0.1499x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.5",
            "gpt-6-astra",
            "gpt-image-2",
            "gpt-5.3-codex-spark",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "codex-auto-review"
          ],
          "multiplier": 0.1499,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "healthy",
          "modelRequests": 5,
          "modelWindowHours": 1,
          "success": 100,
          "cache": 76.78,
          "groupRequests": 127,
          "groupSuccess": 78.74,
          "ttftAvg": 46154,
          "ttftP50": 30000,
          "ttftP95": 90000,
          "ttftSamples": 14,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.838786,
          "maxConcurrency": 5,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 58.82352941176471,
              "request_count": 17
            },
            {
              "ts": 1789729200,
              "success_rate": 85.71428571428571,
              "request_count": 14
            },
            {
              "ts": 1789732800,
              "success_rate": 81.25,
              "request_count": 16
            },
            {
              "ts": 1789736400,
              "success_rate": 85.71428571428571,
              "request_count": 14
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 15
            },
            {
              "ts": 1789743600,
              "success_rate": 100,
              "request_count": 5
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 100,
          "latestGroupRequests": 5,
          "latestGroupStatus": "healthy",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.3-codex-spark",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "healthy",
              "success": 100,
              "requests": 5,
              "windowHours": 1,
              "cache": 76.78
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "666a0c0cb17a489b9c8d384107ccc868",
          "channelId": "261",
          "name": "261-Codex Pro-0.19x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.19,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 2,
          "modelWindowHours": 1,
          "success": 0,
          "cache": 0,
          "groupRequests": 42,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 0,
              "request_count": 6
            },
            {
              "ts": 1789729200,
              "success_rate": 0,
              "request_count": 6
            },
            {
              "ts": 1789732800,
              "success_rate": 0,
              "request_count": 6
            },
            {
              "ts": 1789736400,
              "success_rate": 0,
              "request_count": 6
            },
            {
              "ts": 1789740000,
              "success_rate": 0,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 0,
              "request_count": 2
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 0,
          "latestGroupRequests": 2,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 0,
              "requests": 2,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "812acbcfebeb474586faa406908e6501",
          "channelId": "294",
          "name": "294-Codex Pro-0.145x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.145,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 1,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 0.347398,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "a722a3e345534bc683eed18adaa7bb48",
          "channelId": "263",
          "name": "263-Codex Pro-0.15x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "338bf85374cb4a8997b704d165e41933",
          "channelId": "54",
          "name": "54-Codex Pro-0.18x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.6-sol",
            "gpt-6-astra"
          ],
          "multiplier": 0.18,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "failed",
          "modelRequests": 12,
          "modelWindowHours": 1,
          "success": 16.666666666666664,
          "cache": 4.52,
          "groupRequests": 660,
          "groupSuccess": 5.15,
          "ttftAvg": 6507,
          "ttftP50": 3000,
          "ttftP95": 3000,
          "ttftSamples": 617,
          "ttftScope": "group_all_models_24h",
          "historicalCost": 1.037168,
          "maxConcurrency": 200,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": 45.45454545454545,
              "request_count": 11
            },
            {
              "ts": 1789729200,
              "success_rate": 18.75,
              "request_count": 32
            },
            {
              "ts": 1789732800,
              "success_rate": 29.411764705882355,
              "request_count": 17
            },
            {
              "ts": 1789736400,
              "success_rate": 85.71428571428571,
              "request_count": 7
            },
            {
              "ts": 1789740000,
              "success_rate": 100,
              "request_count": 6
            },
            {
              "ts": 1789743600,
              "success_rate": 16.666666666666664,
              "request_count": 12
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": 16.666666666666664,
          "latestGroupRequests": 12,
          "latestGroupStatus": "failed",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "failed",
              "success": 16.666666666666664,
              "requests": 12,
              "windowHours": 1,
              "cache": 4.52
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "c5a7038bde4a4f37b02caee4ad6a10df",
          "channelId": "100",
          "name": "100-Codex Pro-0.19x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.4",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.19,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": 0,
          "groupRequests": 12,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 1,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": 0
            }
          ]
        },
        {
          "id": "0ce7369e06e842bbb662a8d7e358771d",
          "channelId": "298",
          "name": "298-Codex Pro-0.14x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra"
          ],
          "multiplier": 0.14,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 0,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "0363b82263894bd5815ab5cb810b5361",
          "channelId": "192",
          "name": "192-Codex Pro-0.15x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "gpt-5.3-codex-spark",
            "gpt-5.4",
            "gpt-5.6-terra",
            "codex-auto-review",
            "gpt-5.5",
            "gpt-5.6-sol"
          ],
          "multiplier": 0.15,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 100,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "gpt-5.3-codex-spark",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.4",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        },
        {
          "id": "acefe4e93e7a451fb48e50c8b73fe4a6",
          "channelId": "158",
          "name": "158-Codex Pro-0.198x",
          "source": "Codex Pro",
          "model": "gpt-5.6-sol",
          "models": [
            "codex-auto-review",
            "gpt-5.3-codex-spark",
            "gpt-5.5",
            "gpt-5.6-sol",
            "gpt-5.6-terra",
            "gpt-6-astra",
            "gpt-image-2",
            "gpt-image-2-4K"
          ],
          "multiplier": 0.198,
          "lifecycle": "active",
          "verified": true,
          "observing": true,
          "modelStatus": "unknown",
          "modelRequests": 0,
          "modelWindowHours": 1,
          "success": null,
          "cache": null,
          "groupRequests": 0,
          "groupSuccess": 0,
          "ttftAvg": 0,
          "ttftP50": 0,
          "ttftP95": 0,
          "ttftSamples": 0,
          "ttftScope": "group_all_models_24h",
          "historicalCost": null,
          "maxConcurrency": 8888,
          "currentConcurrency": 0,
          "series": [
            {
              "ts": 1789725600,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789729200,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789732800,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789736400,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789740000,
              "success_rate": null,
              "request_count": 0
            },
            {
              "ts": 1789743600,
              "success_rate": null,
              "request_count": 0
            }
          ],
          "seriesWindowHours": 6,
          "latestGroupSuccess": null,
          "latestGroupRequests": 0,
          "latestGroupStatus": "unknown",
          "groupWindowHours": 1,
          "modelStats": [
            {
              "model": "codex-auto-review",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.3-codex-spark",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.5",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-sol",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-5.6-terra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-6-astra",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            },
            {
              "model": "gpt-image-2-4K",
              "status": "unknown",
              "success": null,
              "requests": 0,
              "windowHours": 1,
              "cache": null
            }
          ]
        }
      ]
    }
  }
};
