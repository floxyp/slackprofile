// / declaring my array of weekdays
let weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    
];
//declaring our variable
let day = document.querySelector("[data-testid ='currentDayOfTheWeek']");
let time = document.querySelector("[data-testid ='currentUTCTime']");

// the current time

let now = new Date();
let currentDay =weekDays[now.getUTCDay()];
let currentUTCTime = now.toUTCString();

//dom manipualtion
day.textContent = currentDay;
time.textContent = currentUTCTime
