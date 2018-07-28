'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPlanets = (event) => {
  event.preventDefault()
  api.getPlanets()
    .then(ui.getPlanetsSuccess)
    .catch(ui.failure)
}

const onGetPlaces = (event) => {
  event.preventDefault()
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPlanetsButton').on('click', onGetPlanets)
  $('#getPlacesButton').on('click', onGetPlaces)
}

module.exports = {
  addHandlers
}
