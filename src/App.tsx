import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Menu from './components/menu';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Menu />
        <Navbar />
    </div>
  );
}

export default App;
