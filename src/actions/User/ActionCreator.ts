import { createAsyncAction } from "typesafe-actions"
import UserActionType from "./ActionType"
import UserState from "../../states/User";
import { GetUserParam } from "../../apis/User/GetUserApi";

export const getOwnUsers = createAsyncAction(
  UserActionType.GET_OWN_USER_REQUEST,
  UserActionType.GET_OWN_USER_SUCCESS,
  UserActionType.GET_OWN_USER_FAIL
)<GetUserParam, UserState, Error>();

export const getOtherUsers = createAsyncAction(
  UserActionType.GET_OTHER_USER_REQUEST,
  UserActionType.GET_OTHER_USER_SUCCESS,
  UserActionType.GET_OTHER_USER_FAIL
)<GetUserParam, UserState, Error>();

