# Snippet 

[![Build Status](https://travis-ci.org/CodeforAustralia/cese-snippet.svg?branch=master&)](https://travis-ci.org/CodeforAustralia/cese-snippet)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2092e91a51aa5a067495/test_coverage)](https://codeclimate.com/github/CodeforAustralia/cese-snippet/test_coverage)


Snippet is an app built in Fellowship with NSW Education Centre for Education Statistics and Evaluation in 2017-18. 

Snippet allows educators to view or publish insights about program applications in NSW schools.

This repository contains a web application client that is exported to an internal application at NSW Education.  


## Requirements

* [Node](https://nodejs.org/en/) `8.1.2`
* [npm](http://npmjs.com/) `6.1.0`
* [yarn](https://yarnpkg.com) `1.7.0`

We recommend using [nvm](https://github.com/creationix/nvm) to manage Node versions.


## Tech  

This app is built from create-react-app
- [create-react-app](https://github.com/facebook/create-react-app)

Data management 
- [Redux](https://redux.js.org)

UI
- [Reactstrap](https://reactstrap.github.io)

Mock API
- [json-server](https://www.npmjs.com/package/json-server)


## Set up


1. Use the correct Node version

``` bash
nvm use
````

2. The first time, install dependencies:

```bash 
yarn install 
```

3. Run the mock API: 

```bash 
yarn api
```

4. Open a second terminal window and run the app:

```bash 
yarn dev
``` 


## CLI Commands

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build

# test the production build locally
yarn serve 

# run test watcher
yarn test

# run test on individual file
yarn test store/rootReducer

# run the mock server
yarn api

# start storybook (develop UI components)
yarn storybook 
```


## Debugging

Debug with React with [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome.


Debug the state layer with [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).


Enable logging from the console with [Bows](https://www.npmjs.com/package/bows).

By typing this in to the Browser Console:

```js
localStorage.debug = true
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

