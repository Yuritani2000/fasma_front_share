import { takeLatest } from "redux-saga/effects";
import UserActionType from "../../actions/User/ActionType";
import { getOwnUserSaga } from "./GetOwnUserSaga";

export const ownUserSaga = [
  takeLatest(UserActionType.GET_OWN_USER_REQUEST, getOwnUserSaga),
];