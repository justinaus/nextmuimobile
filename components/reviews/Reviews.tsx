import { Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';

import { wait } from '../../utils/utils';
import ErrorBox from '../common/ErrorBox';

interface Data {
  title: string;
  url: string;
}

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    await wait(3000);

    return res.json();
  });

export default function Reviews() {
  const { data, error } = useSWR<Data>(
    'https://jsonplaceholder.typicode.com/photos/9',
    fetcher,
  );

  if (error) {
    return <ErrorBox>후기 정보를 정상적으로 불러오지 못했습니다</ErrorBox>;
  }

  if (!data) {
    return (
      <>
        <Skeleton variant="text" width="60%" sx={{ marginBottom: 0.5 }} />
        <Skeleton variant="rectangular" height={100} />
      </>
    );
  }

  return (
    <Box>
      <Typography variant="h6" marginBottom={1}>
        {data.title}
      </Typography>
      <Box width="100%">
        <Image
          src={data.url}
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </Box>
    </Box>
  );
}
