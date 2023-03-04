
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element = {
          <>
          <Header/>
          <Footer/>
          </>
          
        }/>

      </Routes>
    </div>
  );
}

export default App;
