# Dashboard

[![Build Status](https://travis-ci.org/EnterpriseFlowsRepository/dashboard.svg?branch=dev)](https://travis-ci.org/EnterpriseFlowsRepository/dashboard)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=EnterpriseFlowsRepository_dashboard&metric=alert_status)](https://sonarcloud.io/dashboard?id=EnterpriseFlowsRepository_dashboard)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=EnterpriseFlowsRepository_dashboard&metric=coverage)](https://sonarcloud.io/dashboard?id=EnterpriseFlowsRepository_dashboard)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=EnterpriseFlowsRepository_dashboard&metric=security_rating)](https://sonarcloud.io/dashboard?id=EnterpriseFlowsRepository_dashboard)
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

Several tools integrated to the continuous deployment are used to automatically & proactively ensure the quality of our binaries (functional, security, code quality):

1. Application of **unit tests** on the application
2. Static files **generation based on sources** (React.js files are basically big pre-compiled html/js/css files)
3. **Container** generation
4. Testing the containerized application [following OWASP ZAP **security tests**](https://github.com/zaproxy/zaproxy)

## Deployment

Enterprise Flows Repisitory is straightforward: [each build is published to Docker Hub](https://hub.docker.com/r/enterpriseflowsrepository/dashboard).

This allow our app to start in less than 500 milliseconds.

### Development environement

Start the container to your own environement (work well with 50 MiB RAM & 0.05 CPU):

```bash
docker run -t --memory="50m" --cpus=".05" -p 8080:8080 enterpriseflowsrepository/dashboard
```

### Production environement

We advise the usage of Kubernetes as the orchestrator of the application. Thanks to its stateless behavior, you can easily integrate it. See the k8s deployement files included for more info about it (path `src/main/k8s`).

## Built With

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) - React.js boilerplate
- [Material UI](https://material-ui.com) - React components following Google Material Design guidelines
- [Travis CI](https://travis-ci.org) - Continuous integration platform
- [Dependabot](https://dependabot.com) - Automated dependency updates
- [SonarCloud](https://sonarcloud.io) - Quality tests platform
- [README-template.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - An awesome README template from @PurpleBooth
- [OWASP Zed Attack Proxy](https://github.com/zaproxy/zaproxy) - Security tools to find security vulnerabilities in web applications
- [Alpine Linux distribution](https://alpinelinux.org/) - A security-oriented, lightweight Linux distribution based on musl libc and busybox

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/EnterpriseFlowsRepository/dashboard/tags).

## Authors

- **Emmanuel Lesné** - *Project creator & maintainer* - [Emmanuel35](https://github.com/Emmanuel35)
- **Clément Lesné** - *Initial work & maintainer* - [clementlesne](https://github.com/clementlesne)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
