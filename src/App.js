import React from 'react';
import Header from './components/Header'
import Masthead from './components/Masthead'
import Features from './components/Features'
import Works from './components/Works'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
    <Header />
    <main>
      <Masthead />
      <Features />
      <Works />
      <Team /> 
      <Testimonials />
      <Download />
    </main>
    <Footer />
    </>

  );
}

export default App;
