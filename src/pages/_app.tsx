import { Providers } from '@/components/Provider';
import '@/styles/globals.css';
import createEmotionCache from '@/utils/createEmotionCache';
import { theme } from '@/utils/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

interface AppCustomProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppCustomProps) {
  return (
    <>
      <Head>
        <title>Frugalize</title>
        <meta
          name="description"
          content="Manage your expenses in a frugal way"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
