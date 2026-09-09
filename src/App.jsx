import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Publications from './components/Publications';
import Internship from './components/Internship';
import Education from './components/Education';
import SelectedAwards from './components/SelectedAwards';
import './App.css';
import './css/All.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <div className="left-hero">
          <Hero />
        </div>
        <div className="right-content">
          <div style={{ margin: '2rem' }}>
            <About />
            <News />
            <Publications />
            <Internship />
            <Education />
            <SelectedAwards />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
