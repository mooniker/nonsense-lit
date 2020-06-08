// `mimic-dict.js` is a port/derivative of a Google Python learning exercise.
// See the included NOTICE text file for details and attribution.

// Returns mimicDict mapping each word to list of words that follow it
function createMimicryDict (text) {
  let mimicDict = {}
  let words = text.trim().split(/\s+/)
  let prev = ''
  words.forEach(word => {
    if (mimicDict[prev]) {
      mimicDict[prev].push(word)
    } else {
      mimicDict[prev] = [word]
    }
    prev = word
  })
  return mimicDict
}

// Helper to generate random integer
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Wax nonsense with a dictionary based on a given text.
 *
 * @param {string} text
 * @param {string} word - optional start word
 * @param {integer} numWords - default 200
 */
function utterNonsense (text, word = '', numWords = 200) {
  const mimicry = createMimicryDict(text)
  let output = word
  for (let i = 0; i < numWords; i++) {
    let nexts = mimicry[word] || mimicry['']
    word = nexts[getRandomInt(0, nexts.length)]
    output += ' ' + word
  }
  return output
}

module.exports = { utterNonsense }

