//create "reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');

//append to webpage
$('.spoiler').append($button);

// Hide spoiler on page load
$('.spoiler span').hide();

//when button= pressed, show spoiler & hide button
$('.spoiler button').click(function(){
  let button = $('.spoiler button');
  let spoilerText = $('.spoiler span');

  button.hide();
  spoilerText.show();
});
