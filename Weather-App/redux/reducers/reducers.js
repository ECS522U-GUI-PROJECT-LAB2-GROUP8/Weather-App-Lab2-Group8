import { SET_CLOTHES } from "../actions/actions";
import { Image } from "react-native";
import exampleImage from '../../assets/tshirt.png';

const initialState = {
    clothesX: [
        {
        name:'Blue SHIRT',
        category: 'Shirt', 
        image: Image.resolveAssetSource(exampleImage).uri,
        key: '1',
        }
    ]
};

function clothReducer(state = initialState, action) { // 2 arguments -> prevState,  action: [type, payload]
    switch(action.type) {
        case SET_CLOTHES: // ACTIONS
            return {...state, arr: [...state.arr, action.payload]};
        default: // RETURN NEW/CURRENT BY DEFAULT
            return state;
    }
}

export default clothReducer;