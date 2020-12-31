import { takeLatest } from "redux-saga/effects";
import UserActionType from "../../actions/User/ActionType";
import { getOtherUserSaga } from "./GetOtherUserSaga";

export const otherUserSaga = [
  takeLatest(UserActionType.GET_OTHER_USER_REQUEST, getOtherUserSaga),
];