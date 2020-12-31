import { createAsyncAction } from "typesafe-actions"
import SkillsActionType from "./ActionType"
import { GetSkillsParam } from "../../apis/Skills/GetSkills";
import { Skills } from "../../states/TopPageSkills";

export const getTopPageSkills = createAsyncAction(
  SkillsActionType.GET_TOP_PAGE_SKILLS_REQUEST,
  SkillsActionType.GET_TOP_PAGE_SKILLS_SUCCESS,
  SkillsActionType.GET_TOP_PAGE_SKILLS_FAIL
)<GetSkillsParam, Skills, Error>();

export const getSearchSkills = createAsyncAction(
  SkillsActionType.GET_SEARCH_SKILLS_REQUEST,
  SkillsActionType.GET_SEARCH_SKILLS_SUCCESS,
  SkillsActionType.GET_SEARCH_SKILLS_FAIL
)<GetSkillsParam, Skills, Error>();