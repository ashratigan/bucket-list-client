'use strict'

const store = require('../store')
// const showBucketlistsTemplate = require('../templates/bucketlist.handlebars')

// *****************************
// Ui for user
// *****************************

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#sign-up')[0].reset()
  console.log('sign up success')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('.signInUp').css('display', 'none')
  // $('.sign-inup-buttons').css('display', 'none')
  $('#landing').css('display', 'none')
  $('#seeInfo').css('display', 'block')
  $('.bucketList').css('display', 'block')
  $('.bldisplay').css('padding-top', '50px')
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
  $('#seeInfo').css('display', 'none')
  $('.bucketList').css('display', 'none')
  $('#landing').css('display', 'block')
  $('.sign-inup-buttons').css('display', 'block')
  $('.bldisplay').css('padding-top', '40vh')
  store.user = null
}

// *****************************
// Ui for bucketlist
// *****************************

const createSuccess = function (data) {
  console.log(`data.bucketlist is ${data.bucketlists}`)
  store.bucketlist = data.bucketlists
  $('#bucketlist-form')[0].reset()
}

const getBukectlistsSuccess = function (data) {
  $('.displayedBucketlists').empty()
  for (let i = 0; i < data.bucketlists.length; i++) {
    const taskList = data.bucketlists[i].task.split(',')
    $('.displayedBucketlists').append('<h1>' + data.bucketlists[i].bl_name + '<span style="font-size:12px;float:rightt;"><i> ID:' + data.bucketlists[i].id + '</i></span></h1><br/>')
    for (let i = 0; i < taskList.length; i++) {
      $('.displayedBucketlists').append('<ul><li>' + taskList[i] + '</li></ul><br/>')
    }
    console.log(taskList)
    console.log(`ui task data is ${data.bucketlists[i].task}`)
    // $('.displayedBucketlists').append('<p><i>ID:' + data.bucketlists[i].id + '</i><br/><b>' + data.bucketlists[i].bl_name + '</b><br/>' + taskList + '<br/></p><br/>')
  }
  console.log(`ui data is ${data}`)
  console.log(`ui data is ${data.bucketlists}`)
  console.log(`ui data is ${data.bucketlists.id}`)
  $('#bucketlist-update')[0].reset()
  $('#bucketlist-form')[0].reset()
  store.bucketlist = data.bucketlists
}

const updateBucketlistSuccess = function (data) {
  // console.log(`data.bucketlist is ${data.bucketlists}`)
  // store.bucketlist = data.bucketlists
  console.log('You successfully updated the bucketlist!')
  const bookHTML = (`
  //   <h4>Title: ${data.bucketlists.bl_name}</h4>
  //   <p>Author: ${data.bucketlists.task}</p>
  //   <br>
  // `)

  $('#content').html(bookHTML)
  $('#bucketlist-update')[0].reset()
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
