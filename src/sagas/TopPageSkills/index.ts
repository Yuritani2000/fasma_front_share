import { takeEvery } from "redux-saga/effects";
import SkillsActionType from "../../actions/Skills/ActionType";
import { getTopPageSkillsSaga } from "./GetTopPageSkillsSaga";

export const topPageSkillsSaga = [
  takeEvery(SkillsActionType.GET_TOP_PAGE_SKILLS_REQUEST, getTopPageSkillsSaga),
];