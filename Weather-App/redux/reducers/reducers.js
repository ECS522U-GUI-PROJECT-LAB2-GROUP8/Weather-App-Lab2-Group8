import { ADD_CLOTHES } from "../actions/actions";
import { Image } from "react-native";
import { v4 as uuid } from 'uuid';

/* Images */
import tshirt from '../../assets/Wardrobe/Casual/tshirt.png';
import tshirt2 from '../../assets/Wardrobe/Casual/T-shirt.webp';
import sweatshirt from '../../assets/Wardrobe/Casual/Sweatshirt.jpeg';
import jumper from '../../assets/Wardrobe/Smart/jumper.png';

import sweatpants from '../../assets/Wardrobe/Casual/Sweatpants.webp';
import skirt from '../../assets/Wardrobe/Summer/Smart/Skirt.png'

import trainers from '../../assets/Wardrobe/Shoes/Trainers.webp';
import slides from '../../assets/Wardrobe/Shoes/Slides.webp';

// Initial states list we can choose from
const initialState = {
    wardrobe: [
        { name:'Blue t-shirt', category: 'T-shirt', image: Image.resolveAssetSource(tshirt).uri, key: uuid() },
        { name:'White t-shirt', category: 'T-shirt', image: Image.resolveAssetSource(tshirt2).uri, key: uuid() },
        { name:'My sweatshirt', category: 'Sweatshirts', image: Image.resolveAssetSource(sweatshirt).uri, key: uuid() },
        { name:'Old Jumper', category: 'Jumper', image: Image.resolveAssetSource(jumper).uri, key: uuid() },

        { name:'Sweatpants', category: 'Pants', image: Image.resolveAssetSource(sweatpants).uri, key: uuid() },
        { name:'Long Skirt', category: 'Pants', image: Image.resolveAssetSource(skirt).uri, key: uuid() },

        { name:'White trainers', category: 'Trainers', image: Image.resolveAssetSource(trainers).uri, key: uuid() },
        { name:'My sliders', category: 'Slides', image: Image.resolveAssetSource(slides).uri, key: uuid() },
    ]
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