import * as ActionCreators from './ActionCreator';
import { ActionType } from "typesafe-actions";

type NavigationMenuAction = ActionType<typeof ActionCreators>

export default NavigationMenuAction