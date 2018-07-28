'use strict'

const store = require('../store')

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

module.exports = {
  createSuccess,
  getBukectlistsSuccess,
  clearBucketlists,
  failure
}
