# Dashboard

[![Build Status](https://travis-ci.org/EnterpriseFlowsRepository/dashboard.svg?branch=dev)](https://travis-ci.org/EnterpriseFlowsRepository/dashboard)
[![Coverage Status](https://img.shields.io/sonar/coverage/EnterpriseFlowsRepository_dashboard?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=EnterpriseFlowsRepository_dashboard)
[![SonarCloud Status](https://img.shields.io/sonar/quality_gate/EnterpriseFlowsRepository_dashboard?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=EnterpriseFlowsRepository_dashboard)
![Licence](https://img.shields.io/github/license/EnterpriseFlowsRepository/dashboard)
![Last commit](https://img.shields.io/github/last-commit/EnterpriseFlowsRepository/dashboard)

General-purpose web UI for Enterprise Flows Repository clusters.

## Getting started

Hello and welcome :) To start working on the project:

1. Clone the project with `git clone git@github.com:EnterpriseFlowsRepository/dashboard.git`
1. Install the NPM dependencies with `npm install`
1. Start the development server with `npm start`

*Note: It is advised to run the API backend servers (the microservices as well as the OpenID server) to allow this frontend to fetch some data!*

### Prerequisites

- Install Node.js in LTS 13
  - By manually installing the binaries
  - By using [MVN, a Node.js version manager](https://github.com/nvm-sh/nvm)
- Install the development dependencies (i.e. `apt-get install build-essential` for Ubuntu based distros or `yum groupinstall 'Development Tools'` for CentOS ones) to allow NPM to compile some packages natively for your system

### Installing

It is as simple as type `npm install`. Tada.

## Running the tests

With this project, we use two kind of tests:

- unit testing with [Jest](http://facebook.github.io/jest/) and [react-testing-library](https://github.com/kentcdodds/react-testing-library) ; can be launched with `npm run jest`
- linting with [ESLint](http://eslint.org/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) ; can be launched with `npm run lint`

To let go of the horses (unit tests + linting), all you have to do is type:

```
npm run test
```

## Deployment

Enterprise Flows Repisitory is straightforward: [a container image is published to Docker Hub](https://hub.docker.com/r/enterpriseflowsrepository/dashboard). See its attached README.

## Built With

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) - React.js boilerplate
- [Material UI](https://material-ui.com) - React components following Google Material Design guidelines
- [Travis CI](https://travis-ci.org) - Continuous integration platform
- [Dependabot](https://dependabot.com) - Automated dependency updates
- [SonarCloud](https://sonarcloud.io) - Quality tests platform
- [README-template.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - An awesome README template from @PurpleBooth

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/EnterpriseFlowsRepository/dashboard/tags).

## Authors

- **Emmanuel Lesné** - *Project creator & maintainer* - [Emmanuel35](https://github.com/Emmanuel35)
- **Clément Lesné** - *Initial work & maintainer* - [clementlesne](https://github.com/clementlesne)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
