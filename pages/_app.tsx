import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider:any): Web3Provider {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}