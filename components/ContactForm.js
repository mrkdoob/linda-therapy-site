import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';

export const ContactForm = () => {
  return (
    <Box w={['100vw', 'xl']}>
      <Heading textAlign="center" color="teal.500">
        Contact me
      </Heading>

      <form
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <Flex flexDir="column" gap={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">First name</FormLabel>
            <Input id="name" type="text" name="name" placeholder="First name" />
          </FormControl>
          {/* <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" /> */}

          <FormControl isRequired>
            <FormLabel>Email </FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email@service.com"
            />
          </FormControl>

          {/* TODO: Phone number */}

          {/* <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required /> */}

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              id="message"
              wrap="soft"
              name="message"
              placeholder="Your message here"
              h="24"
            />
          </FormControl>
          {/* <label htmlFor="feedback">What is your feedback?</label>
      <textarea id="feedback" wrap="soft" name="feedback" required></textarea> */}

          <Button type="submit" w="fit-content">
            Sent message
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
