import './style/App.css';

import React, { Component } from 'react';

import Image from './img';
// eslint-disable-next-line import/no-unresolved
import Logo from './logo.svg';
const componentDidMount(Image) {
  getImg();
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image/>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
