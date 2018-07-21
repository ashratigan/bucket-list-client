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
      .then(ui.updateBukectlistsSuccess)
      .catch(ui.failure)
  // } else {
    // console.log('Please provide a book id!')
  // }
}

// const onDeleteBucketlists = (event) => {
//   event.preventDefault()
//   const bucketlistId = $(event.target).closest('ul').attr('data-id')
//   api.deleteBucketlist(bucketlistId)
//     .then(() => onGetBucketlists(event))
//     .catch(ui.failure)
// }

const onDeleteBucketlist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const book = data.book
  // if (book.id.length !== 0) {
    api.deleteBucketlist(data)
      .then(ui.updateBukectlistsSuccess)
      .catch(ui.failure)
  // } else {
    // console.log('Please provide a book id!')
  // }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#bucketlist-form').on('submit', onCreateBucketlist)
  // $('.col1, .col2, .col3').on('click', onMoves)
  $('#seeBucketlists').one('click', onGetBucketlists)
  $('#book-update').one('submit', onUpdateBucketlist)
  $('#book-update').one('submit', onUpdateBucketlist)
  // $('#book-update').one('click', 'button', onDeleteBucketlist)
  $('#book-delete').on('submit', onDeleteBucketlist)
}

module.exports = {
  addHandlers
}
