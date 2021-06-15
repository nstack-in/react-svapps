import './style.css';
import Nav from './components/nav';
import Footer from './components/footer';
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Nav active="home"/>
      <div className="content">
        This will be my body
      </div>
      <Footer name="Syed Kumar"/>
    </div>
  );
}

export default App;