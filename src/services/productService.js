import axios from "axios"

export default class productService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }
    addProduct(product) {
        return axios.post("http://localhost:8080/api/products", product);
    }
}