// connect to the #gen-btn
    var genBtn = document.querySelector("#gen-btn");
    var result = document.querySelector("#result");
// create arrays for characters
    //var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers = ("123456789").split("");
    var special = ["!#$%&()*<>?:;[]{}|~@=+-.,"].split("");
    var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
    var upper = [];

    
    

    genBtn.addEventListener("click", generatePassword);

        // prompt user to choose password length
        // var length = prompt("Chose a number between 8 and 128");
        // if(length === null){
        //   alert("please enter a number");
        //   prompt("Chose a number between 8 and 128");
        // }
        
        // ask if they want numbers
        // var numbersTrue = confirm("Would you like to have numbers?");
        // ask if they want letters
        // var lettersTrue = confirm("Would you like to have numbers?");

        // console.log(length)
        // console.log(numbersTrue)
        // console.log(lettersTrue)

        
        
      
        // empty array of possible characters
        // var possChar = [];
        // empty array for password
        // var password = [];
      
        // if numbers wanted concat numbers with possChar
        // if (numbersTrue) {
        //   possChar = possChar.concat(numbers);
        // }
        
        //if letters wanted concat letters with possChar
        // if (lettersTrue) {
        //   possChar = possChar.concat(letters);
        // }
        
        // loop through possChar password length amount of times, pick random characters and push them into password
        // for (var i = 0; i < length; i++) {
        //   var random = Math.floor(Math.random() * possChar.length);
        //   password.push(possChar[random]);
        // }
        
        // join characters in password in the password and replace all commas by empty spaces
        // password = password.join().replace(/,/g, "");

        // result.textContent = password;
        
        // console.log(password);
        //result.value = password;
      

      function generatePassword() {
        var length = prompt("Chose a number between 8 and 128");
        if(length === null){
          alert("please enter a number");
          length = prompt("Chose a number between 8 and 128")
          chooseAndGenerate();
        }
        else {
          chooseAndGenerate();
      }

      function chooseAndGenerate() {
          var numbersTrue = confirm("Would you like to have numbers?");
          var lettersTrue = confirm("Would you like to have letters?");
          
          var possChar = [];
          var password = [];
          if (numbersTrue === false && lettersTrue === false) {
            alert ("please choose at least one character type");
            numbersTrue = confirm("Would you like to have numbers?");
            lettersTrue = confirm("Would you like to have letters?");
          }
          if (numbersTrue) {
            possChar = possChar.concat(numbers);
          }
          if (lettersTrue) {
            possChar = possChar.concat(letters);
          }
          for (var i = 0; i < length; i++) {
            var random = Math.floor(Math.random() * possChar.length);
            password.push(possChar[random]);
          }
          password = password.join().replace(/,/g, "");

          result.textContent = password;
        }
      }

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

function copy() {
  // var copyText = document.querySelector("h5");
  // document.execCommand("copy");
  navigator.clipboard.writeText("<empty clipboard>").then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
// console.log(window.navigator)

document.querySelector("#copy-btn").addEventListener("click", function() {
  var resultPassword = document.querySelector("h5");

  // console.log(resultPassword)
  navigator.clipboard.writeText(resultPassword.textContent)
  .then(function() {
    /* clipboard successfully set */
    
  }, function() {
    /* clipboard write failed */
  });
  // navigator.clipboard.readText().then(
  //   clipText => {
  //     document.querySelector("h5").innerText = clipText
  //   });


});

