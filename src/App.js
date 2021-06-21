import './style.css';
import Nav from './components/nav';
import Footer from './components/footer';

import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Counter from './page/counter';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './page/not_found';

function App() {
  return (
    <BrowserRouter>

      {/* Nav for every page */}
      <Nav />
      {/* Nav for every page */}

      {/* Page */}
      <div className="content">
        <Switch>
          <Route path="/" exact="true" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
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