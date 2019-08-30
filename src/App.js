import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolios from './components/Portfolios';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolios />
      <Works />
      <Contact />
      <Footer />
      <Copyright />

    </div>
  );
}

export default App;