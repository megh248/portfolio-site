import React, {useRef} from 'react';
import './styles/app.scss';
import { Header } from "./components/Header/Header";
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app-container">
        <Header />
        <div ref={homeRef}><HomePage/></div>
        <div ref={aboutRef}><AboutPage/></div>
    </div>
  );
}

export default App;
