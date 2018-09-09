# Treehouse-Unit3
In this project there is several different requirement that must be met in order to get a passing grade.
And there is additional requirement that must be met to receive extra credit. (To hit “Exceeds”)

Basic Requirements are:
  Add your script to your HTML
  Set focus on the first text field (Name.input)

Job Role section
  Include a text field that will be revealed when the “Other” option is selected from the “Job Role” drop down menu
  Give the field an id of  “other-title”, and add the placeholder text of “Your Job Role”.
  This text field must be shown when JS is disabled, which means it must be added into your HTML but hidden in JS until the “Other” option is selected.

T-Shirt Info section
  In the “Color” menu, only display the color options that match the design selected in the “Design” Menu.
  If the user selects “Theme – JS Puns” then the color menu should only display “Cornflower Blue”, “Dark Slate Grey”, and “Gold”.
  If the user selects “Theme – I &#9829 (heart) JS” then the color menu should only display “Tomato”, “Steel Blue”, and “Dim Grey”.
  When a new theme is selected from the “Design” menu, the “Color” field and drop down menu is updated.

Register for Activities section
  If the user  selects a workshop, don't allow selection of a workshop at the same day and time – disable the checkboxes and visually indicate that the workdshop in the competing time slot isn't available.
  If user unchecks an competing time slot, make sure to active the disabled checkbox
  As user selects activities, a running total should display below the list of checkboxes.

Payment Info section
  Display payment sections based on the payment option chosen in the select menu.
  “Credit Card” payment option should be selected by default. Display the #credit-card div, and hide the “PayPal” and “Bitcoin” information. Payment option in the select menu should match the payment option displayed on the page.
  “PayPal” payment option displayed, the credit card and “Bitcoin” information should be hidden.
  “Bitcoin” payment option displayed, the credit card and “PayPal” information should be hidden.
  The user should not be able to select the “Select Payment Method” option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.

Form Validation
  If any of the following validation errors exist, prevent the user from submitting the form:
  Name field can't be blank.
  Email field must be a validly formatted e-mail address (check to see if input content includes @)
  User must select at least one checkbox under the "Register for Activities" section of the form.
  If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
  Credit Card field should only accept a number between 13 and 16 digits.
  The Zip Code field should accept a 5-digit number.
  The CVV should only accept a number that is exactly 3 digits long.
  Make sure your validation is only validating Credit Card info if Credit Card is the selected payment method.

Form Validation Message
  Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.
  The following fields should have some obvious form of an error indication:
  Name field
  Email field
  Register for Activities checkboxes (at least one must be selected)
  Credit Card number (Only if Credit Card payment method is selected)
  Zip Code (Only if Credit Card payment method is selected)
  CVV (Only if Credit Card payment method is selected)
  Error messages or indications should not be visible by default. They should only show upon submission, or after some user interaction
  
Progressive Enhancement
  The user should still have access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
  The “Other” text field under the "Job Role" section should be visible
  All information for Bitcoin, PayPal or Credit Card payments should be visible.


Extra Credit 

T Shirt Section
  Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.

Conditional Error Message
  Program at least one of your error messages so that more information is provided depending on the error. For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.”

Real-time Error Messages
  Program your form so that it provides a real-time validation error message for at least one text input field. Rather than providing an error message on submit, your form should check for errors and display messages as the user begins typing inside a text field. For example, if the user enters an invalid email address, the error appears as the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address.
  You must accomplish this will your own JavaScript code. Do not rely on HTML5's built-in email validation.
  If you implement the above exceeds requirements in your form, make sure you detail in your submission notes which input will have different error messages depending on the error, and which input will have "real time" validation messages, so your reviewer won't miss them by accident.