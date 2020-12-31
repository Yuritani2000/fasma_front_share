import { combineReducers } from "redux";
import ownUser from './OwnUser';
import otherUser from './OtherUser';
import searchSkills from './SearchSkills';
import topPageSkills from './TopPageSkills'

const rootReducer = combineReducers({
  ownUser,
  otherUser,
  searchSkills,
  topPageSkills
});

export default rootReducer;