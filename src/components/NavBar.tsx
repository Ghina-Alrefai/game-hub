import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorSwitch  from './ColorSwitch';
import { SearchInput } from './SearchInput';

interface Props{
  OnSearch: (searchText:string)=>void
}

export const NavBar = ({OnSearch}:Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' borderRadius={50}/>
      <SearchInput OnSearch={OnSearch}/>
      <ColorSwitch />
    </HStack>
  );
};
