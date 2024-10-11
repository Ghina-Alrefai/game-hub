import axios, {
  AxiosRequestConfig } from 'axios';
import { FetchResponse } from '../hooks/useData';


export const axiosInstance = axios.create({
  baseURL : 'https://api.rawg.io/api',
  params :{
    key:'db438cfb11a34c7dac4fa18410008642'
  }
})

export class ApiClient<T>{

 endPoint : string;

 constructor(endPoint: string)
 {
     this.endPoint = endPoint;
 }


 
 getAll = (config : AxiosRequestConfig) =>
  {
      return axiosInstance.
      get<FetchResponse<T>>(this.endPoint , config)
      .then(res => res.data)
  }

 
 
}