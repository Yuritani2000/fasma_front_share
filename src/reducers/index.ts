import { combineReducers } from "redux";
import ownUser from './OwnUser';
import otherUser from './OtherUser';
import skills from './Skills';
import topPageSkills from './TopPageSkills'

const rootReducer = combineReducers({
  ownUser,
  otherUser,
  skills,
  topPageSkills
});

export default rootReducer;