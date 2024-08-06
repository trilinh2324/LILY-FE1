import axios from 'axios';

const API_URL = 'http://localhost:8090/api/products';

class ProductService {
  getAllProducts() {
    return axios.get(API_URL);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

export default new ProductService();
