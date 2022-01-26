import { combineReducers } from 'redux';
import clientReducer from './clientReducer';

const reducers = combineReducers({clients: clientReducer})

export default reducers