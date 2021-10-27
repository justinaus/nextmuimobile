import '../styles/globals.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

import Layout from '../components/layout/Layout';
import createEmotionCache from '../styles/createEmotionCache';
import { theme } from '../styles/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            onError: (error, key) => {
              if (error.status !== 403 && error.status !== 404) {
                // We can send the error to Sentry,
                // or show a notification UI.
                console.log(key);
                console.error(error);
              }
            },
          }}
        >
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
