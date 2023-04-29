import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Footer from '@components/Footer';
import Main from '@components/Main';
import Navbar from '@components/Navbar';
import FeedbackForm from '@components/ContactForm';
import JokeBlock from '@components/JokeBlock';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Linda Lunardi Psychotherapy and counselling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" flex="1">
        <Navbar />
        <Main />
        {/* <JokeBlock />
        <FeedbackForm /> */}
        <Footer />
      </Flex>
    </div>
  );
}
