import axios from 'axios';

const API_URL = 'http://localhost:8090/api/products';
const API_URL_CART = 'http://localhost:8090/api/cart';

class ProductService {
  getAllProducts() {
    return axios.get(API_URL);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  addToCart = (productId, username, quantity) => {
    return axios.post(`${API_URL_CART}/addToCart/${productId}/${username}`, null, {
        params: { quantity }
    });
};

 getCartByUser = (username) => {
    return axios.get(`${API_URL_CART}/cart/${username}`);
};
}

export default new ProductService();
