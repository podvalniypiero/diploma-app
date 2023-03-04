
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {React, useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import styles from './components/Intro/Intro.module.scss'


function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element = {
          <>
          <Header/>
          <div className = {styles.container}>
            <div className={styles.paddingContainer}>
            <p>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
              <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
              <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА И САМОГО СЕБЯ
            </p>
            <img src='\img\mainIntro.svg' alt='Поколения Лектория' width={350}/>
          </div> 
          <div className={styles.aboutContainer}>
              <div className={styles.paddingAbout}>
                <div className={styles.logo}>
                <p>ЛЕКТОРИЙ</p>
                <p>ЛЮБИМЫЙ</p>
                <p>ЛИТЕРАТУРНЫЙ</p>
                </div>
              
              
              <div className={styles.aboutPhoto}>
                  <img src='\img\main1.jpg' alt='Поколения Лектория' width={350}/>
                  <p>В НАЧАЛЕ БЫЛО СЛОВО...</p>
                  <p>ЛЕКТОРИЙ ОБЪЕДИНЯЕТ ПОЭЗИЮ И ПРОЗУ
                    <br/>КАК ЖИЗНЬ ОБЪЕДИНЯЕТ В СЕБЕ КОМЕДИЮ И ДРАМУ</p>
              </div>
              
              
              <div className={styles.slider}>
                <img src='\img\slider\backArrow.svg' alt='Назад'/>
                <img src='\img\slider\slide.jpg' alt='Литературный слайдер. Маяковский.' width={400}/>
                <img src='\img\slider\nextArrow.svg' alt='Вперед'/>
              </div>

              <div className={styles.aboutPhoto}>
                <p>ЛИТЕРАТУРА — ЭТО ШЕПОТ ИСТОРИИ
                  <br/>ЛИТЕРАТУРА — ЭТО ГОЛОС ПОКОЛЕНИЙ
                  <br/>ЛИТЕРАТУРА — ЭТО МУЗЫКА ВРЕМЕНИ
                  <br/><br/>ЛИТЕРАТУРА ОБЪЕДИНЯЕТ
                  <br/>ЛЕКТОРИЙ ПОМОГАЕТ
                </p>
                <img src='\img\main2.jpg' alt='Помощь' width={330}/>
                <div className={styles.aboutBenefits}>
                  <h3>ПОЧЕМУ ЛЕКТОРИУМ?</h3>
                </div>
              </div>
              
             </div>
            </div>
            </div>
             
             
          

          </>
          
        }/>

      </Routes>
    </div>
  );
}

export default App;
