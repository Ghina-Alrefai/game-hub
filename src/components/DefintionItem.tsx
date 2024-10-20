import { Box, Heading} from '@chakra-ui/react';
import  { ReactNode } from 'react';

interface Props {
  term: ReactNode; // Expecting a ReactNode, not just a string
  children: ReactNode | ReactNode[];
}

const DefinitionElement = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">{term}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionElement;
