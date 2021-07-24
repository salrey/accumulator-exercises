/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
const sumAllNumbers = (numbers) => numbers.reduce((acc, cVal) => acc + cVal, 0);

console.log(sumAllNumbers([10, 20, 30])); //> 60
console.log(sumAllNumbers([10 - 10])); //> 0
console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states should be separated by a comma and a space.
  If there are no states, just print "STATES: ".
*/

const presentAllStates = (states) => states.reduce((acc, cVal) => acc + `${cVal}, `, "STATES: ");

console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
console.log(presentAllStates([]));
//> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determines whether or not any of the states provided include a space (i.e. " ") in their name.
*/
const hasSpace = (states) => states.some((currentState) => currentState.includes(" "));

console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
  IS VALID
  ---------------
  Write a function that returns false if any state abbreviation is longer than two characters.
*/
const isValid = (states) => states.every((currentState) => currentState.length < 3);

console.log(isValid(["AK", "NYC", "FL"])); //> false
console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  KEBAB CASE
  ---------------
  Write a function that returns a new array of all the states in kebab casing.
*/
const kebabCase = (states) =>
  states.map((currentState) =>
    currentState.includes(" ") ? currentState.replace(" ", "-").toLowerCase() : currentState.toLowerCase()
  );

console.log(kebabCase(["Alaska", "New York", "Florida"]));
//> [ "alaska", "new-york", "florida" ]
console.log(kebabCase([]));
//> []

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
*/
const find = (states, name) => (states.includes(name) ? name : null);

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

/*
  FILTER ABBREVIATIONS
  ---------------
  Write a function that filters out all strings equal to or longer than 3 characters. Return a new array with just the valid abbreviations.
*/
const filterAbbreviations = (states) => states.filter((currentState) => currentState.length < 3);

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []
