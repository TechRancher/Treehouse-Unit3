"use strict"
/*
JavaScript code for the Team Treehouse Unit 3 Test
*/

// GLOABLE VARIABLES
const form = document.forms[0];
const name = document.querySelector("#name");
const errorName = document.querySelector(".error-name");
const email = document.querySelector("#mail");
const errorEmail = document.querySelector(".error-email");
const otherJob = document.querySelector("#other-title");
const btn = document.querySelector("button");
const colorColumn = document.querySelector("#colors-js-puns");
const errorDesign = document.querySelector(".error-shirt");
const tShirtDesign = document.querySelector("#design");
const register = document.querySelector(".activities");
const errorActivity = document.querySelector(".error-activities");
let listTotal = document.querySelector(".act-total");
const errorPay = document.querySelector(".error-payment");
const pay = document.querySelector("#pay");
const payment = document.querySelectorAll("#payment");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitCoin = document.querySelector("#bitcoin");
const ccText = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");


// General functions
// add on required attribute
const requiredOn = element => {
  element.required = true;
};
// removes the required attribute
const requiredOff = element => {
  element.required = false;
};
// used to hid the items
const hide = element => {
  element.style.display = "none";
};
// used to show the items
const show = element => {
  element.style.display = "block";
};


// WINDOW LOAD
window.onload = function(event) {
  name.focus(); // This sets the focus on the name input on page load.
  hide(otherJob); // This hides the other Job option on page load.
  hide(colorColumn); // Extra credit to hide color on page load.
  hide(creditCard); // Hide the credit-card information on page load.
  hide(payPal); // Hide the paypal information on page load.
  hide(bitCoin); // Hide the bitcoin information on page load.
  // form.noValidate = true; // turns off default validation messages
};

// NAME INPUT
// NAME VALIDATION
name.addEventListener("blur", function() {
  let alphaExp = /^[a-zA-Z]+$/;
  if (name.value.match(alphaExp)) {
    errorName.textContent = "";
    return true;
  } else {
    errorName.textContent = `Please enter your name`;  //this segment displays the validation rule for name
    //alert(alertMsg);
    name.focus();
    return false;
  }
});

// EMAIL INPUT

email.addEventListener("keyup", function(event) {
  if (!email.value.includes("@")) {
    // show the error
    this.classList.add("invalid");
    errorEmail.innerHTML = "Please enter a correct email.";
  } else {
    this.classList.remove("invalid");
    errorEmail.innerHTML = "";
  }
});

// JOB ROLE
const jobRoleOther = addEventListener("change", function(event) {
  if(event.target.value == "other"){
    // add class
    event.target.classList.add("other");
    // Display #other-title
    show(otherJob);
  } else if(event.target.classList.contains("other")) {
    hide(otherJob);
  }
});

// T-SHIRT  
/* For extra credit. Hide the "color" label and select menu until a T-Shirt design is selected from the "Design" menu. */
tShirtDesign.addEventListener("change", function(even) {
  if(event.target.value == "js puns" || event.target.value == "heart js") {
    show(colorColumn);
  }
  // This function is used to Display different options based off the user's selection
  (function() {
    const jsDesign = {
      "js puns": ["Cornflower Blue", "Dark Slate Grey", "Gold"],
      "heart js": ["Tomato", "Steel Blue", "Dim Grey"]
    }; // This is setting up the new display for the different dropDown options depending on the selected
    let jsPun_Theme = document.querySelector("#design"); // This grabs the Design dropDown
    let colors_Theme = document.querySelector("#color"); // This grabs the Color for the Design dropDown
    jsPun_Theme.onchange = function() {
      // clear out colors_Theme
      colors_Theme.length = 0;
      // get the selected value from jsDesign
      let _val = this.options[this.selectedIndex].value;
      // loop through jsDesign at the selected value
      for(let i in jsDesign[_val]) {
        // create option tag
        let op = document.createElement("option");
        // set its value
        op.value = jsDesign[_val][i];
        // set the display label
        op.text = jsDesign[_val][i];
        // append it to colors_Theme
        colors_Theme.appendChild(op);
      }
      if (event.target.value == "Select Theme") {
        hide(colorColumn);
        this.classList.add("invalid");
        errorDesign.innerHTML = "Please chose a T-Shirt Design Theme like JS Puns or I &#9829; JS.";
      } else if (this.classList.contains("invalid")) {
        // remove the "errorDesign" indication, because the user wants to re-enter something
        this.classList.remove("invalid");
        errorDesign.innerHTML = "";
      }
    };
    // fire this to update colors_Theme on load
    jsPun_Theme.onchange();
  })();
});


