import { combineReducers } from "redux";
import ownUser from './OwnUser';
import otherUser from './OtherUser';
import skills from './Skills';
import topPageSkills from './TopPageSkills'
import navigationMenu from './NavigationMenu'

const rootReducer = combineReducers({
  ownUser,
  otherUser,
  skills,
  topPageSkills,
  navigationMenu
});

export default rootReducer;