// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.  This statement is asking if 4 is less than 9.
// This log should be true

var books = 3;
console.log(4 < books);
// YOU DO: Explain. This variable name is books, with a value of 3.  The statement is asking if 4 is less than the value set to books.
// This is false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.  The name friend has a value of 6, and the name siblings has a value of 2, the statement is asking if the friends value is greater than the siblings value.
// this is true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.  The attendees variable has a value of 9, the meals variable has a value of 8.
// The statement is asking if the two variables are not striclty equal to each other.
// this statement is True

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//statement is true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//statement false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
//true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay);
//true
if (age = 1) {
  console.log("The dog is a puppy!");
}

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The final line of code asked us to determine the age of the dog.  If it is equal to 1, then it is a puppy.
