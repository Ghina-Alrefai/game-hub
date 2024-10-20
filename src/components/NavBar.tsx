import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorSwitch  from './ColorSwitch';
import { SearchInput } from './SearchInput';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link to='/'>
      <Image src={logo} boxSize='60px' borderRadius={50} objectFit='cover'/>
      </Link>
     
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};
