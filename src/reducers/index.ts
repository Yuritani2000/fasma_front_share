import { combineReducers } from "redux";
import ownUser from './OwnUser';
import otherUser from './OtherUser';
import skills from './Skills';
import topPageSkills from './TopPageSkills'
import navigationMenu from './NavigationMenu'
import utari from "./Utari";

const rootReducer = combineReducers({
  ownUser,
  otherUser,
  skills,
  topPageSkills,
  navigationMenu,
  utari
});

export default rootReducer;