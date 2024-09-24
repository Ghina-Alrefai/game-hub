import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'



interface Props{
children:ReactNode
}
export const CardContainer = ({children}: Props) => {
  return (
    <Box>
       {children}
    </Box>
  )
}
