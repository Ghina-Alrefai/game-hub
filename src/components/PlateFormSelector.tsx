import { Button, Icon, List, ListItem, Menu, MenuButton, MenuItem, MenuList ,Text} from '@chakra-ui/react'
import { Game, Platform } from '../hooks/useFetchGame'
import useData from '../hooks/useData';
import { BsChevronBarDown  } from 'react-icons/bs';
import { IconBase } from 'react-icons';
import {usePlatForme } from  '../hooks/usePlatForme'

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  SelectedPlatform: Platform| null;
}
export const PlateFormSelector = ({ SelectedPlatform, onSelectPlatform}:  Props) => {
    const { data ,error } = usePlatForme();
    if(error) return null;
  return (
    <Menu> 
        <MenuButton
             as={Button}
             rightIcon={<BsChevronBarDown/>}>
               {SelectedPlatform?.name || "All Platforms"}
        </MenuButton>
         <MenuList>
        {data.map(platform =>
           
            <MenuItem   onClick={() => onSelectPlatform(platform)} key={platform.id}> 
                {platform.name}
            
            </MenuItem>
        )
        }
        </MenuList>
    </Menu>
  )
}
