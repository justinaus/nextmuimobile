import { Box } from '@mui/system';
import React from 'react';

interface Props extends React.ComponentProps<typeof Box> {}

export default function Footer({ ...rest }: Props) {
  return (
    <Box component="footer" {...rest} bgcolor="gray">
      <Box padding={4}>Footer</Box>
    </Box>
  );
}
