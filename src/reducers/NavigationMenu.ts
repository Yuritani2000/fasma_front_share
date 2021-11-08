import NavigationMenuAction from "../actions/NavigationMenu/Action"
import NavigationMenuActionType from "../actions/NavigationMenu/ActionType"
import NavigationMenuState, { NavigationMenuContent } from "../states/NavigationMenu"

const initialState: NavigationMenuState = NavigationMenuContent.Profile

export default (state: NavigationMenuState = initialState, action: NavigationMenuAction): NavigationMenuState => {
  switch (action.type) {
    case NavigationMenuActionType.CLICK_NAVIGATION_MENU:
      return action.payload.enLabel
    default:
      return state
  }
}