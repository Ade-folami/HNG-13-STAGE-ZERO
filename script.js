"use strict";

//Selecting Elements
const timeNow = document.querySelector(".user-time");
const form = document.getElementById("contact-form");
const fullName = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const subject = document.getElementById("contact-subject");
const message = document.getElementById("contact-message");
const submitBtn = document.getElementById("form-button");
const successMsg = document.getElementById("success-message");

//Show current time
const updateTime = function () {
  timeNow.textContent = Date.now();
};
updateTime();
setInterval(updateTime, 1000);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Validation rules
  if (!name) {
    document.getElementById("test-contact-error-name").textContent =
      "Full name is required.";
    valid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("test-contact-error-email").textContent =
      "Enter a valid email address.";
    valid = false;
  }

  if (!subject) {
    document.getElementById("test-contact-error-subject").textContent =
      "Subject is required.";
    valid = false;
  }

  if (!message || message.length < 10) {
    document.getElementById("test-contact-error-message").textContent =
      "Message must be at least 10 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    successMessage.style.display = "block";
    form.reset();
  } else {
    successMessage.style.display = "none";
  }
});
