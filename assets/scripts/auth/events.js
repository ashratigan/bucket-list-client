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
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
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

const onCreateBucketlist = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(`events data is ${data}`)

  api.createBucketlist(data)
    .then(ui.createSuccess)
    .catch(ui.failure)
}

const onGetBucketlists = function (event) {
  event.preventDefault()
  api.getBucketlists()
    .then(ui.getBukectlistsSuccess)
    .catch(ui.failure)
}

const onUpdateBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const bucketlist = data.book
  // if (book.title === '') {
  // alert('title required')
  // $('#content').html('<p>Title is required</p>')
  // $('#content').css('background-color', 'red')
  // return false
  // }
  // if (book.id.length !== 0) {
  api.updateBucketlist(data)
    // .then(ui.updateBucketlistSuccess)
    .then(() => onGetBucketlists(event))
    .catch(ui.failure)
  // } else {
    // console.log('Please provide a book id!')
  // }
}

const onDeleteBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const book = data.book
  // if (book.id.length !== 0) {
  api.deleteBucketlist(data)
    .then(() => onGetBucketlists(event))
    .catch(ui.failure)
  // } else {
    // console.log('Please provide a book id!')
  // }
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
  $('#seeBucketlists').one('click', onGetBucketlists)
  $('#bucketlist-update').one('submit', onUpdateBucketlist)
  $('#bucketlist-update').one('submit', onUpdateBucketlist)
  $('#bucketlist-delete').on('submit', onDeleteBucketlist)
}

module.exports = {
  addHandlers
}
