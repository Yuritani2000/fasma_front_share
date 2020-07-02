import UserState from "../states/User_Temple";
import UserAction from "../actions/User_Temple/Action";
import UserActionType from "../actions/User_Temple/ActionType";

const initialState: UserState = {
  name: '',
  age: 0
}

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.GET_USER_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}