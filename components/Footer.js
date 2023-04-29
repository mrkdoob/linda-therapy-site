import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      w={['100vw', '7xl']}
      mx="auto"
      px={{
        base: '0',
        lg: '12',
      }}
    >
      <Flex justify="space-between" align="center">
        <Image
          src="/linda-lunardi-logo.png"
          alt="Linda Lunardi"
          h="80px"
          w="270px"
        />
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Text>Create beautiful websites remarkably fast.</Text>
        </Stack>
      </Flex>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Linda Lunardi Therapy. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
