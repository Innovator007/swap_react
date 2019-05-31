import { combineReducers } from 'redux';
import buyingReducer from './buyingReducer';
import sellingReducer from './sellingReducer';

export default combineReducers({
	buying: buyingReducer,
	selling: sellingReducer
});
