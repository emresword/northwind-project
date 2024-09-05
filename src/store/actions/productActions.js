export const ADD_PRODUCT = "ADD_PRODUCT";


// Action creators
export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
}

