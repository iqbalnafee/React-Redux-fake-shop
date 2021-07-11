import { createStore } from "redux";
import reducers from './reducers/index';

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store first argument is reducers, 2nd argument is state

export default store;