

import useData from './useData';

export interface Platform{
    id:number
    name:string
    slug:string 
}


export const usePlatForme = () => useData<Platform>('/platforms');