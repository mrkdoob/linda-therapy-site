import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="nav"
      boxShadow="sm"
      w="100vw"
      py={{
        base: '2',
        lg: '2',
      }}
      px={[4, 8]}
      justify="space-between"
      align="center"
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '0',
          lg: '12',
        }}
      >
        <HStack spacing="10" justify="space-between">
          <Image
            src="/linda-lunardi-logo.png"
            alt="Linda Lunardi"
            h="80px"
            w="270px"
          />
          {isDesktop ? (
            <ButtonGroup variant="link" spacing="8" pr={4}>
              {['Services', 'About me', 'Contact', 'Resources'].map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </ButtonGroup>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Box>
    </Flex>
  );
}
