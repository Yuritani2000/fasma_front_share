import { createAsyncAction } from "typesafe-actions"
import UserActionType from "./ActionType"
import UserState from "../../states/User_Temple";
import { GetUserParam } from "../../apis/User_Temple/GetUserApi";


export const getUsers = createAsyncAction(
  UserActionType.GET_USER_REQUEST,
  UserActionType.GET_USER_SUCCESS,
  UserActionType.GET_USER_FAIL
)<GetUserParam, UserState, Error>();