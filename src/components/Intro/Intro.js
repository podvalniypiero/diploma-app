import styles from './Intro.module.scss';
import { Route, Link } from 'react-router-dom';
import {React, useState} from 'react';

function Intro() {
    
    return(
      <div className = {styles.container}>
        <p>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
            <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
            <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА И САМОГО СЕБЯ
        </p>
             <img src='\img\mainIntro.svg' alt='Поколения Лектория'/>
      </div>  
     );
  }
  
  export default Intro;