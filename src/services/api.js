import axios from 'axios';

axios.defaults.baseURL = 'https://62ba90b2573ca8f83286c542.mockapi.io/';

export const fetchOrder = async ({ name, email, phone, address, cart }) => {
  await axios.post(`order`, {
    name,
    email,
    phone,
    address,
    cart,
  });
};
