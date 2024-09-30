import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

export const SortSelector = () => {
    return (
        <Menu> 
            <MenuButton
                 as={Button}
                 rightIcon={<BsChevronBarDown/>}>
                 order by : Relevance
            </MenuButton>
             <MenuList>
                <MenuItem > Relevance </MenuItem>
                <MenuItem > Date add </MenuItem>
                <MenuItem > Name  </MenuItem>
                <MenuItem > popularity </MenuItem>
                <MenuItem > avarge </MenuItem>
               
            </MenuList>
        </Menu>
      )
    
}
