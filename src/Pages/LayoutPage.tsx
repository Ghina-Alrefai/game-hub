import { Box} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router-dom';

// ... other imports

export const LayoutPage = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
          <Outlet />
      </Box>
    
    </>
  );
};

