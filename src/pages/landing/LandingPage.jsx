import React from 'react';

import Typewriter from '../../components/typewriter/Typewriter.jsx';

import { PageContainer } from './pageStyles.js';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../components/logo/Logo.jsx';

export default function LandingPage() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <PageContainer id="firstPage" style={{ minHeight: isMobile ? '90svh' : '100svh' }}>
            <a href={'#firstPage'}>
                <Logo />
            </a>
            <Typewriter />
        </PageContainer>
            
    );
}
