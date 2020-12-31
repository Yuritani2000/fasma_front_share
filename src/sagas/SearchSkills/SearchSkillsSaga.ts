import { getSearchSkills } from "../../actions/Skills/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getSkillsApi } from "../../apis/Skills/GetSkills";
import { call, put } from "redux-saga/effects";


export function* getSearchSkillsSaga(action: ReturnType<typeof getSearchSkills.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getSkillsApi>> = yield call(
      getSkillsApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getSearchSkills.success(response.data));
    } else {
      yield put(getSearchSkills.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getSearchSkills.failure(new Error('fail get user in api')))
  }
}