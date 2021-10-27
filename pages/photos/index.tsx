import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

import PhotoList from '../../components/photos/PhotoList';
import { IPhotos } from '../../interfaces/photo.interface';
import http from '../../utils/http';

async function getData() {
  try {
    const response = await http.get('/photos?_start=0&_limit=100');

    // data mapping.

    return response?.data;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let datas = await getData();

  return {
    props: {
      datas: datas,
    },
  };
}

interface Props {
  datas: IPhotos[] | null;
}

export default function Photos({ datas }: Props) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Photos</title>
        <meta name="description" content="Photos" />
      </Head>
      <Box padding={2}>
        {datas ? (
          <PhotoList datas={datas} />
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
