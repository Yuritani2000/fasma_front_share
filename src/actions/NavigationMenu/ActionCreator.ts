import { createAction } from "typesafe-actions"
import NavigationMenuActionType from "./ActionType";

export const clickProfileTab = createAction(
  NavigationMenuActionType.CLICK_PROFILE_TAB
)();

export const clickNoticeTab = createAction(
  NavigationMenuActionType.CLICK_NOTICE_TAB
)();

export const clickExhibitedSkillTab = createAction(
  NavigationMenuActionType.CLICK_EXHIBITED_SKILL_TAB
)();

export const clickPurchasedSkillTab = createAction(
  NavigationMenuActionType.CLICK_PURCHASED_SKILL_TAB
)();