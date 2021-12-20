import { postBalance } from "../../actions/Utari/ActionCreator";
import { balanceApi  } from "../../apis/Utari/BalanceApi";
import { PromiseGenericType } from "../PromiseGenericType";
import { call, put } from "redux-saga/effects";

export function* postBalanceSaga(action: ReturnType<typeof postBalance.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof balanceApi>> = yield call(
        balanceApi,
        action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(postBalance.success(response.data));
    } else {
      yield put(postBalance.failure(new Error('fail get Balance')))
    }
  } catch (e) {
    yield put(postBalance.failure(new Error('fail get Balance api')))
  }
}