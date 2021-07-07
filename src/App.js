import './style.css';
// import Nav from './components/nav';
// import Footer from './components/footer';
import { Nav, Footer } from './components';

// import Home from './page/home';
// import About from './page/about';
// import Contact from './page/contact';
// import Counter from './page/counter';
// import NotFound from './page/not_found';
// import Todo from './page/todo';
// import Covid from './page/covid';
// import Employee from './page/employee';
import { Home, About, Contact, Counter, NotFound, Todo, Covid, Employee } from './page';

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
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
          <Route path="/covid" component={Covid} />
          <Route path="/employee" component={Employee} />
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