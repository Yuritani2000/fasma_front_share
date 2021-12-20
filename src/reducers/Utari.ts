import UtariAction from "../actions/Utari/Action"
import UtariActionType from "../actions/Utari/ActionType"
import UtariState from "../states/Utari"

const initialState: UtariState = {
  id: '',
  token: '',
  balance: 0,
  unsettled: 0
}

export default (state: UtariState = initialState, action: UtariAction): UtariState => {
  switch (action.type) {
    case UtariActionType.POST_UTARI_SIGN_IN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token
      }
    case UtariActionType.POST_UTARI_BALANCE_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}