import logo from './logo.svg';
import React from "react";
import './App.css';
import Banner from './components/Banner'
import About from './components/About'
import Contact from './components/Contact'
import Nav from  './components/Nav'
import Prices from  './components/Prices'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Services />
      <Prices />
      <About />
      <Contact />
    </div>
  );
}

export default App;
