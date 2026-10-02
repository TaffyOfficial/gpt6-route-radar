# Additional Vercel address

Deploy this directory as a Vercel project with no framework or build command.
The external rewrite serves the existing Cloudflare Pages website and its
same-origin snapshot endpoint while retaining the Vercel address in the browser.
Both addresses therefore use the same page assets, rankings and test results.
No API credentials, private configuration or additional model testing are needed.

From this directory, run `vercel --prod` after signing in. The original Pages
address remains available. Browser-local preferences are separate on each domain.
