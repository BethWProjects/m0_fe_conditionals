// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  puts "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// Lines 12 - 16 is an if/else statement.  The conditions set on line 12 will determine if the code on line 13 or 15 will run.
// 2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// hat
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// Lines 25 - 33 are using if/else statements depending on the conditions set.  If the bears choice is door 1 or 2,
// the code will use contatanation to combine two strings and a variable.
// If the bear chooses door 3 with the condition bearChoice === 3, the code is a string, if it is neither door 1, 2, or 3,
// you see a string explaining your the bears friends.
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// "You run as fast as you can into the next room. It's full of snakes!";
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// "You tell the bear the hat is too small and it starts to cry!";
// 7. What is your favorite ending?   "You stay with the bear and become it's best friend!";
