import '../styles/globals.css'; // Import your global styles
import tailwindConfig from '../../tailwind.config';
import { ThemeProvider } from 'styled-components';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={tailwindConfig.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;