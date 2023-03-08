import { combineReducers } from "redux";
import  userReducer from "./Reducers/userReducer";

export default combineReducers({
    user: userReducer
});