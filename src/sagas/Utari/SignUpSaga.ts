import { call, put } from "redux-saga/effects";
import { postSignUp } from "../../actions/Utari/ActionCreator";
import { signUpApi } from "../../apis/Utari/SignUpApi";
import { PromiseGenericType } from "../PromiseGenericType";

export function* signUpSaga(action: ReturnType<typeof postSignUp.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof signUpApi>> = yield call(
      signUpApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(postSignUp.success())
    } else {
      yield put(postSignUp.failure(new Error('fail post sign up')))
    }
  } catch (e) {
    yield put(postSignUp.failure(new Error('fail post sign up in api')))
  }
}