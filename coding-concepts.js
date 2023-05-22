// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
// console.log(cohort.split(""))

// a) Your answer:
// b) Verify and explain:

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: Undefined: It's undefined because every function needs a return. There is not a return before the first back tick within the curly braces. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: An array of everything multipled by two. [8, 10, 12, 14, 16].
// b) Verify and explain: The HOF .map is attached to the array. Within the .map argument the parameter is number(which is the value of each element), and the arrow function syntax returns each index multipled by 2. The HOF .map iterates over each element of the array, and returns a new array of the same length. Also, it is great for modifying each value. Works because the array has the same datatype with the math operator.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: An array with only odds. [11, 13, 15]
// b) Verify and explain: The HOF .filter, only filters what we are looking for within the argument. The parameter number signals each element within the array. The arrow function syntax indicates a return of a single expression within that element. The modulo % indicates the remainder of division, the strict inequality operator checks that the remainder is not 0, if it does not equal 0, it will be filtered back into the array. It returned a subset of an array that satisfied the condition.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Within this object there are key value pairs. To reference or access the value of the key, use dot notation to provide a pathway through the object. Since the value is an array["Javascript", "Ruby"] and the key is languages:, the brackets [0] indicates we want the index of [0] within the array. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George will replace name within the class.
// b) Verify and explain: We are creating a new object with a different variable. The constructor only has 1 parameter called name. In the given variable learnStudent, we are creating a new object (with the word new) followed by the class name, replacing george with the parameter name. The () after Learn indicates an execution of that current string into the parameter.
