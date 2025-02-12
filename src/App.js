import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Training from './components/Training/Training';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Training />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
