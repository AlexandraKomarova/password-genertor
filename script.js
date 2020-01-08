// select html elements
  var genBtn = document.querySelector("#gen-btn");
  var result = document.querySelector("#result");
  var copyBtn = document.querySelector("#copy-btn");
// create arrays of characters
  var numbers = ("123456789").split("");
  var special = ("!#$%&()*<>?:;[]{}|~@=+-.,").split("");
  var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
  var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");

  // var numbersTrueFunction = function() {
  //   var bool = confirm("Would you like to have numbers?")
  //   console.log(`#TFunc---->`, bool)
  //   return bool
  // }

// click genBtn to call generatePassword
  genBtn.addEventListener("click", generatePassword);

// wrapper function for the whole process
  function generatePassword() {
    //prompt user to choose password length
    var length = prompt("Chose a number between 8 and 128");
    // if user continues to click cancel (while they do it) continue asking to choose a number
    while (length === null){
      alert("please enter a number");
      length = prompt("Chose a number between 8 and 128");
    }
    // when the length is chosen call chooseAndGenerate
    chooseAndGenerate();

    // declare chooseAndGenrate ()
    function chooseAndGenerate() {
      // confirm character type
        var numbersTrue = confirm("Would you like to have numbers?");
        var lettersTrue = confirm("Would you like to have letters?");
        var upperTrue = confirm("Would you like to have uppercased letters?");
        var specialTrue = confirm("Would you like to have special charcaters?");
      // function to be used in validation
        function chooseCharacterType(){
          numbersTrue = confirm("Would you like to have numbers?");
          lettersTrue = confirm("Would you like to have letters?");
          upperTrue = confirm("Would you like to have uppercased letters?");
          specialTrue = confirm("Would you like to have special charcaters?");
        }
      
      // array to push chosen possible character types into
        var possChar = [];
      // final array to add randomly generated elements 
        var password = [];
      // if user continues to click cancel (while they do it) continue asking to choose a character type
        while (numbersTrue === false && lettersTrue === false && upperTrue === false && specialTrue === false) {
          alert ("please choose at least one character type");
          chooseCharacterType();
        }
      // concat possChar array (which is empty to start with) with arrays that user chose
          if (numbersTrue) {
            possChar = possChar.concat(numbers);
          }
          if (lettersTrue) {
            possChar = possChar.concat(letters);
          }
          if (upperTrue) {
            possChar = possChar.concat(upper);
          }
          if (specialTrue) {
            possChar = possChar.concat(special);
          }

      // loop through possChar password length amount of times, pick random characters and push them into password
          for (var i = 0; i < length; i++) {
              var random = Math.floor(Math.random() * possChar.length);
              password.push(possChar[random]);
            }
      // join characters in password and replace all commas by empty spaces
        password = password.join().replace(/,/g, "");
      // paste resulting password into result box   
        result.textContent = password;
      }
    }
  
  // create copy to clipboard function
  copyBtn.addEventListener("click", function() {
    var resultPassword = document.querySelector("h5");
    navigator.clipboard.writeText(resultPassword.textContent)
    .then(function() {
      /* clipboard successfully set */
    }, 
    function() {
      /* clipboard write failed */
    });
  });

// ========================= VALIDATION ==============================

// if length is less than 8 say min is 8
// if length is more than 128 say max is 128

// when password is created make sure it gets characters from each character type selected
// include()

// ============================= DOM =============================

// make sure password box gets reset
// add .word-break to h5 when password is pasted there


