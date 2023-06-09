import { takeLatest } from "redux-saga/effects";
import UtariActionType from "../../actions/Utari/ActionType";
import { postBalanceSaga } from "./BalanceSaga";
import { signInSaga } from "./SignInSaga";
import { signUpSaga } from "./SignUpSaga";

export const utariSaga = [
  takeLatest(UtariActionType.POST_UTARI_BALANCE_REQUEST, postBalanceSaga),
  takeLatest(UtariActionType.POST_UTARI_SIGN_UP_REQUEST, signUpSaga),
  takeLatest(UtariActionType.POST_UTARI_SIGN_IN_REQUEST, signInSaga),
];
