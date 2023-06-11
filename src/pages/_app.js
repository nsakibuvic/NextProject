import '../styles/globals.css'; // Import your global styles
import {cache} from '@emotion/css'
import { CacheProvider } from '@emotion/react';
import GlobalStyles from '@/components/utils/CreateGlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;