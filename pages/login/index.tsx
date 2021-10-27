import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import React from 'react';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <Box padding={2}>
        <Typography variant="h6">Login</Typography>
      </Box>
    </>
  );
}
