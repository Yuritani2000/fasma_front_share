// State(Reducer)ごとにフォルダを分ける
// 通信の非同期処理を記述する場合はその中にCRUD1つ1つのフォルダを作成する
// その場合の命名規則は CRUD + State + Saga

import { getUsers } from "../../actions/User_Temple/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getUserApi } from "../../apis/User_Temple/GetUserApi";
import { call, put } from "redux-saga/effects";

export function* getUserSaga(action: ReturnType<typeof getUsers.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
      getUserApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getUsers.success(response.data));
    } else {
      yield put(getUsers.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getUsers.failure(new Error('fail get user in api')))
  }
}