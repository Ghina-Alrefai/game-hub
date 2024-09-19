import { Badge } from '@chakra-ui/react';
import React from 'react'



interface Props{
    scour:number;
}
export const CriticScour = ({scour} : Props) => {

    let color = scour>90 ? 'green'  : scour > 60 ? 'yellow' : ''
  return (
   <Badge fontSize='14px' colorScheme ={color}>{scour}</Badge>
  )
}


export default CriticScour;