'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#sign-up')[0].reset()
  console.log('sign up success')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('.signInUp').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'none')
  $('#seeInfo').css('display', 'block')
  $('#sign-in')[0].reset()
  console.log('sign in success')
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#changedPasswordMessage').text('Password changed successfully')
  $('#changedPasswordMessage').delay(3200).fadeOut(300)
  $('#change-password-form').css('display', 'none')
  $('#change-password-form')[0].reset()
  console.log('change password success')
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('.signInUp').css('display', 'block')
  $('.userInfo').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'block')
  store.user = null
}

// const createSuccess = function (data) {
//   $('#gameboard').css('display', 'block')
//   store.game = data.game
//   store.game.id = data.game.id
// }

// const getGamesSuccess = function (data) {
//   for (let i = 0; i < data.games.length; i++) {
//     $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
//     // console.log(data.games[i])
//   }
// }

const failure = function (error) {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', '#800')
  console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  // createSuccess,
  // getGamesSuccess,
  failure
}
