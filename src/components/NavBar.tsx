import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorSwitch  from './ColorSwitch';
import { SearchInput } from './SearchInput';

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' borderRadius={50}/>
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};
