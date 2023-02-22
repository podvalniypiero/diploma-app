
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';
import Header from './components/Header/Header';

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element = {
          
          <Header/>
        }/>

      </Routes>
    </div>
  );
}

export default App;
