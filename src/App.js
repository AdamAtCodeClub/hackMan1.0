import './App.css';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      {/* black line */}
      <About />
      <FAQ />
    </div>
  );
}

export default App;
