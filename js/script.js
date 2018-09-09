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
const listTotal = document.querySelector(".act-total");




// WINDOW LOAD
window.onload = function(event) {
  name.focus(); // This sets the focus on the name input on page load.
  otherJob.style.display = "none"; // This hides the other Job option on page load.
  colorColumn.style.display = "none"; // Extra credit to hide color on page load.
};

//  NAME INPUT 
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
const jobRoleOther = addEventListener("change", function(event) {
  if(event.target.value == "other"){
    // add class
    event.target.classList.add("other");
    // Display #other-title
    otherJob.style.display = "block";
  } else if(event.target.classList.contains("other")) {
    otherJob.style.display = "none";
  }
});

// T-SHIRT  
/* For extra credit. Hide the "color" label and select menu until a T-Shirt design is selected from the "Design" menu. */
tShirtDesign.addEventListener("change", function(even) {
  if(event.target.value == "js puns" || event.target.value == "heart js") {
    colorColumn.style.display = "block";
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
        colorColumn.style.display = "none";
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
  listTotal.innerHTML = "";
  if(event.name == "all") {
    total += "$200";
  }
  if(event.name == "js-frameworks") {
    total += "$100";
    express.disabled();
  }
  if(event.name == "js-libs") {
    total += "$100";
    node.disabled();
  }
  if(event.name == "express") {
    total += "$100";
    js-framework.disabled();
  }
  if(event.name == "node") {
    total += "$100";
    js-libs.disabled();
  }
  if(event.name == "build-tools") {
    total += "$100";
  }
  if(event.name == "npm") {
    total += "$100";
  }
  
});

// PAYMENT INFO
/* For extra credit. If trhe field isn't empty for the credit card number but contains only 10 numbers, the error message reads "Please enter a number that is between 13 and 16 digits long." */

// FORM VALIDATION ON BUTTON SUBMIT













