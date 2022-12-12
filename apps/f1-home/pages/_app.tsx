import React from 'react';
import { AppProps } from 'next/app';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="app">
      <Component {...pageProps} />
    </main>
  );
};

export default CustomApp;
