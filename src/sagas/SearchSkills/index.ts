import { takeLatest } from "redux-saga/effects";
import SkillsActionType from "../../actions/Skills/ActionType";
import { getSearchSkillsSaga } from "./SearchSkillsSaga";

export const searchSkillsSaga = [
  takeLatest(SkillsActionType.GET_SEARCH_SKILLS_REQUEST, getSearchSkillsSaga),
];