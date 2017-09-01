// `mimic-dict` is a port/derivative of a Python learning exercise;
// the original source (as written in Python) is attributed as follows:

// Copyright 2010 Google Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

// Google's Python Class
// http://code.google.com/edu/languages/google-python-class/

const fs = require('fs')
const path = require('path')

function mimicDict (filename) {
  let mimicDict = {}
  let text = fs.readFileSync(path.join(__dirname, filename)).toString()
  let words = text.trim().split(/\s+/)
  let prev = ''
  words.forEach(word => {
    if (!mimicDict[prev]) {
      mimicDict[prev] = [word]
    } else {
      mimicDict[prev].push(word)
    }
    prev = word
  })
  return mimicDict
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

function printMimic (mimicDict, word, numWords) {
  let output = word || ''
  for (var i = 0; i < (numWords || 200); i++) {
    let nexts = mimicDict[word] || mimicDict['']
    word = nexts[getRandomInt(0, nexts.length)]
    output += ' ' + word
  }
  return output
}

console.log(printMimic(mimicDict('alice.txt')))
