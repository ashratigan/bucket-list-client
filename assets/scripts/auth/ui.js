'use strict'

const store = require('../store')
// const showBucketlistsTemplate = require('../templates/bucketlist.handlebars')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#sign-up')[0].reset()
  console.log('sign up success')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('.signInUp').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'none')
  $('.slideshow').css('display', 'none')
  $('#seeInfo').css('display', 'block')
  $('.bucketList').css('display', 'block')
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

const createSuccess = function (data) {
  console.log(`data.bucketlist is ${data.bucketlists}`)
  store.bucketlist = data.bucketlists
  // store.game.id = data.game.id
}

const getBukectlistsSuccess = function (data) {
  // $('.displayedBucketlists').append('<p>Bucket lists ' + data.bucketlists.id)
  // $('.displayedBucketlists').append('<p>Bucket lists ' + data.bucketlists.id.bl_name)

  for (let i = 0; i < data.bucketlists.length; i++) {
    const taskList = data.bucketlists[i].task.split(',')
    console.log(taskList)
    console.log(`ui task data is ${data.bucketlists[i].task}`)
    $('.displayedBucketlists').append('<p><b>NAME:</b>' + data.bucketlists[i].bl_name + '    <br/>' + taskList + '<br/></p><br/>')
    // $('.displayedBucketlists').append('<p><b>ID:</b>' + data.bucketlists[i].id + '    <b>Game Squares</b>' + data.bucketlists[i].task + '</p>')
    // console.log(data.games[i])
  }
  console.log(`ui data is ${data}`)
  // console.log(`ui data is ${data.id}`)
  // console.log(`ui data is ${data.bucketlist}`)
  console.log(`ui data is ${data.bucketlists}`)
  console.log(`ui data is ${data.bucketlists.id}`)
}

const updateBucketlistSuccess = function (data) {
  console.log(`data.bucketlist is ${data.bucketlists}`)
  store.bucketlist = data.bucketlists
  console.log('You successfully updated the book!')
  // const bucketlistHTML = (`
  //   <h4>Name: ${data.bucketlist.name}</h4>
  //   <p>Tasks: ${data.bucketlist.task}</p>
  //   <br>
  // `)

  // $('.displayedBucketlists').html(bucketlistHTML)
  console.log('You successfully updated the book!')
  const bookHTML = (`
    <h4>Title: ${data.bucketlists.name}</h4>
    <p>Author: ${data.bucketlists.task}</p>
    <br>
  `)

  $('#content').html(bookHTML)
}

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
  createSuccess,
  getBukectlistsSuccess,
  updateBucketlistSuccess,
  failure
}
