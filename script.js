// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMin = (diffInHrs - hh) * 60
  let mm = Math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  let diffInMs = (diffInSec - ss) * 100
  let ms = Math.floor(diffInMs)

  let formattedMM = mm.toString().padStart(2, '0')
  let formattedSS = ss.toString().padStart(2, '0')
  let formattedMS = ms.toString().padStart(2, '0')

  return `${formattedMM}:${formattedSS}:${formattedMS}`
}

// Declare variables to use in our functions below

let startTime
let elapsedTime = 0
let timerInterval
let counter = 0

// Create function to modify innerHTML

function print(txt) {
  document.getElementById('display').innerHTML = txt
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime
    print(timeToString(elapsedTime))
  }, 10)
  showButton('PAUSE')
  showButton('STOP')
}

function pause() {
  clearInterval(timerInterval)
  showButton('PLAY')
  showButton('RESET')
}

function reset() {
  clearInterval(timerInterval)
  print('00:00:00')
  elapsedTime = 0
  showButton('PLAY')
  showButton('STOP')
}

function plus() {
  counter += 1
  document.getElementById('counter').innerHTML = counter
}

function minus() {
  counter -= 1
  document.getElementById('counter').innerHTML = counter
}

function zero() {
  counter = 0
  document.getElementById('counter').innerHTML = '&nbsp;'
}

// Create function to display buttons

function showButton(buttonKey) {
  switch (buttonKey) {
    case 'PLAY':
      playButton.style.display = 'block'
      pauseButton.style.display = 'none'
      break
    case 'PAUSE':
      pauseButton.style.display = 'block'
      playButton.style.display = 'none'
      break
    case 'STOP':
      stopButton.style.display = 'block'
      resetButton.style.display = 'none'
      break
    case 'RESET':
      resetButton.style.display = 'block'
      stopButton.style.display = 'none'
      break
  }
}
// Create event listeners

let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let stopButton = document.getElementById('stopButton')
let resetButton = document.getElementById('resetButton')
let plusButton = document.getElementById('plusButton')
let minusButton = document.getElementById('minusButton')
let zeroButton = document.getElementById('zeroButton')

playButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)
plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
zeroButton.addEventListener('click', zero)
