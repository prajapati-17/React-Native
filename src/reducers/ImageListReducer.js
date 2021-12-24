// import { act } from "react-test-renderer";
import { IMAGE_SEARCH_BOX_UPDATE } from "../actions/ActionTypes";

const INITIAL_STATE =  {
    image_search: '',
};

// reducer : to use action type

export default (state = INITIAL_STATE,action)=>{
    console.log(action);
    // console.log(action.payload);
    // console.log(action.type);
    // console.log(state);
    switch(action.type){
        case IMAGE_SEARCH_BOX_UPDATE:
            return {...state,image_search:action.payload};
        default:
            return state;
    }
}