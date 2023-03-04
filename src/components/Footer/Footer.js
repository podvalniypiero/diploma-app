import styles from './Footer.module.scss';
import { Route, Link } from 'react-router-dom';
import {React, useState} from 'react';

function Footer() {
    
    return(
      <footer>

        <nav>
             <a><p>СВЯЗАТЬСЯ С НАМИ</p></a>
             <a><img src='\img\telega.svg' alt='telegram'></img></a>
             <a><img src='\img\vk.svg' alt='vk'></img></a>
             <p>© 2023 designed and developed by Maria Karshina</p>
       </nav>
       
       </footer>
     );
  }
  
  export default Footer;