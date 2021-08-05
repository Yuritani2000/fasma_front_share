import { createAction } from "typesafe-actions"
import NavigationMenuActionType from "./ActionType";

export const clickProfileTab = createAction(
  NavigationMenuActionType.CLICK_PROFILE_TAB
)();

export const clickNoticeTab = createAction(
  NavigationMenuActionType.CLICK_NOTICE_TAB
)();

export const clickExhibitedSkillsTab = createAction(
  NavigationMenuActionType.CLICK_EXHIBITED_SKILLS_TAB
)();

export const clickPurchasedSkillsTab = createAction(
  NavigationMenuActionType.CLICK_PURCHASED_SKILLS_TAB
)();