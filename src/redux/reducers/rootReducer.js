import { combineReducers } from 'redux';
import generalReducer from './generalReducer';
import libraryReducer from './libraryReducer';

const rootReducer = combineReducers({
	general: generalReducer,
	library: libraryReducer
});
export default rootReducer;