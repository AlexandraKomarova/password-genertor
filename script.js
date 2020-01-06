// create arrays for characters
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = [];
    var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
    var upper = [];

    console.log("NUMBERS")
    console.log(numbers)

    console.log("LETTERS");
    console.log(letters);

// prompt the user to choose password.length between 8 and 128 
// var length = prompt("Choose password length between 8 and 128");
// if length is less than 8 say min is 8
// if length is more than 128 say max is 128

// can you write a function that will go through elements inside of the arrays inside of this obejcet password.length amount of times and push only characters return randomzied password as a string?

// can I create an empty object and push arrays into it under certain conditions?


// length = 10
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c']

// result = ['a', 5, 9, 'c']

// console.log("LETTERS");
// console.log(letter)



// if user chooses to have numbers
// push random numbers into numbers 9 times
// for(var i = 0; i < 9; i++){
//     var num = Math.floor(Math.random()*10);
//     numbers.push(num);
// }



// if the user chooses to have letters
// go through letters a certain number of times and push a certain number of letters into password




// for(var i = 0; i < 8; i++){
//     var letter = Math.floor(Math.random() * 27);
//     letters.push(letter);
// }


// ====== PROMPTS TO CHOOSE LENGTH AND CHARACTERS =======



// prompt the user to say chose if they want special characters
// var specialChar = prompt("Would you like your password to contain special characters?");

// prompt the user to say chose if they want numeric characters
// var specialChar = prompt("Would you like your password to contain special characters?");

// prompt the user to say chose if they want lowercase characters
// var lowlChar = prompt("Would you like your password to contain lowercase characters?");

// prompt the user to say chose if they want uppercase characters
// var upChar = prompt("Would you like your password to contain uppercase characters?");

// ============ VALIDATION =============

// make sure at least one character type is selected
// what happens when Cancel is pressed? if?

// =============== DOM ==============

// connect gen-btn to function
// display password in password box (textContent)
// add copy to clipboard (clipboard interaction)