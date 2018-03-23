/*import the actions types, and have a nice little case statement of how to handle each type of action. We will also update the ./reducers/rootReducer.js with the necessary plumbing, as well our new fun stuffReducer .*/

import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}
