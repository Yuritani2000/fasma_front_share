// どのアクションによってどの関数を発火するかは、まとめてこの部分に記述する
// 命名規則は state + Saga

import { takeLatest } from "redux-saga/effects";
import UserActionType from "../../actions/User_Temple/ActionType";
import { getUserSaga } from "./GetUserSaga";

export const userSaga = [
  takeLatest(UserActionType.GET_USER_REQUEST, getUserSaga),
];