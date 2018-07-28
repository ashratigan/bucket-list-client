'use strict'

// const showPlacesTemplate = require('../templates/book-listing.handlebars')

const getPlanetsSuccess = (data) => {
  $('#contentH').html(`${data.name}`)
  $('#contentP').html(`The climate here is ${data.climate} and the terrain is ${data.terrain}`)
  $('#contentP2').html(`The population is ${data.population}`)
}

const getPlacesSuccess = (data) => {
  $('#contentH').html(`${data.place.city}`)
  $('#contentP').html(`Located in ${data.place.province}, ${data.place.country}`)
  $('#contentP2').html(`The population is ${data.place.pop}`)
}

const failure = () => {
  $('#contentH').html(`Oops, something went wrong!`)
  $('#contentP').html(``)
  $('#contentP2').html(``)
}

module.exports = {
  getPlanetsSuccess,
  getPlacesSuccess,
  failure
}
