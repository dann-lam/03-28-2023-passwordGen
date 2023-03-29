// Assignment Code
//We can have an array that is all of the available options of characters.
//E.G. [[012], [abc], [ABC], [!@#]]

//Each array is loaded into the "options" array, thus we don't have to worry about choosing a type that was set to false or re-rolling our options on a math.random if it falls to a false.

var generateBtn = document.querySelector("#generate");


function generatePassword(){
  //Initializes the length prompt to 0.
let lengthPrompt = 0;
//Initializes the output array.
let outputArr = [];
//Initializes the options Array.
let optionsArr = [];

//Initializes our characters.

//Yes, I know there is a fancier way of creating these... but this is much simpler to deal with.

const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


//This keeps asking the user for a value between 8 and 128. Is there a way to "stop" this if the user wants to discontinue?
while (lengthPrompt > 128 || lengthPrompt < 8){
  lengthPrompt = prompt("Please input password length between 8 - 128 characters.");
}
//These prompts are to reassign true or false per each prompt.
let lowerPrompt = confirm("Would you like lowercase letters?")
let upperPrompt = confirm("Would you like uppercase letters?")
let numericPrompt = confirm("Would you like numeric numbers?")
let specialPrompt = confirm("Would you like special characters?")


// we could "load" the types into an array and keep the number of 0 to n where n is the amount of acceptable character types.

//Begin loading in acceptable character types into optionsArr.
//Note. There's gotta be a better way than this.

if(lowerPrompt){
  optionsArr.push(lowerCaseLetters);
}
if(upperPrompt){
  optionsArr.push(upperCaseLetters);
}
if(numericPrompt){
  optionsArr.push(numbersZeroToNine);
}
if(specialPrompt){
  optionsArr.push(selectedSpecialCharacters);
}


// I want to initialize the outputArr with atleast one of each type that was set to true, thus ensuring we have atleast one of each.
//To do this, we can walk through the options array, choose a random number between 0 and the length of the array inside the options array, and push it in.
let outputInitializer = () => {
  for(i = 0; i < optionsArr.length; i++){
    //Set y to a random character within the list.
    //Math.floor rounds down from the number fed into it, in this case it's a random number between 0 - 1 that is multiplied by the max, in this case the length of the array current fed into it.

    let y = Math.floor(Math.random() * optionsArr[i].length);
    outputArr.push(optionsArr[i][y]);

  }

}
outputInitializer();

//Next, I want to randomly choose from the arrays until our password length is filled.
//Initialize i to the outputArr length because that's how many we already have in it. We want it to be lengthPrompt long so we set it to smaller than lengthPrompt, which it *SHOULD* be. Iterate i until we're done.

let outputFinisher = () => {
  for (i = outputArr.length; i < lengthPrompt; i++){
    console.log(`i is ${i}`)
    //Randomly choose a number between 0 - optionsArr.length.

    let randSelect = Math.floor(Math.random() * optionsArr.length);
    //Store the "type" we selected's array.
    let randSelectType = optionsArr[randSelect];

    //now choose a random character from our randomly chosen options.
    let randSelectedChar = Math.floor(Math.random() * randSelectType.length);
    //Now push that character into the outputArr.
    outputArr.push(randSelectType[randSelectedChar]);
    console.log(`Pushed! ${randSelectType[randSelectedChar]}`);
  }

}
outputFinisher();

//Next we want to shuffle our output so the first four characters aren't as guessible.
//This is a poor man's shuffle. there's one called Fisher-Yates which is apparently the 'best'.
//This math.random stuff is complex.
let outputRandomizer = () => {
  console.log(`Output was: ${outputArr}`)
  outputArr.sort(() => (Math.random() - 0.5))
  console.log(`Output is now: ${outputArr}`)
}
//Shuffle our outputArr
outputRandomizer();

//Convert the array to a string.
// finalPassword = outputArr.join("");

// return finalPassword;
// return finalPassword;
}
// Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");

  //   passwordText.value = password;

  // }

// writePassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;
