'use strict'

let planetId = 0
$('#getPlanetsButton').click(function () {
  planetId = Math.floor(Math.random() * 60)
  return planetId
})

let placeId = 0
$('#getPlacesButton').click(function () {
  placeId = Math.floor(Math.random() * 13800)
  return placeId
})

const getPlanets = function () {
  return $.ajax({
    url: `https://swapi.co/api/planets/${planetId}/`
  })
}

const getPlaces = function () {
  return $.ajax({
    url: `https://desolate-plateau-52113.herokuapp.com/places/${placeId}`
  })
}

module.exports = {
  getPlanets,
  getPlaces
}
