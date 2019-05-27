import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import products from './components/products.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <Route
            exact
            path="/"
            render={routerProps => {
              return <Home {...routerProps} products={products} />;
            }}
          />
          <Route
            path={`/products/:id`}
            render={routerProps => {
              return <Home {...routerProps} products={products} />;
            }}
          />
          <Route path="/cart" component={Cart} />
        </Router>
      </div>
    );
  }
}

export default App;
