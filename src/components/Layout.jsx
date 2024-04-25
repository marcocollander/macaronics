import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import DemoBanner from './DemoBanner';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Great tasting home-made macaroons</title>
            </Head>
            <header className='header'>
                <NavBar />
                <DemoBanner />
            </header>
            <div className='layout'>
                <main className='main-container'>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Layout;
