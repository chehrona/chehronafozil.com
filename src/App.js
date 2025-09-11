import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Components
import Footer from './components/footer/Footer';
import SideNav from './components/sideNav/SideNav';
import Logo from './components/logo/Logo';

function App() {
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <>
            {!isMobile ? <SideNav /> : null}
            <a href={'#firstPage'}>
                <Logo />
            </a>
            <ServerRoutes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
            </ServerRoutes>
            <Footer />
        </>
    );
}

export default App;
