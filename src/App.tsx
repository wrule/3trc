import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './app.module.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className={style.p}>
        <img src="./1.jpg" />
        <img src="./2.jpg" />
        <img src="./3.jpg" />
      </p>
    </div>
  );
}

export default App;
