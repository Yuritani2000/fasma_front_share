import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type UtariAction = ActionType<typeof ActionCreators>

export default UtariAction;