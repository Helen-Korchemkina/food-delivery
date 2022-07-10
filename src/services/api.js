import axios from 'axios';

axios.defaults.baseURL = 'https://62ba90b2573ca8f83286c542.mockapi.io/';

const fetchProducts = async () => {
  const response = await axios.get(`food`);
  return response.data;
};

export default fetchProducts;