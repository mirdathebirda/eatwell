/*
will import createStore from redux , and our rootReducer.
We will pass to createStore our middleware ( thunk ), the rootReducer and some arguments to enable the dev tools, which are really nice when working with a redux app.
*/
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}
