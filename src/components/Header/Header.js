import styles from './Header.module.scss';
import { Route, Link } from 'react-router-dom';
import {React, useState} from 'react';

function Header(){
    
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

    return(
        
      <header>
      <div className={styles.headerTop}>
      <p>ЛЕКТОРИЙ ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
      </div>

       <div className={styles.headerMain}>
        <img className={styles.logo} width={60} src='\img\logo.jpg' alt='logo'></img>
        <button className={styles.btn}>НАША КОЛЛЕКЦИЯ</button>

        {/* <img className='burger' width={50} src='\img\burger.jpg' alt='menuBurger'></img> */}
        <nav>
                <div className={styles[`burger-menu`]} onClick={updateMenu}>
                    <div className={styles.burger_class} ></div>
                    <div className={styles.burger_class} ></div>
                    <div className={styles.burger_class} ></div>
                </div>
            </nav>

            <div className={styles.menu_class}>ИЗБРАННОЕ</div>
       
       </div>
       </header>
     )
  }
  
  export default Header;
  