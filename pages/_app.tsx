import { AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  useAdaptiveFocusOutline();

  return (
    <div id="app">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
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

export default App;