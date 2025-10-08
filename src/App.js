import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Pages
import LandingPage from './pages/LandingPage';

// Components
import Footer from './components/footer/Footer';
import SideNav from './components/sideNav/SideNav';
import Logo from './components/logo/Logo';

function App() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <>
            {!isMobile ? <SideNav /> : null}
            <a href={'#firstPage'}>
                <Logo />
            </a>
            <LandingPage />
            <Footer />
        </>
    );
}

export default App;
