import SkillsAction from "../actions/Skills/Action"
import SkillsActionType from "../actions/Skills/ActionType"
import SearchSkillsState from "../states/SearchSkills"

const initialState: SearchSkillsState = []

export default (state: SearchSkillsState = initialState, action: SkillsAction): SearchSkillsState => {
  switch (action.type) {
    case SkillsActionType.GET_SEARCH_SKILLS_SUCCESS:
      return [
        ...action.payload
      ]
    default:
      return state
  }
}