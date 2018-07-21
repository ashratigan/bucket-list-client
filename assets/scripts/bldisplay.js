// Check off specific todos by clicking
$('.bldisplay').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

// Click on X to delete todo
// $("ul").on("click", "span", function (event) {
//   $(this).parent().fadeOut(500, function () {
//     $(this).remove()	
//   })
//   event.stopPropagation()
// })

// add event listener to add todo
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    const todoText = $(this).val()
    $(this).val('')
    // create new li and add to ul
    $('ul').append('<li>' + todoText + '</li>')
  }
})

$('h1').click(function () {
  $("input[type='text']").fadeToggle()
})