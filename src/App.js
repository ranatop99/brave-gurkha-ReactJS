import HeroPage from './components/HeroPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './index.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroPage />
      <Footer />
    </div>
  );
}

export default App;
