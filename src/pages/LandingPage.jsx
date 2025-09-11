import React from 'react';

import Typewriter from '../components/typewriter/Typewriter.jsx';
import Certificates from '../components/certificates/Certificates.jsx';
import Education from '../components/education/Education.jsx';
import Experience from '../components/experience/Experience.jsx';
import Projects from '../components/projects/Projects.jsx';
import Skills from '../components/skills/Skills.jsx';

import { PageContainer } from './pageStyles.js';

export default function LandingPage() {
    return (
        <div>
            <PageContainer id="firstPage">
                <Typewriter />
            </PageContainer>
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certificates />
        </div>
    );
}
