# Kitchen Sink [![renovate-app badge][renovate-badge]][renovate-app] [![semantic-release][semantic-image] ][semantic-url]

![kitchensink](https://cloud.githubusercontent.com/assets/1268976/14084252/e309e370-f4e7-11e5-9562-24f516563ac9.gif)

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application uses every API command in Cypress for demonstration purposes. Additionally this example app is configured to run tests in various CI platforms. The [tests](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration/examples) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## CI status

https://app.circleci.com/pipelines/github/berzerk-interactive/cypress-example-kitchensink?branch=test%2Ftwo

You can find all CI results recorded on the [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/4b7344/runs)

If you are looking for BitBucket Pipelines example, check out [bitbucket.org/cypress-io/cypress-example-kitchensink](https://bitbucket.org/cypress-io/cypress-example-kitchensink).

## CI Community Examples

| CI           | Url                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------- |
| IBM Cloud CI | [Cloud Foundry](https://github.com/iamgollum/cypress-example-kitchensink/tree/281-ibm-cloud-pipeline)    |
| GitLab CI    | [Example caching when installing using Yarn](https://gitlab.com/bahmutov/cypress-yarn-gitlab-ci-example) |

## Help + Testing

**If you get stuck, here is more help:**

- [Gitter Chat](https://gitter.im/cypress-io/cypress)
- [Cypress Docs](https://on.cypress.io)

### 1. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-kitchensink#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-kitchensink.git

## cd into the cloned repo
cd cypress-example-kitchensink

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Kitchen Sink App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

```bash
## launch the cypress test runner
npm run cy:open
```

**shortcut:** you can use command `npm run local:open` that uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start local server and open Cypress. When you close Cypress, the local server is stopped automatically. Similarly you can use `npm run local:run` to start the server, run Cypress tests headlessly and close the server.

### 2. Install & write tests in Cypress

[Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

## Contributing

Check out the [Contributing Guideline](/CONTRIBUTING.md).

## Changelog

- after v1.0.4 at [cypress-example-kitchensink/releases](https://github.com/cypress-io/cypress-example-kitchensink/releases)
- before at [CHANGELOG_OLD.md](CHANGELOG_OLD.md)
