// import { act } from "react-test-renderer";
import { IMAGE_SEARCH_BOX_UPDATE, TOGGLE_IMAGELIST_LOADER, UPDATE_IMAGE_LIST,FILTER_IMAGE_LIST } from "../actions/ActionTypes";

const INITIAL_STATE =  {
    image_search: '',
    image_list:[],
    filtered_image_list:[],
    showLoader: false,
};

// reducer : to use action type

export default (state = INITIAL_STATE,action)=>{
    // console.log(action);
    // console.log(action.payload);
    // console.log(action.type);
    // console.log(state);
    switch(action.type){
        case IMAGE_SEARCH_BOX_UPDATE:
            return {...state,image_search:action.payload};
        case UPDATE_IMAGE_LIST:
            return {...state,image_list:action.payload};
        case FILTER_IMAGE_LIST:
            return {...state,filtered_image_list:action.payload};
        case TOGGLE_IMAGELIST_LOADER:
            return {...state,showLoader:action.payload};
        default:
            return state;
    }
}