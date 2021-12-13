import { takeLatest } from "redux-saga/effects";
import UtariActionType from "../../actions/Utari/ActionType";
import { postBalanceSaga } from "./BalanceSaga";

export const utariSaga = [
  takeLatest(UtariActionType.POST_UTARI_BALANCE_REQUEST, postBalanceSaga),
];