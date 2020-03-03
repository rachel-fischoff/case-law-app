import { combineReducers } from 'redux';
import CasesReducer from './reducers';

const rootReducer = combineReducers({
  cases: CasesReducer
});

export default rootReducer;
