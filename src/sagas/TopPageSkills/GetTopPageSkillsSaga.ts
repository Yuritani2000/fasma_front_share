import { getTopPageSkills } from "../../actions/Skills/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getSkillsApi } from "../../apis/Skills/GetSkills";
import { call, put } from "redux-saga/effects";


export function* getTopPageSkillsSaga(action: ReturnType<typeof getTopPageSkills.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getSkillsApi>> = yield call(
      getSkillsApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getTopPageSkills.success(response.data));
    } else {
      yield put(getTopPageSkills.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getTopPageSkills.failure(new Error('fail get user in api')))
  }
}