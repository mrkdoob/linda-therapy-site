import { Box, Button, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { RiMentalHealthFill, RiHomeHeartLine } from 'react-icons/ri';
import { BsChatHeart } from 'react-icons/bs';

// import { ActionButton } from './ActionButton';
import { PricingCard } from './PricingCard';

export const ServicePricing = () => (
  <Box
    as="section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    borderRadius="xl"
    py="14"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <SimpleGrid
      columns={{
        base: 1,
        lg: 3,
      }}
      spacing={{
        base: '8',
        lg: '0',
      }}
      maxW="7xl"
      mx="auto"
      justifyItems="center"
      alignItems="center"
    >
      <PricingCard
        data={{
          price: '€49',
          name: 'Online therapy',
          features: [
            'Convenience',
            'Flexibility',
            'Accessibility',
            'Increased Anonymity',
          ],
        }}
        icon={RiHomeHeartLine}
        button={
          <Button variant="outline" borderWidth="2px">
            Learn more
          </Button>
        }
      />
      <PricingCard
        zIndex={1}
        isPopular
        transform={{
          lg: 'scale(1.05)',
        }}
        data={{
          price: '€69',
          name: 'Psychotherapy',
          features: [
            'Confidentiality',
            'Personalized Approach',
            'Evidence-Based Techniques',
            'Non-Judgmental Environment',
            'Collaborative Relationship',
          ],
        }}
        icon={RiMentalHealthFill}
        button={<Button>Learn more</Button>}
      />
      <PricingCard
        data={{
          price: '€59',
          name: 'Counseling',
          features: [
            'Empathy and Support',
            'Goal-Oriented Approach',
            'Skill Building',
            'Solution-Focused',
            'Education and Resources',
          ],
        }}
        icon={BsChatHeart}
        button={
          <Button variant="outline" borderWidth="2px">
            Learn more
          </Button>
        }
      />
    </SimpleGrid>
  </Box>
);
