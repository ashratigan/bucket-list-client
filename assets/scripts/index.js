'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const blEvents = require('./bucketlists/events')
const placeEvents = require('./random/events')
require('./buttons.js')
require('./bldisplay.js')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  blEvents.addHandlers()
  placeEvents.addHandlers()
})
