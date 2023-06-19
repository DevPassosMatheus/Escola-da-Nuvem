import React from 'react';
import logo from './logo.svg';
import {Card} from "./Card"
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <div className="flex">
        <Card nome="seu nome aqui" sobre="fala sobre você" />
     
      </div>
    </>
  );
}

export default App;
