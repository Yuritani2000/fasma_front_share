import { getOwnUsers } from "../../actions/User/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getUserApi } from "../../apis/User/GetUserApi";
import { call, put } from "redux-saga/effects";

export function* getOwnUserSaga(action: ReturnType<typeof getOwnUsers.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
      getUserApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getOwnUsers.success(response.data));
    } else {
      yield put(getOwnUsers.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getOwnUsers.failure(new Error('fail get user in api')))
  }
}