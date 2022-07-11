# sfq.xyz
This repository contains the files necessary to build and deploy my publicly-facing webpage at https://sfq.xyz.

In production, the page is hosted using [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/). Deployments are automated through GitHub Actions CI/CD linked to my Azure account - new builds are performed by the pipeline whenever a new commit is added to the `main` branch of this repository.

## Building
1. Clone this repository - in your shell:

       git clone https://github.com/esqew/sfq.xyz

2. Install dependencies from `npm`:

       cd sfq.xyz
       npm install

3. Using the included `webpack` configuration, generate output files to `./dist/`:

       npm run build
       # alternatively, npm run clean-build to remove any pre-existing ./dist/ folder

4. Test by using a locally-hosted server to serve the resulting bundled files in `./dist`.