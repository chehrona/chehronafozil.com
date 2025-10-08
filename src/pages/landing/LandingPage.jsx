import React from 'react';

import Typewriter from '../../components/typewriter/Typewriter.jsx';

import { PageContainer } from './pageStyles.js';

export default function LandingPage() {
    return (
        <PageContainer id="firstPage" style={{minHeight: '100svh'}}>
            <Typewriter />
        </PageContainer>
            
    );
}
