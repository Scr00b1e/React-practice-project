import React from 'react';
import './app.scss'
import Card from './components/Card/Card';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="app">
      <Header />

      
      <div className='content'>
        <h1 className='content__title'>All shoes</h1>
        <input type='text'/>

        <Card/>
      </div>

    </div>
  );
}

export default App;