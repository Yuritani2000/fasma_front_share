import { createAction } from "typesafe-actions"
import { NavigationMenuContent } from "../../states/NavigationMenu";
import NavigationMenuActionType from "./ActionType";

export const clickNavigationMenu = createAction(
  NavigationMenuActionType.CLICK_NAVIGATION_MENU,
)<{ enLabel: NavigationMenuContent }>();
