import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  timeout: 5000, // Timeout to prevent long requests
  params :{
    key:'00b21983ae1a4e04a784616dfa9c4b59'
  }
});

export default apiClient;
