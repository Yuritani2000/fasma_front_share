import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type SkillsAction = ActionType<typeof ActionCreators>

export default SkillsAction;