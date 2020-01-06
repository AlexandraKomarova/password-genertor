// connect to the #gen-btn
    var genBtn = document.querySelector("#gen-btn");
// create arrays for characters
    //var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers = ("123456789").split("");
    var special = [];
    var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
    var upper = [];

    genBtn.addEventListener("click", function() {
        // prompt user to choose password length
        var length = parseInt(prompt("Chose a number between 8 and 128"));
        // ask if they want numbers
        var numbersTrue = confirm("Would you like to have numbers?");
        // ask if they want letters
        var lettersTrue = confirm("Would you like to have letters?");
      
        // empty array of possible characters
        var possChar = [];
        // empty array for password
        var password = [];
      
        // if numbers wanted concat numbers with possChar
        if (numbersTrue) {
          possChar = possChar.concat(numbers);
        }
        
        //if letters wanted concat letters with possChar
        if (lettersTrue) {
          possChar = possChar.concat(letters);
        }
        
        // loop through possChar password length amount of times, pick random characters and push them into password
        for (var i = 0; i < length; i++) {
          var random = Math.floor(Math.random() * possChar.length);
          password.push(possChar[random]);
        }
        
        // join characters in password in the password and replace all commas by empty spaces
        password = password.join().replace(/,/g, "");
        
        console.log(password);
        //result.value = password;
      });

// ================== PROMPTS TO CHOOSE CHARACTERS ==================

// prompt the user to say chose if they want special characters
// var special = prompt("Would you like your password to contain special characters?");

// prompt the user to say chose if they want uppercase characters
// var upper = prompt("Would you like your password to contain uppercase characters?");

// ========================= VALIDATION ==============================

// if length is less than 8 say min is 8
// if length is more than 128 say max is 128

// make sure at least one character type is selected
// what happens when Cancel is pressed? if?

// when password is created make sure it gets characters from each character type selected

// ============================= DOM =============================

// display password in password box (textContent)
// add copy to clipboard (clipboard interaction)
// make sure password box gets reset