import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { BsChevronBarDown } from 'react-icons/bs'
import useStoreGame from '../store'




export const SortSelector = () => {
    const sortSelector = [
        {value:'' , label:'Relevance'},
        {value:'-added' , label:' Date add'},
        {value:'name' , label:'Name'},
        {value:'-released' , label:'Relese date'},
        {value:'-metacritic' , label:'popularity'},
        {value:'-rating' , label:'avarge rating'},
   
    ]
    const selectedSortOrder = useStoreGame(s=> s.setSortOrder)
    const  sortOrder = useStoreGame( s=> s.gameQuery.sortOrder)

    const currentSortOrder = sortSelector.find( (order)=> order.value === sortOrder);

    return (
        <Menu> 
            <MenuButton
                 as={Button}
                 rightIcon={<BsChevronBarDown/>}>
                 order by : {currentSortOrder?.label}
                 
            </MenuButton>
             <MenuList>
                {sortSelector.map(item => <MenuItem onClick={()=>selectedSortOrder(item.value)} key={item.value} value={item.value}> {item.label} </MenuItem>)}
                
            </MenuList>
        </Menu>
      )
    
}
