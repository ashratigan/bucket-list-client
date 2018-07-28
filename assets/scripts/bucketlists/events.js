'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  $('#bucketlist-form').on('submit', onCreateBucketlist)
  $('#hideBucketlists').on('click', onClearBucketlists)
  $('#seeBucketlists').on('click', onGetBucketlists)
  $('#bucketlist-update').on('submit', onUpdateBucketlist)
  $('#bucketlist-delete').on('submit', onDeleteBucketlist)
}

module.exports = {
  addHandlers
}
