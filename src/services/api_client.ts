import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 5000, // Timeout to prevent long requests
});

export default apiClient;
