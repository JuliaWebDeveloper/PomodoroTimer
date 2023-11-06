//Определяем все константы
const workUser = document.querySelector("#work");
const restUser = document.querySelector("#rest");
const startUser = document.querySelector("#start");
const pauseUser = document.querySelector("#pause");
const resetUser = document.querySelector("#reset");
const timerUser = document.querySelector("#timer");

//Определяем объект, отражающий время работы и отдыха
function Countdown (minutes, seconds) {
    this.minutes=minutes;
    this.seconds=seconds;
    }
let workTime = new Countdown("25","00");
let restTime = new Countdown("5","00");

//Переменная общего кол-ва времени 
let i;

//Переменная для остановки таймера
let timerId;

//Функция остановки таймера
function stopTimer() {
    clearTimeout(timerId);
} 
  
//Если нажимаем на работу, появляется время и ячейка подсвечивается серым, отдых - белая
workUser.addEventListener("click", showWorkTime);

function showWorkTime() {
    workUser.style.background="#6ebdfb";
    workUser.style.color="white";
    restUser.style.background="white";
    restUser.style.color="#6ebdfb";
    
    timerUser.textContent= `${workTime.minutes}:${workTime.seconds}`; //Отражение значения таймера
    i =  Number(`${workTime.minutes}`)*60 +Number(`${workTime.seconds}`); //Общее кол-во секунд работы
    //При перезапуске таймера время возвращается к исходному значению и останавливается таймер
    resetUser.addEventListener("click", function() {
        stopTimer();
        i =  Number(`${workTime.minutes}`)*60 +Number(`${workTime.seconds}`);
        return timerUser.textContent= `${workTime.minutes}:${workTime.seconds}`;
    })
    stopTimer();
}  

//Если нажимаем отдых, появляется время и ячейка подсвечивается серым, работа - белая
restUser.addEventListener("click", showRestTime);

function showRestTime() {
    workUser.style.background="white";
    workUser.style.color="#6ebdfb";
    restUser.style.background="#6ebdfb";
    restUser.style.color="white";
    
    timerUser.textContent= `${restTime.minutes}:${restTime.seconds}`; //Отражение значения таймера
    i =  Number(`${restTime.minutes}`)*60 +Number(`${restTime.seconds}`); //Общее кол-во секунд отдыха
    //При перезапуске таймера время возвращается к исходному значению и останавливается таймер
    resetUser.addEventListener("click", function() {
        stopTimer();
        i =  Number(`${restTime.minutes}`)*60 +Number(`${restTime.seconds}`);
        return timerUser.textContent= `${restTime.minutes}:${restTime.seconds}`;
    })
    stopTimer();
}  

//Запуск таймера
startUser.addEventListener("click", calculateTime);
function calculateTime() {
    
    timerId = setTimeout(calculateTime, 1000);
    let minutes = Math.floor(i/60); //перевод в минуты
    let seconds = i%60; //остаток секунд
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timerUser.textContent = `${minutes}:${seconds}`;
    i--;
    if (i < 0) {
        stopTimer();
        i = 0;
    }    
    //Пауза
    pauseUser.addEventListener("click", function() {
        stopTimer();
    })
    
}
