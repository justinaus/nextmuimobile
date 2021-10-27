import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Box padding={2}>
        <Typography variant="h6">Home</Typography>
      </Box>
    </>
  );
};

export default Home;
