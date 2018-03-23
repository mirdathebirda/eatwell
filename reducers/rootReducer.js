//All various reducers you add will all be combined in the rootReducer.js .

import {combineReducers} from 'redux';
import stuff from './stuffReducer';

const rootReducer = combineReducers({
  stuff
});

export default rootReducer;


