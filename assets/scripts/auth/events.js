'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// *****************************
// Events for user
// *****************************
const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

// *****************************
// Events for bucketlist
// *****************************
const onGetBucketlists = function (event) {
  event.preventDefault()
  api.getBucketlists()
    .then(ui.getBukectlistsSuccess)
    .catch(ui.failure)
}

const onCreateBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createBucketlist(data)
    .then(() => onGetBucketlists(event))
    .catch(ui.failure)
}

const onClearBucketlists = (event) => {
  event.preventDefault()
  ui.clearBucketlists()
}

const onUpdateBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBucketlist(data)
    .then(() => onGetBucketlists(event))
    .catch(ui.failure)
}

const onDeleteBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteBucketlist(data)
    .then(() => onGetBucketlists(event))
    .catch(ui.failure)
}

// *****************************
// Add Handlers
// *****************************
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#bucketlist-form').on('submit', onCreateBucketlist)
  $('#hideBucketlists').on('click', onClearBucketlists)
  $('#seeBucketlists').on('click', onGetBucketlists)
  $('#bucketlist-update').on('submit', onUpdateBucketlist)
  $('#bucketlist-delete').on('submit', onDeleteBucketlist)
}

module.exports = {
  addHandlers
}
