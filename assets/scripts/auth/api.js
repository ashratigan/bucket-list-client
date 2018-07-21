'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('sign up')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('change password api')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBucketlist = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/bucketlists/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getBucketlists = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/bucketlists/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBucketlist = function (data) {
  console.log(`api data is ${data}`)
  // console.log(`api data.bucketlists is ${data.bucketlists}`)
  // console.log(`api data.bucketlists.id is ${data.bucketlists.id}`)
  console.log(`api data.id is ${data.id}`)
  return $.ajax({
    url: config.apiUrl + '/bucketlists/' + data.bucketlist.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteBucketlist = (data) => {
  return $.ajax({
    url: config.apiUrl + '/bucketlists/' + data.bucketlist.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createBucketlist,
  getBucketlists,
<<<<<<< HEAD
  deleteBucketlist,
  updateBucketlist
=======
  updateBucketlist,
  deleteBucketlist
>>>>>>> bucketlistapi
}
