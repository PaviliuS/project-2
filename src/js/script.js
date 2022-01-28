
// document.getElementById('ob').onclick = function() {
//     document.getElementById("myNav").style.height = "100%";
// }
// document.getElementById('cb').onclick = function() {
//     document.getElementById("myNav").style.height = "0%";
// }

document.getElementById('ob').onclick = function() {
    let element = document.getElementById("overlay__navigation");
    element.classList.toggle("_hidden");
}

window.addEventListener("resize", (event) => {
    let element = document.getElementById("overlay__navigation");
    element.classList.remove("_hidden");
})

document.addEventListener('DOMContentLoaded', function () {
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      $daysLog.textContent =  $days.dataset.title;
      $hoursLog.textContent = $hours.dataset.title;
      $minutesLog.textContent = $minutes.dataset.title;
      $secondsLog.textContent = $seconds.dataset.title;
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.days__digit');
    const $hours = document.querySelector('.hours__digit');
    const $minutes = document.querySelector('.minutes__digit');
    const $seconds = document.querySelector('.seconds__digit');

    const $daysLog = document.querySelector('.days__word');
    const $hoursLog = document.querySelector('.hours__word');
    const $minutesLog = document.querySelector('.minutes__word');
    const $secondsLog = document.querySelector('.seconds__word');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
})



//===========================================//
//01_file
// console.log(120);


// //02

// let a = 42;
// let b = a;
// b++

// console.log('a',a);
// console.log('b',b);

// //03 scope

// function funcA(){
//   let a = 1;
  
//   function funcB(){

//   }
// }

// //04 hoisting
// function sum(a, b){
//   return a + b;
// }

// //function declaration
// function square(num){
//   return num ** 2;
// }

// //function expression
// let square = function(){

// }

// //05 let const


// //06 closures
// function sayHeeloTo(name){
//   const message ="hello" + name

//   return function(){
//     console.log(message)
//   }
// }

// const helloTo1 = sayHeeloTo()
