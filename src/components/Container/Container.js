import styles from './Container.module.scss';
import { Route, Link } from 'react-router-dom';
import {React, useState} from 'react';

function Container() {
//   const api={
// endpoint: 'https://api.openweathermap.org/data/2.5/',
// key: 'c6c6353ce9fd5175a324e66d13632e72'
// }

// const input = document.querySelector("input");
// input.addEventListener("keydown",enter);

// function enter(event){

// if(event.keyCode === 13){
//     getInfo(input.value);   
// }
// }

// async function getInfo(data){
// const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);

// const result = await res.json();
// console.log(result);
// console.log(result.main.temp);
// console.log(result.main.temp_min);
// console.log(result.main.temp_max);
// console.log(result.main.humidity);

// console.log(result.name);
// console.log(result.sys.country);

// console.log(result.weather[0].description);

// displayResult(result);
// }

// function displayResult(result){
// console.log(result);
// let city = document.querySelector("city");
// city.textContent = `${result.name}, ${result.sys.country}`;

// getOurDate();

// let temperature = document.querySelector("temperature");
// temperature.innerHTML = `${(Math.round(result.main.temp))}<span>°</span>`

// let feelsLike = document.querySelector("feelsLike");
// feelsLike.innerHTML = `${(Math.round(result.main.feels_like))}<span>°</span>`

// let conditions = document.querySelector("conditions");
// conditions.textContent = `${result.weather[0].main}`;

// let variation = document.querySelector("variation");
// variation.innerHTML = "Min: "+`${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;


// }

// function getOurDate(){
// const myDate = new Date();

// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// let day = days[myDate.getDay()];
// console.log(day);

// let todayDate = myDate.getDate();
// console.log(todayDate);

// let month = months[myDate.getMonth()];
// console.log(month);

// let year = myDate.getFullYear();
// console.log(year);

// let showDate = document.querySelector("#date");
// showDate.textContent = `${day}`+" "+`${todayDate}`+" "+`${month}`+" "+`${year}`;

//}
    
    return(
        <div className={styles.container}>
          <div className={styles.header}>
               <input type="text" className={styles.input} spellcheck="false" placeholder="Please, enter city..."/>
           </div>
           <div className={styles['when-where']}>
               <p className={styles.city}>Montreal, CA</p>
               <p className={styles.date}> Sunday 27°С  July 2022</p>
           </div>
           <div className={styles.now}>
               <p className={styles.temperature}>28 °С </p>
               <p className={styles.feelsLike}> 30 °С </p>
               <p className={styles.conditions}> Sunny</p>
               <p className={styles.variation}> Min: 25 °С  Max: 28 °С </p>
           </div>
        </div>
     );
  }
  
  export default Container;
  