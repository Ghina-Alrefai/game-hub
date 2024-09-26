import { Box } from '@chakra-ui/react'
import  { ReactNode } from 'react'



interface Props{
children:ReactNode
}
export const CardContainer = ({children}: Props) => {
  return (
    <Box   borderRadius={20} overflow='hidden'>
       {children}
    </Box>
  )
}
