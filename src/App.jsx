import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Highlights from './components/Highlights';
import Eligibility from './components/Eligibility';
import Curriculum from './components/Curriculum';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import BookCall from './components/BookCall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Highlights />
      <Eligibility />
      <Curriculum />
      <TechStack />
      <Testimonials />
      <BookCall />
      <Footer />
    </div>
  );
}

export default App;
