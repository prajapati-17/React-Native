import { IMAGE_SEARCH_BOX_UPDATE, UPDATE_IMAGE_LIST, TOGGLE_IMAGELIST_LOADER,FILTER_IMAGE_LIST} from "./ActionTypes";
import axios from "axios";

// action

export const imageSearchBoxValueChanged = (image_list,search) =>{
    // return{
    //     type: IMAGE_SEARCH_BOX_UPDATE,
    //     payload: search,
    // };
    // console.log('author.....................',image_list.author);
    return dispatch => {
        console.log('imageSearchBoxValueChanged');
        var filtered_imageList = image_list.filter(function(image_data){
            // console.log('author',image_data.author);
            return image_data.author.includes(search,0);
          });
          console.log('Filter images : ',filtered_imageList);
          dispatch({
            type: IMAGE_SEARCH_BOX_UPDATE,
            payload: search,
          });
          dispatch({
            type: FILTER_IMAGE_LIST,
            payload: filtered_imageList,
          });
    };
};

export const toggleImageListLoader = show =>{
    console.log('toggle',show);
    return{
        type:TOGGLE_IMAGELIST_LOADER,
        payload:show
    };
};

export const getImageListFromAPI =() =>{
    console.log('getImageListFromAPI');
    return dispatch => {
        dispatch({
            type:TOGGLE_IMAGELIST_LOADER,
            payload:true
        });
        axios
        .get('https://picsum.photos/v2/list')
        .then(respose => {
        //   console.log('response',respose.data);
            dispatch({
                type:UPDATE_IMAGE_LIST,
                payload:respose.data,
            });
            dispatch({
                type: FILTER_IMAGE_LIST,
                payload: respose.data,
            });
            dispatch({
                type:TOGGLE_IMAGELIST_LOADER,
                payload:false
            });
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type:TOGGLE_IMAGELIST_LOADER,
            payload:false
        });
        });
    };
};