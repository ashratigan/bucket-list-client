'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
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
  updateBucketlist,
  deleteBucketlist
}
