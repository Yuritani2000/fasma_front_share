import { createAsyncAction } from "typesafe-actions"
import SkillsActionType from "./ActionType"
import { GetSkillsParam } from "../../apis/Skills/GetSkillsApi";
import { Skill } from "../../states/Skills";

export const getTopPageSkills = createAsyncAction(
  SkillsActionType.GET_TOP_PAGE_SKILLS_REQUEST,
  SkillsActionType.GET_TOP_PAGE_SKILLS_SUCCESS,
  SkillsActionType.GET_TOP_PAGE_SKILLS_FAIL
)<GetSkillsParam, Skill[], Error>();

export const getSkills = createAsyncAction(
  SkillsActionType.GET_SKILLS_REQUEST,
  SkillsActionType.GET_SKILLS_SUCCESS,
  SkillsActionType.GET_SKILLS_FAIL
)<GetSkillsParam, Skill[], Error>();