import { combineReducers } from "redux";

import { bands, histories } from "./bandReducers"
import { user } from "./userReducer"

export default combineReducers({ bands, histories, user })