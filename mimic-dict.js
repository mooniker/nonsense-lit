// `mimic-dict.js` is a port/derivative of a Google Python learning exercise.
// See the included NOTICE text file for details and attribution.

const fs = require('fs')
const path = require('path')

// Returns mimicDict mapping each word to list of words that follow it
function mimicDict (filename) {
  let mimicDict = {}
  let text = fs.readFileSync(path.join(__dirname, filename)).toString()
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

// Given a mimicDict word mapping and start word, return a given
// number of (or 200) words that randomly follow the mapping
function printMimic (mimicDict, word, numWords) {
  numWords = numWords || 200
  let output = word || ''
  for (let i = 0; i < numWords; i++) {
    let nexts = mimicDict[word] || mimicDict['']
    word = nexts[getRandomInt(0, nexts.length)]
    output += ' ' + word
  }
  return output
}

console.log(printMimic(mimicDict('alice.txt')))
