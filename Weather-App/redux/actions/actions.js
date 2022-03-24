export const SET_CLOTHES = 'SET_CLOTHES';

export const setClothesX = item => dispatch => {
    dispatch({
        type: SET_CLOTHES,
        payload: item,
    });
};