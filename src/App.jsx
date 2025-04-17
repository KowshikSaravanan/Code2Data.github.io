import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;