import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
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
      <Component {...pageProps} />
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
        document.documentElement.style.setProperty('--outline-color', 'inherit');
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