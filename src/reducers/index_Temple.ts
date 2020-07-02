import { combineReducers } from "redux";
import user from './User_Temple';
import tasks from './Tasks_Temple'

const rootReducer = combineReducers({
  user,
  tasks,
});

export default rootReducer;