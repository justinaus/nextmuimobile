import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface Props extends React.ComponentProps<typeof Box> {}

export default function ErrorBox({ children, ...rest }: Props) {
  return (
    <Box {...rest}>
      <Typography variant="h6" color="error">
        {children || (
          <>
            정보를 정상적으로 불러오지 못했습니다
            <br />
            잠시 후 다시 시도해주세요.
          </>
        )}
      </Typography>
    </Box>
  );
}
