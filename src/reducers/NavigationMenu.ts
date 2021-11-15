import NavigationMenuAction from '../actions/NavigationMenu/Action';
import NavigationMenuActionType from '../actions/NavigationMenu/ActionType';
import NavigationMenuState, { NavigationMenuContent } from '../states/NavigationMenu';
import browserHistory from '../utils/history';

//現在のpathnameをNavigationMenuContentの型として取得
const pathname = browserHistory.location.pathname as NavigationMenuContent;
//NavigationMenuContentをstringのメンバから取得できるようにするためのMap型を生成
const reverseMap = new Map<string, NavigationMenuContent>();
Object.keys(NavigationMenuContent).forEach((s: string) => {
  const e = NavigationMenuContent[s as keyof typeof NavigationMenuContent];
  reverseMap.set(e.toString(), e);
});

const contents = reverseMap.get(pathname);
const initialState = contents?contents:NavigationMenuContent.Profile;

export default (
  state: NavigationMenuState = initialState,
  action: NavigationMenuAction
): NavigationMenuState => {
  switch (action.type) {
    case NavigationMenuActionType.CLICK_NAVIGATION_MENU:
      return action.payload.enLabel;
    default:
      return state;
  }
};
