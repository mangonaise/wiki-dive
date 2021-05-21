import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { AppProps } from 'next/app';
import { createContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/global.scss';

export const PreviousPageContext = createContext('');
const PreviousPageProvider = PreviousPageContext.Provider;

function App({ Component, pageProps }: AppProps) {
  useAdaptiveFocusOutline();
  const previousPage = usePreviousPage();

  return (
    <div id="app">
      <Head>
        <link rel="preload" href="/fonts/Recursive_VF_1.077.woff2" as="font" crossOrigin="" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <PreviousPageProvider value={previousPage}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </PreviousPageProvider>
      <div style={{ minHeight: '50px' }} />
    </div>
  )
}

function useAdaptiveFocusOutline() {
  useEffect(() => {
    function handleMouseClick() {
      document.documentElement.style.setProperty('--outline-color', 'transparent');
    }

    function handleKeyboardInput(keyEvent: KeyboardEvent) {
      if (keyEvent.key === 'Tab') {
        document.documentElement.style.setProperty('--outline-color', 'var(--highlight-color)');
      }
    }

    document.addEventListener('mousedown', handleMouseClick);
    document.addEventListener('keydown', e => handleKeyboardInput(e));

    return () => {
      document.removeEventListener('mousedown', handleMouseClick);
      document.removeEventListener('keydown', e => handleKeyboardInput(e));
    }
  }, []);
}

function usePreviousPage() {
  const router = useRouter();
  const currentUrlRef = useRef('');
  const previousUrlRef = useRef('');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      previousUrlRef.current = currentUrlRef.current;
      currentUrlRef.current = url;
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    }
  }, []);

  return previousUrlRef.current;
}

export default App;