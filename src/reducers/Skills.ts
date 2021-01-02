import SkillsAction from "../actions/Skills/Action"
import SkillsActionType from "../actions/Skills/ActionType"
import { SkillsState } from "../states/Skills"

const initialState: SkillsState = []

export default (state: SkillsState = initialState, action: SkillsAction): SkillsState => {
  switch (action.type) {
    case SkillsActionType.GET_SKILLS_SUCCESS:
      return [
        ...action.payload
      ]
    default:
      return state
  }
}