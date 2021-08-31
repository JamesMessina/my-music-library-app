import { combineReducers } from "redux";

import { bands, histories } from "./bandReducers"

export default combineReducers({ bands, histories })