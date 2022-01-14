import { call, put } from "redux-saga/effects";
import { postBalance, postSignIn } from "../../actions/Utari/ActionCreator";
import { signInApi } from "../../apis/Utari/SignInApi";
import { PromiseGenericType } from "../PromiseGenericType";

export function* signInSaga(action: ReturnType<typeof postSignIn.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof signInApi>> = yield call(
      signInApi,
      action.payload
    );
    if (response.status === 202 && response.data) {
      yield put(postSignIn.success(response.data))
      yield put(postBalance.request({id: response.data.id, token: response.data.token}))
    } else {
      yield put(postSignIn.failure(new Error('fail post sign in')))
    }
  } catch (e) {
    yield put(postSignIn.failure(new Error('fail post sign in in api')))
  }
}