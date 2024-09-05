
import ProductService from '../../services/productService'; // Note the correct path

import { addProduct } from '../actions/productActions'; 


export function addProductThunk(productData) {
    return async (dispatch) => {
        try {
            let productService = new ProductService();
            const response = await productService.addProduct(productData);  
            dispatch(addProduct(response.data)); 
        } catch (error) {
            console.error("Failed to add product:", error);
            
        }
    };
}



