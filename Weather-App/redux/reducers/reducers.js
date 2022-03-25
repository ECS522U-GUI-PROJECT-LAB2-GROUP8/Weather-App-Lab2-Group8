import { ADD_CLOTHES } from "../actions/actions";
import { Image } from "react-native";
import exampleImage from '../../assets/tshirt.png';
import { v4 as uuid } from 'uuid';

const unique_id = uuid();

// Initial states list we can choose from
const initialState = {
    wardrobe: [{ name:'Blue shirt', category: 'Shirt', image: Image.resolveAssetSource(exampleImage).uri, key: unique_id }]
};

/* Function that decides operation based on type in action  
    Parameters: 2 arguments: initialState, action.
    Where:
        - initialState holds any number of states, in this case just 'userClothes' 
        - action composing of 'type, payload', where payload is item passed into clothReducer function
*/
function clothReducer(state = initialState, action) { // 
    switch(action.type) {
        case ADD_CLOTHES: // ACTIONS
            return {
                ...state, 
                wardrobe: [...state.wardrobe, action.payload]
            }
        default: // return state without manipulation
            return state;
    }
}

export default clothReducer;