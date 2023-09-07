import { useEffect, useState } from 'react';
import Education from './components/education/Education';
import Footer from './components/footer/Footer.jsx';
import Skills from './components/skills/Skills';

import FirstPage from './pages/FirstPage';
import ThirdPage from './pages/ThirdPage';

function App() {
  const [windowPosition, setWindowPosition] = useState(0);

  return (
    <div>
      <FirstPage />
      <Skills />
      <ThirdPage />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
