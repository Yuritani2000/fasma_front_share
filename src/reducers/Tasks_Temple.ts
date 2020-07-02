import TasksState from "../states/Tasks_Temple";
import TasksAction from "../actions/Tasks_Temple/Action";
import TasksActionType from "../actions/Tasks_Temple/ActionType";

const initialState: TasksState = [];

export default (state: TasksState = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionType.ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
} 