import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import BottomNav from './BottomNav';
import Footer from './Footer';
import Header from './Header';
import MenuDrawer from './MenuDrawer';

type Props = React.PropsWithChildren<React.ReactNode> & {};

export default function Layout({ children }: Props) {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          maxWidth: '420px',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box component="main" paddingTop={7} flex={1}>
          {children}
        </Box>
        <Footer paddingBottom={7} />
        <BottomNav />
      </Stack>
      <MenuDrawer />
    </>
  );
}
