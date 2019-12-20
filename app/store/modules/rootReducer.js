import { combineReducers } from "redux";
import commonReducer from './Common/reducer';
import bucketReducer from './Bucket/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  bucket: bucketReducer
});

export default rootReducer;
