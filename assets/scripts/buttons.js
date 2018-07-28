// function to toggle user info
$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})

// // function to hide bucketlists
// $(document).ready(function () {
//   $('#hideBucketlists').click(function () {
//     $('.bldisplay').css('display', 'none')
//   })
// })

// // function to see bucketlists
// $(document).ready(function () {
//   $('#seeeBucketlists').click(function () {
//     $('.bldisplay').css('display', 'block')
//   })
// })

// Function to toggle change password
$(document).ready(function () {
  $('#changePasswordButton').click(function () {
    $('#change-password-form').toggle()
    $()
  })
})

// Function to clear user sign in messages
$(document).ready(function () {
  $('#newGame').click(function () {
    $('#userMessage').text('')
    $('#userMessage').css('background-color', '222')
  })
})
