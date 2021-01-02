import { StateType } from "typesafe-actions";
import rootReducer from "../reducers/index";

type RootState = StateType<typeof rootReducer>

export default RootState;