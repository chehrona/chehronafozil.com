import React from 'react';

import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer.jsx';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import FirstPage from './pages/FirstPage';

function App() {
    return (
        <div>
            <FirstPage />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Footer />
        </div>
    );
}

export default App;
