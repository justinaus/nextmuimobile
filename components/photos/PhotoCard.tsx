import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import React from 'react';

import { IPhoto } from '../../interfaces/photo.interface';

interface Props {
  data: IPhoto;
}

export default function PhotoCard({ data }: Props) {
  return (
    <Link href={`/photos/${data.id}`}>
      <a>
        <Card
          sx={{
            width: '100%',
          }}
        >
          <CardMedia
            component="img"
            image={data.thumbnailUrl}
            // image="https://asia.olympus-imaging.com/content/000107506.jpg"
            title={data.title}
            sx={{
              height: '150px',
              backgroundColor: grey[100],
            }}
            // loading="lazy"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" noWrap>
              {data.title}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
