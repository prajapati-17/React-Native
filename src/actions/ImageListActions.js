import { IMAGE_SEARCH_BOX_UPDATE } from "./ActionTypes";

// action

export const imageSearchBoxValueChanged = search =>{
    return{
        type: IMAGE_SEARCH_BOX_UPDATE,
        payload: search,
    };
}