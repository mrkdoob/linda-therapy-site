import { VStack, Icon, Heading, useColorModeValue } from '@chakra-ui/react';

export const IconText = ({ icon, children, ...rest }) => {
  return (
    <VStack spacing={6} {...rest}>
      <Icon
        aria-hidden
        as={icon}
        fontSize="6xl"
        color={useColorModeValue('teal.500', 'teal.300')}
      />
      <Heading size="md" fontWeight="extrabold">
        {children}
      </Heading>
    </VStack>
  );
};
