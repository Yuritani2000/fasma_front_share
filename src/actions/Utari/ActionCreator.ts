import { createAsyncAction } from "typesafe-actions"
import UtariActionType from "./ActionType";
import BalanceModel from "../../apis/Models/BalanceModel";
import { PostSignInParam } from "../../apis/Utari/SignInApi";
import { PostBalanceParam } from "../../apis/Utari/BalanceApi";
import SignInModel from "../../apis/Models/SignInModel";
import { PostTransactionParam } from "../../apis/Utari/TransactionApi";
import { PostSignUpParam } from "../../apis/Utari/SignUpApi";

export const postSignUp = createAsyncAction(
  UtariActionType.POST_UTARI_SIGN_UP_REQUEST,
  UtariActionType.POST_UTARI_SIGN_UP_SUCCESS,
  UtariActionType.POST_UTARI_SIGN_UP_FAIL
)<PostSignUpParam, undefined, Error>();

export const postSignIn = createAsyncAction(
  UtariActionType.POST_UTARI_SIGN_IN_REQUEST,
  UtariActionType.POST_UTARI_SIGN_IN_SUCCESS,
  UtariActionType.POST_UTARI_SIGN_IN_FAIL
)<PostSignInParam, SignInModel, Error>();

export const postBalance = createAsyncAction(
  UtariActionType.POST_UTARI_BALANCE_REQUEST,
  UtariActionType.POST_UTARI_BALANCE_SUCCESS,
  UtariActionType.POST_UTARI_BALANCE_FAIL
)<PostBalanceParam, BalanceModel, Error>();

export const postTransaction = createAsyncAction(
  UtariActionType.POST_UTARI_TRANSACTION_REQUEST,
  UtariActionType.POST_UTARI_TRANSACTION_SUCCESS,
  UtariActionType.POST_UTARI_TRANSACTION_FAIL
)<PostTransactionParam, undefined, Error>();