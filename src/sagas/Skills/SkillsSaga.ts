import { getSkills } from "../../actions/Skills/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getSkillsApi } from "../../apis/Skills/GetSkillsApi";
import { call, put } from "redux-saga/effects";


export function* getSkillsSaga(action: ReturnType<typeof getSkills.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getSkillsApi>> = yield call(
      getSkillsApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getSkills.success(response.data));
    } else {
      yield put(getSkills.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getSkills.failure(new Error('fail get user in api')))
  }
}