// REGISTER FOR ACTIVITIES

register.addEventListener("change", function(event) {
  // set the starting total
  let total = 0;
  // calling all the different document.querys
  let all = document.querySelector("#all");
  let frameworks = document.querySelector("#frameworks");
  let frame = document.querySelector("#frame");
  let express = document.querySelector("#express");
  let libs = document.querySelector("#libs");
  let lib = document.querySelector("#lib");
  let node = document.querySelector("#node");
  let exp = document.querySelector("#exp");
  let no = document.querySelector("#no");
  // looping through the checkboxes
  for(let i=0; i<form.length; i++) {
    if (form[i].checked ) {
      // adding the activities price
      total += 100;
    } 
  }
  // setting the price for the main conference
  if (all.checked) {
    total += 100;
  }
  // disable the over lap time frames if Frameworks was checked.
  if(frameworks.checked) {
    express.disabled = true;
    exp.classList.add("disabled");
    // Subtract the amount of Express Workshop if it was checked before. 
    if(express.checked) {
      total -= 100;
    }
  } else {
    // if the Frameworks was unchecked reset the checkbox.
    express.disabled = false;
    exp.classList.remove("disabled");
  }
  // disable the over lap time frame if Libraries Workshop was checked.
  if(libs.checked) {
    node.disabled = true;
    no.classList.add("disabled");
    // Subtract the amount of Node.js Workshop if it was checked before. 
    if(node.checked) {
      total -= 100;
    }
  } else {
    // if the Libraries Workshop unchecked reset the checkbox.
    node.disabled = false;
    no.classList.remove("disabled");
  }
  // disable the over lap time frame if Express Workshop was checked.
  if(express.checked) {
    frameworks.disabled = true;
    frame.classList.add("disabled");
    if(frameworks.checked) {
      // Subtract the amount of Frameworks Workshop if it was checked before.
      total -= 100;
    }
  } else {
    // if the Express Workshop unchecked reset the checkbox.
    frameworks.disabled = false;
    frame.classList.remove("disabled");
  }
  // disable the over lap time frame if Node.js Workshop was checked.
  if(node.checked) {
    libs.disabled = true;
    lib.classList.add("disabled");
    if(libs.checked) {
      // Subtract the amount of Libraries Workshop if it was checked before.
      total -= 100;
    }
  } else {
    // if the Node.js Workshop unchecked reset the checkbox.
    libs.disabled = false;
    lib.classList.remove("disabled");
  }
  if(total == 0) {
    // hide total if it = 0
    hide(listTotal);
  } else {
    // display total if it > 0
    show(listTotal);
  }
  // Display the running total for the activities
  listTotal.textContent = `Total for the Activities is $ ${total}`;
  
});


// PAYMENT INFO
pay.addEventListener("change", function(event){
  if(event.target.value == "select_method") {
    // if Select Payment Method is selected display error
    errorPay.innerHTML = `Please select a form of payment.`;
  } else {
    // if Select Payment Method is not selected hide error message
    errorPay.innerHTML = "";
  }
  if(event.target.value == "credit card") {
    // if Credit Card Payment is selected display creditCard details
    creditCard.style.display = "block";
    ccText.focus();
  } else {
    // if Credit Card Payment is not selected hide creditCard details
    creditCard.style.display = "none";
  }
  if(event.target.value == "paypal") {
    // if PayPal Payment is selected display payPa info
    payPal.style.display = "block";
  } else {
    // if PayPal Payment is not selected hide payPal info
    payPal.style.display = "none";
  }
  if(event.target.value == "bitcoin") {
    // if BitCoin Payment is selected display bitCoin info
    bitCoin.style.display = "block";
  } else {
    // if BitCoin Payment is not selected hide bitCoin info
    bitCoin.style.display = "none";
  }
});

