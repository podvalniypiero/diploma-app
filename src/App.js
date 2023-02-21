import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';

function App() {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);


  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div className="App">

      <header>
      <div className='headerTop'>
      <p>ЛЕКТОРИЙ ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
      </div>

       <div className='headerMain'>
        <img className='logo' width={60} src='\img\logo.jpg' alt='logo'></img>
        <button>НАША КОЛЛЕКЦИЯ</button>

        {/* <img className='burger' width={50} src='\img\burger.jpg' alt='menuBurger'></img> */}
        <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>ИЗБРАННОЕ</div>
       
       </div>
       </header>
    </div>
  );
}

export default App;
