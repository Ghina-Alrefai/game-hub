
import { GridItem } from '@chakra-ui/react'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export const LayoutPage = () => {
  return (
   <>
    <NavBar />
    <Outlet/>
  </>
  )
}
