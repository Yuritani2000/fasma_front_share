import { takeLatest } from "redux-saga/effects";
import SkillsActionType from "../../actions/Skills/ActionType";
import { getSkillsSaga } from "./SkillsSaga";

export const skillsSaga = [
  takeLatest(SkillsActionType.GET_SKILLS_REQUEST, getSkillsSaga),
];