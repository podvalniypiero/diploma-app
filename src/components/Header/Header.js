import styles from './Header.module.scss';
import { Route, Link } from 'react-router-dom';
import {React, useState} from 'react';

function Header() {
    
    return(
        
      <header>
      <div className={styles.headerTop}>
        <p>ЛЕКТОРИЙ ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
        <div className={styles.headerMain}>
        <img className={styles.logo} width={60} src='\img\logotype.svg' alt='logo'></img>
        <nav>
                 <button>О НАС</button>
                 <button>НАША КОЛЛЕКЦИЯ</button>
                 <button>РАЗДЕЛ ИНТЕРАКТИВА</button>
                 <button>ИЗБРАННОЕ</button>
        </nav>
       </div>
      </div>
       
       </header>
     );
  }
  
  export default Header;
  