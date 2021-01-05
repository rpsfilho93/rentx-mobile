import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rentx-deploy.herokuapp.com',
});

export default api;
