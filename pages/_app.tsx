import type { AppProps } from 'next/app';
import React from 'react';
import { Particles } from '../src/Components/Particles';
import { Navigation } from '../src/Components/Navbar';
import { Footer } from '../src/Components/Footer';
import '../src/Assets/Styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <div className="App">
            <Particles />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
