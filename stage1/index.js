let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
let currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let currentTime = document.querySelector('[data-testid="currentUTCTime"]')


let date = new Date();
let currentDayOfTheWeek = weekdays[date.getDay()];

let UTCmilliseconds = date.getTime();
let formattedUTC = UTCmilliseconds.toLocaleString()

currentDay.innerHTML = currentDayOfTheWeek;
currentTime.innerHTML = formattedUTC