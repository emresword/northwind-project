

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/productActions';
import { productItems } from '../initialValues/productItems';

const initialState = {
    products: productItems
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        
        default:
            return state;
    }
}
