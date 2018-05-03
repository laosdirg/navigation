import React, { Component } from 'react';
import logo from './logo.svg';
import History from '@laosdirg/navigation-core';
import { Navigation, Link } from '@laosdirg/navigation-react';
import './App.css';

const history = new History();

history.listen((location) => {
  console.log(location);
});

let NUMBER = 1;

const changeLocation = (event) => {
  event.preventDefault();
  const location = '/loc'+(NUMBER++)+'?search=true#clientshit';
  history.push(location, { n: NUMBER-1 });
}

class App extends Component {
  render() {
    return (
      <Navigation history={history}>
        {location => (
          <div className="App">{location.pathname}
            <Link href='/x'>test</Link>
            <Link href='/y'>tset</Link>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        )}
      </Navigation>
    );
  }
}

export default App;
