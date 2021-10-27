import { Box } from '@mui/system';
import React from 'react';
import LazyLoad from 'react-lazyload';

import { IPhoto } from '../../interfaces/photo.interface';
import PhotoCard from './PhotoCard';
interface Props extends React.ComponentProps<typeof Box> {
  datas: IPhoto[];
}

export default function PhotoList({ datas, ...rest }: Props) {
  return (
    <Box component="ul" width="100%" {...rest}>
      {datas.map((item) => (
        <Box
          key={item.id}
          component="li"
          width="50%"
          display="inline-list-item"
          padding={1}
        >
          <LazyLoad height={200} once style={{ width: '100%' }}>
            <PhotoCard data={item} />
          </LazyLoad>
        </Box>
      ))}
    </Box>
  );
}
