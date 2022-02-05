/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
let combine = ''
for(let word of words){
  combine += word
}
  return combine 
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let repeated = []
 for(let i = 0; i < words.length; i++){
   repeated.push(words[i] + words[i])
 }
 return repeated
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let small = []
  for(i = 0; i < words.length; i++){
    if(words[i].length <= 4){
      small.push(words[i])
    }
  }
  return small 
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for(i = 0; i < words.length; i++){
    if(words[i].includes(character)){
      return words[i]
    }
  }
  return null
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for(i = 0; i < words.length; i++){
    if(words[i] !== words[i].toUpperCase()){
      return false
    }
  }
  return true
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longest = ""
  for(i = 0; i < words.length; i++){
    if(words[i].length > longest.length){
      longest = words[i]
    } else {
      longest = words[0]
    }
  }
  return longest
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
