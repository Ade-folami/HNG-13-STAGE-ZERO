"use strict";

//Selecting Elements

const timeNow = document.querySelector(".user-time");

const updateTime = function () {
  timeNow.textContent = Date.now();
};

updateTime();
setInterval(updateTime, 1000);
