import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { ServicePricing } from './ServicePricing';
import { RiMentalHealthFill } from 'react-icons/ri';
import { IconText } from './IconText';
import { TbHealthRecognition } from 'react-icons/tb';
import { HiOutlineHeart } from 'react-icons/hi';
import { useRef } from 'react';
import { ContactForm } from './ContactForm';

export default function Main(props) {
  const learnRef = useRef(null);

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box
      as="main"
      role="contentinfo"
      maxW="7xl"
      mx="auto"
      px={{
        base: '0',
        lg: '12',
      }}
      py={{
        base: '0',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        spacing={{
          base: '0',
          lg: '20',
        }}
      >
        <Box
          width={{
            lg: 'sm',
          }}
          transform={{
            base: 'translateY(-50%)',
            lg: 'none',
          }}
          bg={{
            base: useColorModeValue('teal.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          px={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
          borderRadius={['xl', 0]}
        >
          <Stack
            spacing={{
              base: '8',
              lg: '10',
            }}
          >
            <Stack
              spacing={{
                base: '2',
                lg: '4',
              }}
            >
              <Heading
                size="xl"
                color={useColorModeValue('teal.500', 'teal.300')}
              >
                How are you feeling today?
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Psychotherapy and counselling can help when you are struggling
              </Heading>
            </Stack>
            <HStack spacing="3" onClick={() => executeScroll(learnRef)}>
              <Link
                color={useColorModeValue('teal.500', 'teal.300')}
                fontWeight="bold"
                fontSize="lg"
              >
                Learn more
              </Link>
              <Icon
                color={useColorModeValue('teal.500', 'teal.300')}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="/therapy-hands.jpg"
            alt="Therapy Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="600px"
            objectFit="cover"
            flex="1"
            borderRadius={[0, 'xl']}
          />
        </Flex>
      </Stack>

      <Center
        flexDir="column"
        as="section"
        textAlign="center"
        p={6}
        ref={learnRef}
      >
        {/* TODO: Make full width */}
        <Center
          bgColor="gray.50"
          borderRadius="2xl"
          borderBottomRadius={[0, '2xl']}
          w="100%"
          my={[0, 16]}
          py={[12, 16]}
        >
          <Heading
            px={8}
            size="xl"
            color={useColorModeValue('teal.500', 'teal.300')}
          >
            Providing Compassionate Support and Guidance
          </Heading>
        </Center>
        <Center as="article" flexDir={['column', 'row']} gap={[8, 16]}>
          <Image
            src="/support-image.jpg"
            w={['100%', '600px']}
            h="400px"
            borderRadius="xl"
            borderTopRadius={[0, 'xl']}
          />
          <Box>
            <Heading fontSize="xl" mb={2}>
              Are you feeling overwhelmed, anxious, or depressed?
            </Heading>
            <Text fontSize="lg">
              Do you struggle to cope with life's challenges? If so, you're not
              alone. Many people experience emotional difficulties at some point
              in their lives. The good news is that therapy can help you
              overcome these challenges and achieve a more fulfilling life.
            </Text>
          </Box>
        </Center>

        <Center
          mt={[16, 32]}
          as="article"
          flexDir={['column-reverse', 'row']}
          gap={[8, 16]}
          textAlign="center"
        >
          <Center flexDirection="column" gap={2}>
            <Heading fontSize="xl">Hi, I'm Linda Lunardi</Heading>
            <Text fontSize="lg">
              I'm a licensed psychotherapist. I specialize in helping
              individuals like you overcome a wide range of emotional and mental
              health issues, including anxiety, depression, trauma, and
              relationship problems.
            </Text>
            <Button variant="link" w="fit-content" mt={4} size="lg">
              Learn more
            </Button>
          </Center>
          <Image
            src="/support-image.jpg"
            w={['100%', '600px']}
            h="400px"
            borderRadius="xl"
          />
        </Center>

        <Heading
          size="xl"
          color={useColorModeValue('teal.500', 'teal.300')}
          mt={[16, 32]}
          mb={12}
        >
          My approach
        </Heading>
        <Center dir={['column', 'row']} gap={[16, 32]}>
          <IconText icon={HiOutlineHeart}>Compassionate</IconText>
          <IconText icon={RiMentalHealthFill}>Non-judgmental</IconText>
          <IconText icon={TbHealthRecognition}>Tailored to your needs</IconText>
        </Center>
        <Text fontSize="lg" my={8}>
          My approach to therapy is compassionate, non-judgmental, and tailored
          to your unique needs and goals. Whether you're seeking short-term
          support to cope with a specific issue or long-term healing and
          personal growth, I can provide the guidance and tools you need to move
          forward.
        </Text>
        <Button colorScheme="teal" size="lg">
          Schedule an appointment
        </Button>
      </Center>

      <Center as="article" flexDir="column" mt={[12, 20]}>
        <Heading
          size="xl"
          color={useColorModeValue('teal.500', 'teal.300')}
          mb={12}
        >
          Services
        </Heading>
      </Center>
      <ServicePricing />
      <Center mt={[8, 12]}>
        <ContactForm />
      </Center>
    </Box>
  );
}
