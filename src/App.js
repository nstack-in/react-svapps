import './style.css';
import Nav from './components/nav';
import Footer from './components/footer';

import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="wrapper">
//       <Nav active="home"/>
//       <div className="content">
//         This will be my body
//       </div>
//       <Footer name="Syed Kumar"/>
//     </div>
//   );
// }

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