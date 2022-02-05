import { combineReducers } from 'redux';
import clientReducer from './clientReducer'; 
import {rootReducer as adminReducer} from './rootReducer';

const reducers = combineReducers({adminReducer: adminReducer , clients: clientReducer})

export default reducers