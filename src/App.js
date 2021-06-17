import './style.css';
import Nav from './components/nav';
import Footer from './components/footer';

import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Counter from './page/counter';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      {/* Nav for every page */}
      <Nav />
      {/* Nav for every page */}

      {/* Page */}
      <div className="content">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      {/* Page */}

      {/* Footer for every page */}
      <Footer />
      {/* Footer for every page */}

    </BrowserRouter>
  );
}

export default App;