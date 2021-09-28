// $(function () {
//   getTime();
// });
// var getTime = function () {
//   now = new Date();
//   dday = new Date("December 20 2021 18:00:00");

//   days = (dday - now) / 1000 / 60 / 60 / 24;
//   daysRound = Math.floor(days);
//   hours = (dday - now) / 1000 / 60 / 60 - 24 * daysRound;
//   hoursRound = Math.floor(hours);
//   minutes = (dday - now) / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
//   minutesRound = Math.floor(minutes);
//   seconds =
//     (dday - now) / 1000 -
//     24 * 60 * 60 * daysRound -
//     60 * 60 * hoursRound -
//     60 * minutesRound;
//   secondsRound = Math.round(seconds);
//   secondsRound2 = Math.round(now.getMilliseconds());

//   allminutes = (dday - now) / 1000 / 60;
//   allminutesRound = Math.floor(allminutes);

//   //console.log(secondsRound2);

//   if (("" + daysRound).length == 1) {
//     daysRound = "0" + daysRound;
//   }
//   if (("" + hoursRound).length == 1) {
//     hoursRound = "0" + hoursRound;
//   }
//   if (("" + minutesRound).length == 1) {
//     minutesRound = "0" + minutesRound;
//   }
//   if (("" + secondsRound).length == 1) {
//     secondsRound = "0" + secondsRound;
//   }
//   if (("" + allminutesRound).length == 1) {
//     allminutesRound = "0" + allminutesRound;
//   }
//   document.getElementById("d_day_all").innerHTML =
//     "<span class='n1'>" +
//     daysRound +
//     "</span><span>" +
//     hoursRound +
//     "</span><span style=' padding-right:14px;'>" +
//     minutesRound +
//     "</span><span>" +
//     secondsRound +
//     "</span>";
//   document.getElementById("d_day").innerHTML = daysRound;
//   document.getElementById("dday_hour").innerHTML = hoursRound;
//   document.getElementById("dday_min").innerHTML = minutesRound;
//   document.getElementById("dday_sec").innerHTML = secondsRound;
//   document.getElementById("dday_sec2").innerHTML = secondsRound2
//     .toString()
//     .substr(0, 1);
//   document.getElementById("dday_allmin").innerHTML = allminutesRound;

//   newtime = window.setTimeout("getTime();", 1);
// };

const timerContainer = document.querySelector(".js-clock"),
  timer = timerContainer.querySelector("h3");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const gap = xmasDay - now;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24)); //일
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24); //시
  const minutes = Math.floor(((gap / 1000) * 60) % 60); //분
  const seconds = Math.floor((gap / 1000) % 60); //초

  timer.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
