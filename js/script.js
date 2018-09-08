"use strict"
/*
JavaScript code for the Team Treehouse Unit 3 Test
*/

// GLOABLE VARIABLES
const name = document.querySelector("#name");
const errorName = document.querySelector(".error-name");
const email = document.querySelector("#mail");
const errorEmail = document.querySelector(".error-email");
const jobRole = document.querySelector(".job-other");
const otherJob = document.querySelector("#other-title");
const btn = document.querySelector("button");



//  NAME INPUT 
window.addEventListener("load", function(event) {
  name.focus();
  otherJob.style.display = "none";
})
name.onblur = function() {
  if (name.value == "") {
    // show the error
    this.classList.add("invalid");
    errorName.innerHTML = "Please enter your name.";
  }
}
name.onfocus = function() {
  if(this.classList.contains("invalid")) {
    // remove the "errorName" indication, because the user wants to re-enter something
    this.classList.remove("invalid");
    errorName.innerHTML = "";
  }
}

// EMAIL INPUT
email.onblur = function() {
  if (!email.value.includes("@")) {
    // show the error
    this.classList.add("invalid");
    errorEmail.innerHTML = "Please enter a correct email.";
  }
};
email.onfocus = function() {
  if(this.classList.contains("invalid")) {
    // remove the "errorEmail" indication, because the user wants to re-enter something
    this.classList.remove("invalid");
    errorEmail.innerHTML = "";
  }
};
email.addEventListener("keyup", function(event) {
  if (!email.value.includes("@")) {
    // show the error
    this.classList.add("invalid");
    errorEmail.innerHTML = "Please enter a correct email.";
  } else {
    this.classList.remove("invalid");
    errorEmail.innerHTML = "";
  }
})

// JOB ROLE
const jobOther = addEventListener("change", function(event) {
  if(event.target.value == "other"){
    // Display #other-title
    otherJob.style.display = "block";
  }
})

// T-SHIRT  
/* For extra credit. Hide the "color" label and select menu until a T-Shirt design is selected from the "Design" menu. */

// REGISTER FOR ACTIVITIES

// PAYMENT INFO
/* For extra credit. If trhe field isn't empty for the credit card number but contains only 10 numbers, the error message reads "Please enter a number that is between 13 and 16 digits long." */

// FORM VALIDATION ON BUTTON SUBMIT













