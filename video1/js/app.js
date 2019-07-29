$('.spoiler').on('click', 'button', function(e){
  console.log(event.target);
  //when button= pressed, show spoiler & hide button
    // let button = $('.spoiler button');
    let spoilerText = $('.spoiler span');

    $(e.target).hide();
    // spoilerText.show();
});

//create "reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');

//append to webpage
$('.spoiler').append($button);

// Hide spoiler on page load
$('.spoiler span').hide();

//when button= pressed, show spoiler & hide button
// $('.spoiler button').on('click', function(){
//   let button = $('.spoiler button');
//   let spoilerText = $('.spoiler span');
//
//   button.hide();
//   spoilerText.show();
// });
