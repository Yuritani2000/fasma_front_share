import { all } from "redux-saga/effects";
import { otherUserSaga } from "./OtherUser";
import { ownUserSaga } from "./OwnUser";
import { skillsSaga } from "./Skills";
import { topPageSkillsSaga } from "./TopPageSkills";
import { utariSaga } from "./Utari";

export default function* rootSaga() {
  yield all([
    ...ownUserSaga,
    ...otherUserSaga,
    ...skillsSaga,
    ...topPageSkillsSaga,
    ...utariSaga
  ])
}