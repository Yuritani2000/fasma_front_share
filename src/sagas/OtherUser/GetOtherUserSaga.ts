import { getOtherUsers } from "../../actions/User/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getUserApi } from "../../apis/User/GetUserApi";
import { call, put } from "redux-saga/effects";

export function* getOtherUserSaga(action: ReturnType<typeof getOtherUsers.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
      getUserApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getOtherUsers.success(response.data));
    } else {
      yield put(getOtherUsers.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getOtherUsers.failure(new Error('fail get user in api')))
  }
}