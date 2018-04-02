# CESE Snippet - client

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
# set the Node version
nvm use
````

2. Run the app:
 
```bash
yarn dev
```

3. In a second terminal window, run the mock server: 

```bash
# run the mock server
yarn api
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
