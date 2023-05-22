// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("byThree", () => {
    it("returns if the number inside is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(byThree(object1)).toEqual("15 is divisible by three")
      expect(byThree(object2)).toEqual("0 is divisible by three")
      expect(byThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: byThree is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const byThree = (num1) => {
    if (num1.number % 3 === 0) {
        return `${num1.number} is divisible by three`
    } else if (num1.number % 3 === 0) {
        return `${num1.number} is divisible by three`
    } else if (num1.number % 3 !== 0) {
        return `${num1.number} is not divisible by three`
     } else {
        return "something went wrong"
     }
}

//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total

// Pseudo code:
// 1. Create a function named byThree.
        // 1a. Create a parameter named num1.
// 2. Use conditionals to check the parameter num1.
        // 2a. Use if / else if / else (catch-all)
        // 2b. Within all evaluations of the conditionals, call upon the parameter num1.
        // 2c. Since our given variables (object(1,2,3)) are in curly braces, it is making the object literal. They created an object which signals key value pairs.
        // 2d. We will use Dot Notation on every parameter in the conditionals with a .number to access the value from the created object(s).
// 3. Within the conditionals use: Modulo %, Strict Equality Operator, Banger Operator. 
        // 3a. Modulo to get the remainder(s)
        // 3b. Strict Equality to check the datatype and value match.
        // 3c. Banger to negate the statement of being divisible by 3.
// 4. Use return with string interpolation with Expected output(s) after every coniditonal.
// 5. Run the file with yarn jest to check if function passes.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("nounsUpperCase", () => {
    it("returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(nounsUpperCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(nounsUpperCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// ReferenceError: nounsUpperCase is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const nounsUpperCase = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code: 
// 1. Create a function called nounsUpperCase.
        // 1a. Create a parameter called array.
// 2. Use iteration from a HOF .map to iterate over each element of the array. Create one parameter called value.
// 3. Since the datatype is a string within the array, Use .charAt(), returns the character at a specific index.
// 4. Attach .toUpperCase() after .charAt(), indicating to upper case the specific index.
        // 4a. Use .slice(1) to signal seperation from the given start which is index 1.
        // 4b. Use addition operator to concatenate our step 4 and 4a together. To combined our uppercased letter with the rest of the word that .slice(1) took off.
// 5. Run file with yarn jest to check the function.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowels", () => {
    it("returns the index of the first vowel in each string", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
      expect(firstVowels(vowelTester1)).toEqual(1)
      expect(firstVowels(vowelTester2)).toEqual(0)
      expect(firstVowels(vowelTester3)).toEqual(2)
    })
})

// ReferenceError: firstVowels is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowels = (string) => {
    for (let i = 0; i < string.length; i++) {
        let vowel = string.charAt(i)
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
            return i
        }
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code: 
// 1. Create a function named firstsVowels that contains a loop, conditionals, and equality/logical operators.
// 2. Will have 1 parameter named string.
// 3. Create a for loop that iterates over each index. Will use i. 
        // 3a. Need to delcare a new variable named vowel, that will take the specific index of our parameter (string) with .charAt(i). i is declared in the for loop. We do this because we need the see where the index is at for the first vowel. 
        // 3b. Use logical operator || to evaluate multiple statements within one conditional. Signals that one condition has to be met within the multiple coniditons stated. 
        // 3c. Use strict equality operators for the vowels. Since we are looking for a letter use "" around each vowel.
// 4. Return i, for we only want the index of the first vowel of the string. (Logical Operator || allows this for only one coniditon has to be true to return i.)
// 5. Run the file with yarn jest to check the function.

