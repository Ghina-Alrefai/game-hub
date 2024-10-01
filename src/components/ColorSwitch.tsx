import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';

export const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); // Destructure 'colorMode' correctly

  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} /> 
      <Text whiteSpace="nowrap">Dark mode</Text> 
    </HStack>
  );
};

export default ColorSwitch;