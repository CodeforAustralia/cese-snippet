# Snippet 

Snippet is an app built in Fellowship with NSW Education Centre for Education Statistics and Evaluation in 2017-18. 

Snippet allows educators to view or publish insights about program applications in NSW schools.

This repository contains both a mock server and the client app that is used internally at NSW Education. 


## Requirements

* [Node](https://nodejs.org/en/) 6.11.5
* [npm](http://npmjs.com/) `5.6.0`
* [yarn](https://yarnpkg.com) `1.5.1`
* [firebase-tools](https://www.npmjs.com/package/firebase-tools) `^3.16.0`

We recommend using [nvm](https://github.com/creationix/nvm) to manage Node versions.


## Client 

[![Build Status](https://travis-ci.org/CodeforAustralia/cese-snippet.svg?branch=master&)](https://travis-ci.org/CodeforAustralia/cese-snippet)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2092e91a51aa5a067495/test_coverage)](https://codeclimate.com/github/CodeforAustralia/cese-snippet/test_coverage)


View [Readme](https://github.com/CodeforAustralia/cese-snippet/blob/master/client/README.md). 


## Server 

This is a mock server and documentation is not provided. 


## Development setup

Setup the app as separate services running on your local machine.


### To install, 

Follow set up instructions in each container's README.


### To run both services, open two command sessions, 

1. Run the api

```bash
firebase serve --only functions,hosting
```

2. Run the frontend

```bash
cd client && yarn dev
```


## Deploy

Deploy to the demo environment happens from CI off tag creation.

To tag a release for deployment:

```bash
git tag `date "+release-%Y%m%d%H%M%S"` && git push --tags
```


## Rollback

To rollback a release:

```bash
git checkout -b release-20160101
git tag `date "+release-%Y%m%d%H%M%S"` && git push --tags
```


---

## Contributing

For help on setting up the repo locally, building, testing, and contributing
please see [Contibuting](https://github.com/CodeforAustralia/standards/blob/master/templates/CONTRIBUTING.md).

## Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[Code of Conduct](https://github.com/CodeforAustralia/standards/blob/master/templates/CODE_OF_CONDUCT.md).

## License

[MIT](https://github.com/CodeforAustralia/cese-snippet/blob/master/LICENSE).


<img src="https://codeforaustralia.org/wp-content/uploads/2017/11/Main-Logo-Black-1.png" width="200" />

