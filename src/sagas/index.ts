import { all } from "redux-saga/effects";
import { otherUserSaga } from "./OtherUser";
import { ownUserSaga } from "./OwnUser";
import { searchSkillsSaga } from "./SearchSkills";
import { topPageSkillsSaga } from "./TopPageSkills";

export default function* rootSaga() {
  yield all([
    ...ownUserSaga,
    ...otherUserSaga,
    ...topPageSkillsSaga,
    ...searchSkillsSaga
  ])
}