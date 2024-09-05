import axios from 'axios';

export default class categoryService {
    getCategories() {
        return axios.get("http://localhost:8080/api/categories");
    }
    addCategory(category) {
        return axios.post('http://localhost:8080/api/categories', category);
    }
}
