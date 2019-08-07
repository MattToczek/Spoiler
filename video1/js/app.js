$('.spoiler').on('click', 'button', function(event){
  console.log(event.target);
  
//Show Spoiler Text
    $(event.target).prev().show();

  // Hide Reveal Spoiler Button
    $(event.target).hide();
});

//create "reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');

//append to webpage
$('.spoiler').append($button);

// Hide spoiler on page load
$('.spoiler span').hide();

//when button= pressed, show spoiler & hide button
// $('.spoiler button').on('click', function(event){
//   console.log(event);
//   let button = $('.spoiler button');
//   let spoilerText = $('.spoiler span');
//
//   button.hide();
//   spoilerText.show();
// });
