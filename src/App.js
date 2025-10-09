import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Pages
import LandingPage from './pages/landing/LandingPage';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Education from './pages/education/Education';
import Certificates from './pages/certificates/Certificates';

// Components
import Footer from './components/footer/Footer';
import SideNav from './components/sideNav/SideNav';


function App() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <>
            {!isMobile ? <SideNav /> : null}
            <LandingPage />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certificates />
            <Footer />
        </>
    );
}

export default App;
