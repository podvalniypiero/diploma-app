
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';
import Container from './components/Container/Container';

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element = {
          
          <Container/>
        }/>

      </Routes>
    </div>
  );
}

export default App;
