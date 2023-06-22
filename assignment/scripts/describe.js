// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Variable 'name' is defined as 'Dane'
// then the code block checks if variable 'name' is equil to "Mary"
// and if it is then the console will log 'Hi, Mary!'
//if it does not, the console will log 'How do you do?'
//in this case the console will log 'How do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Variable 'secret' is left undefined for future use and variable 'code' is defined as 123
// the 1st if statement is run and checks if 'code' is equil to 123 and if so it passes the string "super" to var 'secret'
// it also changes the variable 'code' to code * 2 or (123 multiplied by 2)
// once the first if statement runs then the second if statement runs  and check if 'code' greater than 250 
// if it is then it overrides the 1st if statement then it passes the string "duper" to the variable 'secret'
// then the console logs 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
/* Three variable are defiened; isStudent with a value of true, age with a value
of 34 and zip with a value of 55407.
then a if statment is run the checks if isStudent is equil to true AND zip is 
greater than 8000 the console will log `You're a student on the West Coast!`
if both of those conditions are not met(which 55407 is not greater than 8000) then it will try the next else if statement
of isStudent is equil to false OR age < 30. If at least one of those is true then the
console will log 'What are your hobbies?'
if neither are true then it will run the next else if statement isStudent equil to true
if this statement is truen the console will log 'Welcome to Prime!'
if that last else if statment is false then it will run the final part else which will
log 'How about the weather?' only if all the previous statements did not trigger.
In this case the console should log 'Welcome to Prime!'  */


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne should be set to 'blue' and colorTwo should be set to 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// colorOne AND colorTwo should be set to 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// replace the || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


// The if statement should read as (age >= minAge) and the if and else console.log statements should be swapped.
if(minAge <= age) {
  console.log('no entry'); //this should be 'enter'
} else {
  console.log('enter'); //this should be 'no entry'
}
*/

