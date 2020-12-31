import SkillsAction from "../actions/Skills/Action"
import SkillsActionType from "../actions/Skills/ActionType"
import TopPageSkillsState from "../states/TopPageSkills"

const initialState: TopPageSkillsState = {
  programming: [],
  design: [],
  math: []
}

export default (state: TopPageSkillsState = initialState, action: SkillsAction): TopPageSkillsState => {
  switch (action.type) {
    case SkillsActionType.GET_TOP_PAGE_SKILLS_SUCCESS:
      switch (action.payload[0].category) {
        case "programming":
          return {
            programming: [
              ...action.payload
            ],
            design: [
              ...state.design
            ],
            math: [
              ...state.math
            ]
          }
        case "design":
          return {
            programming: [
              ...state.programming
            ],
            design: [
              ...action.payload
            ],
            math: [
              ...state.math
            ]
          }
        case "math":
          return {
            programming: [
              ...state.programming
            ],
            design: [
              ...state.design
            ],
            math: [
              ...action.payload
            ]
          }
        default:
          return state
      }
    default:
      return state
  }
}