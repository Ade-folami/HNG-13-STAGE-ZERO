"use strict";
//Selecting Elements
const timeNow = document.querySelector(".user-time");
const fullName = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const subject = document.getElementById("contact-subject");
const message = document.getElementById("contact-message");
const submitBtn = document.getElementById("form-button");
//Show current time
const updateTime = function() {
    timeNow.textContent = Date.now();
};
updateTime();
setInterval(updateTime, 1000);
//Submit button functionality
submitBtn.addEventListener("click", function() {
    document.getElementById("testing-par").innerHTML = Date.now();
});

//# sourceMappingURL=Stage 0 Task.672d4772.js.map
