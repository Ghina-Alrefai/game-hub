import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
 
  params :{
    key:'db438cfb11a34c7dac4fa18410008642'
  }
});

export default apiClient;
