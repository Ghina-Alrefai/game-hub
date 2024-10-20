import { Box, Button, Heading ,Text } from '@chakra-ui/react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

const ErrorPage = () => {
    const error = useRouteError()

  return (
    
     <>
    <NavBar/>
    <Box marginX='30px'>
 
    <div className="error-page" >
      <Heading>Oops!</Heading>

      <Text> {isRouteErrorResponse(error) ? 'this page dose not exist' : 'Something Went Wrong The page you are looking for could not be found.'}</Text>
      <Button marginY='30px'>
      <Link to="/">Go Back Home</Link>
      </Button>
    </div>
    </Box>
    </>
  );
};

export default ErrorPage;
