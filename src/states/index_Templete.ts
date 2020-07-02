import { StateType } from "typesafe-actions";
import rootReducer from "../reducers/index_Temple";

type RootState = StateType<typeof rootReducer>

export default RootState;