import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Training from './components/Training/Training';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Training />
    </div>
  );
}

export default App;
