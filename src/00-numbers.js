/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let sum = 0
  for(let i = 0; i < values.length; i++){
    sum += values[i]
  }
  return sum 
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
 let doubled = []
 for(let i = 0; i < values.length; i++){
   doubled.push(values[i] *2)
 }
 return doubled
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let even = []
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0){
      even.push(values[i])
    }
  }
  return even
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  for(let i = 0; i < values.length; i++){
    if(values[i] === val){
      return val
    }
  }
  return null
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  if(values.length === 0){
    return false
  }
  for(let i = 0; i < values.length; i++){
    if(values[i] > 0){
      return false 
    }
  }
  return true 
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
let largest = values[0]
if(values.length === 0){
  return null
}

  for(let i = 0; i < values.length; i++){
    if(values[i] > largest){
      largest = values[i]
    } 
  }
  return largest
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
