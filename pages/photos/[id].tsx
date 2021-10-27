import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React, { useMemo } from 'react';

import { IPhoto } from '../../interfaces/photo.interface';
import http from '../../utils/http';

async function getData(photoId: string) {
  try {
    const response = await http.get(`/photos/${photoId}`);

    // data mapping.

    return response?.data;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let data;

  if (context.params?.id) {
    data = await getData(String(context.params.id));
  }

  return {
    props: {
      data: data || null,
    },
  };
}

interface Props {
  data: IPhoto | null;
}

export default function Photo({ data }: Props) {
  const title = useMemo(() => {
    return data?.title || 'Photo';
  }, [data?.title]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <Box padding={2}>
        {data ? (
          <>
            <Typography variant="h6" marginBottom={1}>
              {title}
            </Typography>
            {/* <Reviews /> */}
          </>
        ) : (
          <>
            정보를 정상적으로 불러오지 못했습니다.
            <br />
            잠시 후 다시 시도해주세요.
          </>
        )}
      </Box>
    </>
  );
}
