const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
const deadlineDiv = document.querySelector('.deadline');

let tempDate = new Date();
let tempYeaer = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYeaer, tempMonth, tempDay + 10, 23, 59, 59);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minute}`;


// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();

  return futureTime - today;

}

function setTimeText() {

  let remainingTime = getRemainingTime();

  if (remainingTime < 0) {
    deadlineDiv.innerHTML = `<h4 class="expired">The giveaway has expired!</p>`;
    clearInterval(countdown);
  } else {
    // 1s = 1000ms
    // 1m = 60s
    // 1hour = 60min
    // 1d = 24hour
    const oneSec = 1000;
    const oneMin = 60 * oneSec;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;

    const remainingDay = Math.floor(remainingTime / oneDay);
    const dayRemainder = remainingTime % oneDay;

    const remainingHour = Math.floor(dayRemainder / oneHour);
    const hourRemainder = dayRemainder % oneHour;

    const remainingMinute = Math.floor(hourRemainder / oneMin);
    const minuteRemainder = hourRemainder % oneMin;

    const remainingSec = Math.floor(minuteRemainder / oneSec);

    items.forEach(item => {
      switch(item.className) {
        case 'days':
          item.textContent = remainingDay;
          break;
        case 'hours':
          item.textContent = remainingHour;
          break;
        case 'minutes':
          item.textContent = remainingMinute;
          break;
        case 'seconds':
          item.textContent = remainingSec;
          break;
      }
    });
  }
  
}

let countdown = setInterval(setTimeText, 1000);
// start immediately
setTimeText();
