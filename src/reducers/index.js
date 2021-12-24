import { combineReducers } from "redux";
import ImageListReducer from "./ImageListReducer";

// root reducer

export default combineReducers({
    imageListing: ImageListReducer,
})