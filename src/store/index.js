import createStore from 'unistore';
import devtools from 'unistore/devtools';

import initialState from './initialState';

let store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

// If actions is a function, it gets passed the store:
let actions = store => ({

});

export default store;
