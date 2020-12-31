import UserState from "../states/User";
import UserAction from "../actions/User/Action";
import UserActionType from "../actions/User/ActionType";

const initialState: UserState = {
  id: 0,
  name: '',
  avatar: '',
  introduction: '',
  google_emial: '',
  school_email: '',
  other_email: '',
  qr_code: '',
  created_at: new Date(),
  updated_at: new Date()
}

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.GET_OWN_USER_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}