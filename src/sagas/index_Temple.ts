import { all } from "redux-saga/effects";
import { userSaga } from "./User_Temple";

export default function* rootSaga() {
  yield all([
    ...userSaga,
  ])
}