/* For extra credit. If trhe field isn't empty for the credit card number but contains only 10 numbers, the error message reads "Please enter a number that is between 13 and 16 digits long." */
ccText.addEventListener("keydown", function (event) {
  // called eventListener with keydown to run through input ccText.value 
  let isNum = event.target.value.match(/^\d+$/); // looking to see if anything other than numbers is being entered into textbox
  if (!isNum) {
    // displaying error if anything other than numbers are entered into textbox
    errorPay.innerHTML = `Please enter numbers only.`;
  } else if (this.value.length < 12 || this.value.length == 16) {
    // reading the length of the value in the textbox to see if it is between 13 and 16 numbers
    // displaying error if numbers are less than 13 or more than 16
    errorPay.innerHTML = `Please enter a number that is between 13 and 16 digits long.`;
  } else {
    // reset errorPay to empty string.
    errorPay.innerHTML = "";
  } 
});

zip.addEventListener("keydown", function(event){  
  // called eventListener with keydown to run through input zip.value 
  let isNum = event.target.value.match(/^\d+$/); // looking to see if anything other than numbers is being entered into textbox
  if (!isNum) {
    // displaying error if anything other than numbers are entered into textbox
    errorPay.innerHTML = `Please enter numbers only.`;
  } else if (this.value.length == 5) {
    // reading the length of the value in the textbox to see that it is 5 numbers
    // displaying error if numbers are less than 5 or greater
    errorPay.innerHTML = `Please enter a number that is 5 digits long.`;
  } else {
    // reset errorPay to empty string.
    errorPay.innerHTML = "";
  } 
});

cvv.addEventListener("keydown", function (event) {
  // called eventListener with keydown to run through input cvv.value 
  let isNum = event.target.value.match(/^\d+$/); // looking to see if anything other than numbers is being entered into textbox
  if (!isNum) {
    // displaying error if anything other than numbers are entered into textbox
    errorPay.innerHTML = `Please enter numbers only.`;
  } else if (this.value.length == 3) {
    // reading the length of the value in the textbox to see that it is 3 numbers
    // displaying error if numbers are less than 3 or greater
    errorPay.innerHTML = `Please enter a number that is 3 digits long.`;
  } else {
    // reset errorPay to empty string.
    errorPay.innerHTML = "";
  }
});


// FORM VALIDATION ON BUTTON SUBMIT.
// const checkbox = document.querySelectorAll('input[type="checkbox"]').checked;
// if (checkbox) {
//   console.log("I'm checked");
  
// } else {
//   errorActivity.innerHTML = `Check an Activity`;
//   console.log("I'm not checked");
  
// }





