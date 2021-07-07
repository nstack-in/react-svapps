import './style.css';
import React from 'react';
import { Nav, Footer } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, About, Contact, Counter, NotFound, Todo, Covid, Employee } from './page';


function App() {
  return (
    <BrowserRouter>
      <Nav />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;