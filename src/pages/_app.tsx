'use client';

import { Providers } from '@/components/Provider';
import { useAppDispatch } from '@/redux/hooks';
import '@/styles/globals.css';
import createEmotionCache from '@/utils/createEmotionCache';
import { theme } from '@/utils/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AppCustomProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppCustomProps) {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);
  const router = useRouter();

  // const logout = () => {};

  const onIdle = () => {
    setIsIdle(true);
  };

  const onActive = () => {
    setIsIdle(false);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    timeout: 10_000,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (isIdle) {
      if (router.pathname !== '/auth/login') {
        localStorage.clear();
        router.push('/auth/login');
        MySwal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Session has expired',
          text: 'Please login again',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    }
  }, [isIdle, router]);

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
          <p>{remaining} seconds</p>
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