// SUBMIT VALIDATION
const formValidation = () => {
  //  to check empty form fields.
  // NAME VALIDATION
  if (name.value.length == 0) {
    errorName.textContent = "Please enter your name."; // this displays if the name is not entered
    name.focus();
    return false;
  }

  // Check each input in the order that it appears in the form!
  if (inputAlphabet(name, "For your name please use alphabets only")) {
    if (emailValidation(email, "Please enter a valid email address")) {
      if (validateActivites("Please choose at least one Activity")) {
        if (pay.vaule == "credit card" && lengthCCNumber(ccText, 13, 16)) {
          if (pay.vaule == "credit card" && lengthZip(zip, 5)) {
            if (pay.vaule == "credit card" && lengthCCV(zip, 3)) {
              if (pay.vaule == "credit card" && textCCNumber(ccText, "Please enter a valid Credit Card Number")) {
                if (pay.vaule == "credit card" && textNumberZip(zip, "Please enter a valid zip code")) {
                  if (pay.vaule == "credit card" && textNumberCCV(ccv, "Please enter a valid zip code")) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
};

// This checks whether input text on name is an alphabetic character or not.
// NAME VALIDATION
const inputAlphabet = (inputtext, alertMsg) => {
  let alphaExp = /^[a-zA-Z]+$/;
  if (inputtext.value.match(alphaExp)) {
    return true;
  } else {
    errorName.textContent = alertMsg;  //this segment displays the validation rule for name
    //alert(alertMsg);
    inputtext.focus();
    return false;
  }
};

// This checks whether an user entered valid email address or not and displays alert message on wrong email address format.
// EMAIL VALIDATION
const emailValidation = (inputtext, alertMsg) => {
  var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (inputtext.value.match(emailExp)) {
    return true;
  } else {
    errorEmail.textContent = alertMsg; //this segment displays the validation rule for email
    inputtext.focus();
    return false;
  }
};

// This checks whether a option is selected from the Activites and if it's not it displays an alert message.
// REGISTER FOR ACTIVITIES VALIDATION
// FUNCTIONS
const validateActivites = (alertMsg) => {
  
  // this checks to see if any of the checkboxes in REGISTER FOR ACTIVITIES is checked
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  for(let i=0; i<checkbox.length; i++) {
    if (checkbox[i].checked) {
      errorActivity.innerText = "";
      return true;
    } else {
      errorActivity.innerText = `${alertMsg}`;
      return false;
    }
  }
  
};
const activitiesIsChecked = (inputtext, alertMsg) => {
  
  if (inputtext.value == "Please Choose") {
    errorActivity.innerText = alertMsg; //this segment displays the validation rule for selection
    inputtext.focus();
    return false;
  } else {
    return true;
  }
};

// This checks whether input text on Credit Card Number is numeric or not.
// CREDIT CARD VALIDATION
const textCCNumber = (inputtext, alertMsg) => {
  let numericExpression = /^[0-9]+$/;
  if (inputtext.value.match(numericExpression)) {
    return true;
  } else {
    errorPay.innerText = alertMsg;  //this segment displays the validation rule for Credit Card Number
    inputtext.focus();
    return false;
  }
};


// This checks whether the input on Credit Card Numbers are validated by the right length.
// CREDIT CARD VALIDATION
const lengthCCNumber = (inputtext, min, max) => {
  let uInput = inputtext.value;
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  } else {
  errorPay.innerText = `Please enter between ${min} and ${max} Credit Card Numbers. `; //this segment displays the validation rule CCPayment
  inputtext.focus();
  return false;
  }
};

// This checks whether the input on Zip Code Numbers are validated by the right length.
// CREDIT CARD VALIDATION
const lengthZip = (inputtext, max) => {
  let uInput = inputtext.value;
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  } else {
    errorPay.innerText = `Please enter Zip Code Number that is ${max} long. `; //this segment displays the validation rule CCPayment
    inputtext.focus();
    return false;
  }
};

// This checks whether the input on CCV Code Numbers are validated by the right length.
// CREDIT CARD VALIDATION
const lengthCCV = (inputtext, max) => {
  let uInput = inputtext.value;
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  } else {
    errorPay.innerText = `Please enter CCV Code Number that is ${max} long. `; //this segment displays the validation rule CCPayment
    inputtext.focus();
    return false;
  }
};

// This checks whether input text on Zip Code is numeric or not.
// CREDIT CARD VALIDATION
const textNumberZip = (inputtext, alertMsg) => {
  let numericExpression = /^[0-9]+$/;
  if (inputtext.value.match(numericExpression)) {
    return true;
  } else {
    errorPay.innerText = alertMsg;  //this segment displays the validation rule for Zip Code Number
    inputtext.focus();
    return false;
  }
};

// This checks whether input text on Credit Card Number CCV is numeric or not.
// CREDIT CARD VALIDATION
const textNumberCCV = (inputtext, alertMsg) => {
  let numericExpression = /^[0-9]+$/;
  if (inputtext.value.match(numericExpression)) {
    return true;
  } else {
    errorPay.innerText = alertMsg;  //this segment displays the validation rule for CCV Number
    inputtext.focus();
    return false;
  }
};



// listens for submit button
form.addEventListener('submit', (e) => {
  //checks whole form for validity errors, if there is at least one error, runs block of code below; also check for at least one checked activity and valid email pattern
  formValidation();
  if(formValidation()) {
    form.action = "index.html";
  } else {
    e.preventDefault();
  }
});

