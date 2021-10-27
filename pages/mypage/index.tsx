import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

import ErrorBox from '../../components/common/ErrorBox';

async function getToken(
  context: GetServerSidePropsContext,
): Promise<string | null> {
  if (!context.req.headers.cookie) {
    // return await 새 토큰 요청.
    return null;
  }

  const params = new URLSearchParams(context.req.headers.cookie);

  const token: string | null = params.get('token');

  if (!token) {
    // return await 새 토큰 요청.
    return null;
  }

  return token || null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let token = await getToken(context);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // const myInfo = await get my info

  return {
    props: {
      data: {
        name: 'justinaus',
      },
    },
  };
}

interface Props {
  data: {
    name: string;
  } | null;
}

export default function MyPage({ data }: Props) {
  return (
    <>
      <Head>
        <title>MyPage</title>
        <meta name="description" content="MyPage" />
      </Head>
      <Box padding={2}>
        <Typography variant="h6" marginBottom={1}>
          MyPage
        </Typography>
        {data ? data.name : <ErrorBox />}
      </Box>
    </>
  );
}
