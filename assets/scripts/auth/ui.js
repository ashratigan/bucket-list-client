'use strict'

const store = require('../store')

// *****************************
// Ui for user
// *****************************
const signUpSuccess = function (data) {
  $('#modalMessageSignUp').text('Signed up successfully! Sign in to get started!')
  $('#sign-up').slideToggle(100)
  setTimeout(function () {
    $('#signUpModal').modal('hide')
  }, 2000)
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#modalMessageSignIn').text('Signed in successfully')
  $('#sign-in').slideToggle(100)
  setTimeout(function () {
    $('#signInModal').modal('hide')
  }, 2000)
  $('#landing').css('display', 'none')
  $('#examples').css('display', 'none')
  $('.bucketList').css('display', 'block')
  $('.bldisplay').css('padding-top', '50px')
  $('#sign-in')[0].reset()
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#changedPasswordMessage').text('Password changed successfully')
  $('#changedPasswordMessage').delay(3200).fadeOut(300)
  $('#change-password-form').css('display', 'none')
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function () {
  $('#modalMessageSignIn').text('Signed in!')
  $('#modalMessageUserInfo').text('Signed out! See you next time!')
  setTimeout(function () {
    $('#userInfoModal').modal('hide')
  }, 2000)
  $('.signInUp').css('display', 'block')
  $('#landing').css('display', 'block')
  $('#examples').css('display', 'block')
  $('.userInfo').css('display', 'none')
  $('.bucketList').css('display', 'none')
  $('.bldisplay').css('padding-top', '40vh')
  store.user = null
}

// *****************************
// Ui for bucketlist
// *****************************
const createSuccess = function (data) {
  store.bucketlist = data.bucketlists
  $('#bucketlist-form')[0].reset()
}

const getBukectlistsSuccess = function (data) {
  $('.displayedBucketlists').empty()
  for (let i = 0; i < data.bucketlists.length; i++) {
    const taskList = data.bucketlists[i].task.split(',')
    $('.displayedBucketlists').append('<h1>' + data.bucketlists[i].bl_name + '<span style="font-size:12px;float:rightt;"><i> ID:' + data.bucketlists[i].id + '</i></span></h1>')
    for (let i = 0; i < taskList.length; i++) {
      $('.displayedBucketlists').append('<li>' + taskList[i] + '</li>')
    }
  }
  // $('#seeBucketlists').css('display', 'none')
  $('#bucketlist-update')[0].reset()
  $('#bucketlist-form')[0].reset()
  $('#bucketlist-delete')[0].reset()
  store.bucketlist = data.bucketlists
}

const clearBucketlists = () => {
  $('.displayedBucketlists').empty()
}

const failure = function () {
  $('#message').text('Oh no, something went wrong!')
  $('#bucketlist-update')[0].reset()
  $('#bucketlist-form')[0].reset()
  $('#bucketlist-delete')[0].reset()
}
const signInFailure = function () {
  $('#sign-in')[0].reset()
  $('#modalMessageSignIn').text('Oh no, incorrect email or password')
}

const signUpFailure = function () {
  $('#sign-up')[0].reset()
  $('#modalMessageSignUp').text('Oh no, something went wrong! That email might already be in the system or you passwords do not match')
}

const changePasswordFailure = function () {
  $('#change-password-form')[0].reset()
  $('#changedPasswordMessage').text('Oh no, something went wrong!')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createSuccess,
  getBukectlistsSuccess,
  clearBucketlists,
  failure,
  signInFailure,
  signUpFailure,
  changePasswordFailure
}
