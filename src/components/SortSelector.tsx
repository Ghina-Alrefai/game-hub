import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { label } from 'framer-motion/client'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'


 interface Props{
  OnSelectSortOrder :(sortSelector:string)=>void;
  selectedSortOrder :string;
  
}
export const SortSelector = ({OnSelectSortOrder , selectedSortOrder}:Props) => {
    const sortSelector = [
        {value:'' , label:'Relevance'},
        {value:'-added' , label:' Date add'},
        {value:'name' , label:'Name'},
        {value:'-released' , label:'Relese date'},
        {value:'-metacritic' , label:'popularity'},
        {value:'-rating' , label:'avarge rating'},
   
    ]

    const currentSortOrder = sortSelector.find( (order)=> order.value === selectedSortOrder);
    return (
        <Menu> 
            <MenuButton
                 as={Button}
                 rightIcon={<BsChevronBarDown/>}>
                 order by : {currentSortOrder?.label}
                 
            </MenuButton>
             <MenuList>
                {sortSelector.map(item => <MenuItem onClick={()=>OnSelectSortOrder(item.value)} key={item.value} value={item.value}> {item.label} </MenuItem>)}
                
            </MenuList>
        </Menu>
      )
    
}
