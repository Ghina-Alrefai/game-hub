// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import useData from './useData';


export interface Platform{
  id : number
  name: string
  slug: string
}
export interface Product {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform : Platform}[];
  metacritic:number;
}
interface FetchProduct{
  count: number;
  results: Product[];
}
export const useFetchProducts = () => useData<Product>('/games');