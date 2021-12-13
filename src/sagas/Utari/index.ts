import { takeLatest } from "redux-saga/effects";
import UtariActionType from "../../actions/Utari/ActionType";
import { signUpSaga } from "./SignUpSaga";

export const utariSaga = [
  takeLatest(UtariActionType.POST_UTARI_SIGN_UP_REQUEST, signUpSaga)
]