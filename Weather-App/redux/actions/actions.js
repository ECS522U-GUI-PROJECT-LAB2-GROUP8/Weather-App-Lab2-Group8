export const ADD_CLOTHES = 'ADD_CLOTHES';

export const addClothes = cloth_item => dispatch => {
    dispatch({
        type: ADD_CLOTHES,
        payload: cloth_item,
    }); // item being the map of key:value pair items, {name, category, image, id}, type for procedure
};