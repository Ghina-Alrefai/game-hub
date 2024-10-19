import  { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
    children : string 
}
export const ExpendableText = ({children} : Props) => {

   const [expended , setExpended ] = useState(false);

  const limit= 300;
  if(children.length < limit )
     return <Text>{children}</Text>
  
  const summary = expended ? children : children.substring(0, limit) + '...  '
   
  return (
    <>
   <Text>{summary + '   '} <Button size='xs' fontWeight='bold' colorScheme='blue' onClick={()=>setExpended(!expended)}>{expended ? 'show less' : 'show more'}</Button> </Text> 
   
   </>
  )
}
