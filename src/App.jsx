import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Footer from './components/Footer';
import './App.css';
import './css/All.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-layout">
        <aside className="left-hero" aria-label="Profile summary">
          <Hero />
        </aside>
        <div className="right-content">
          <div className="content-inner">
            <About />
            <News />
            <Publications />
            <Experience />
            <Education />
            <Awards />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
