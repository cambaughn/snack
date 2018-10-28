import { createStore } from 'redux';
import { snackApp } from './reducers';

const store = createStore(snackApp);

export default store;
