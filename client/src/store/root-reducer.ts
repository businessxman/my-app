import { combineReducers } from "redux";

import { routerReducer } from "./redux-router";
import { reducer as authReducer } from "../features/auth/reducer";
import { reducer as errorReducer } from "../features/error/reducer";

export interface IState {
  router: any,
  auth: any,
  error: any,
}

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  error: errorReducer,
});

export default rootReducer;