/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
function sumAllNumbers(numbers) {
// 1. Understand Default value (zero) and output (return total)
let total = 0;
// 2. Define our loop 
for (i = 0; i < numbers.length;  i++) {
  // 3. Accumulate!
    const number = numbers[i];
    total += number; 
    }
    return total;
};


console.log(sumAllNumbers([10, 20, 30])); //> 60
console.log(sumAllNumbers([1, 3, 3])); //> 7
console.log(sumAllNumbers([10 - 10])); //> 0
console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states should be separated by a comma and a space.

  If there are no states, just print "STATES: ".
*/
function presentAllStates(states) {
    //1. What's our default value and output
    let listStates = 'STATES: '
    // 2. Define the Loop
    for (let i = 0; i < states.length; i++) {
        // 3. Accumulate!
        const state = states[i]
        listStates += state + ', ';
    }
    
    return listStates;
}

console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
console.log(presentAllStates([]));
//> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determine›s whether or not any of the states provided include a space (i.e. " ") in their name.
*/
function hasSpace(states) {
    // 1. Default value and output
    let withSpace = false;
    // 2. Define the loop
    for (let i = 0; i < states.length; i++) {
        // Accumulate!
        const state = states[i]
        if (state.includes(" ")) {
            withSpace = true
        }
    }
    
    return withSpace
}

console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
  IS VALID
  ---------------
  Write a function that returns false if any state abbreviation is longer than two characters.
*/
function isValid(states) {
    // 1. Default Value and Output
    let isTwo = true;
    // 2. Define the loop 
    for (let i = 0; i < states.length; i++) {
        // 3. Accumulate!
        const state = states[i];
        if (state.length > 2) {
            isTwo = false
        }
    }

    return isTwo
}

console.log(isValid(["AK", "NYC", "FL"])); //> false
console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  KEBAB CASE
  ---------------
  Write a function that returns a new array of all the states in kebab casing.
*/
function kebabCase(states) {
    // 1. Default Value and Output
    let kebabStates = [];
    // 2. Define the loop
    for (let i = 0; i < states.length; i++) {
        // Accumulate!
        const state = states[i]
        let stateArray = state.split(" ")

        kebabStates.push(stateArray.join("-").toLowerCase())
    } 
    return kebabStates
}

 console.log(kebabCase(["Alaska", "New York", "Florida"]));
//> [ "alaska", "new-york", "florida" ]
 console.log(kebabCase([]));
// > []

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
*/
function find(states, name) {
    //1. Default Value and Output 
    let foundName = null;
    // 2. Define the loop
    for (let i = 0; i < states.length; i++) {
        //3. Accumulate!
        const state = states[i];
        if (state === name) {
            return name
        }
    }

    return foundName

}

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

// /*
//   FILTER ABBREVIATIONS
//   ---------------
//   Write a function that filters out all strings equal to or longer than 3 characters. Return a new array with just the valid abbreviations.
// */
function filterAbbreviations(states) {
    // 1. Default Value and Output 
    let filteredStates = [];
    // 2. Define the loop
    for (let i = 0; i < states.length; i++) {
        //Accumulate!
        const state = states[i]
        if (state.length < 3) {
            filteredStates.push(state)
        }
    }          

    return filteredStates
}

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []
// //{"mode":"full","isActive":false}