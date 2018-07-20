'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const game = require('../game.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateBucketlist = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(`events data is ${data}`)

  api.createBucketlist(data)
    .then(ui.createSuccess)
    .catch(ui.createSuccess)
}

// const onMoves = function (event) {
//   event.preventDefault()
//   const data = game.gameValues
//   api.userMoves(data.i, data.v, data.isOver)
//     .then(ui.movesSuccess)
//     .catch(ui.movesSuccess)
// }

const onGetBucketlists = function (event) {
  event.preventDefault()
  api.getBucketlists()
    .then(ui.getBukectlistsSuccess)
    .catch(ui.getBukectlistsSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#bucketlist-form').on('submit', onCreateBucketlist)
  // $('.col1, .col2, .col3').on('click', onMoves)
  $('#seeBucketlists').one('click', onGetBucketlists)
}

module.exports = {
  addHandlers
}
