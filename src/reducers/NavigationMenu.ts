import NavigationMenuAction from "../actions/NavigationMenu/Action"
import NavigationMenuActionType from "../actions/NavigationMenu/ActionType"
import NavigationMenuState, { NavigationMenuContent } from "../states/NavigationMenu"

const initialState: NavigationMenuState = NavigationMenuContent.Profile

export default (state: NavigationMenuState = initialState, action: NavigationMenuAction): NavigationMenuState => {
  switch (action.type) {
    case NavigationMenuActionType.CLICK_PROFILE_TAB:
      return NavigationMenuContent.Profile
    case NavigationMenuActionType.CLICK_NOTICE_TAB:
      return NavigationMenuContent.Notice
    case NavigationMenuActionType.CLICK_EXHIBITED_SKILL_TAB:
      return NavigationMenuContent.ExhibitedSkill
    case NavigationMenuActionType.CLICK_PURCHASED_SKILL_TAB:
      return NavigationMenuContent.PurchasedSkill
    default:
      return state
  }
}