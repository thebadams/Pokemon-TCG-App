// side nav for modile view
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, window.options);
});

// Carousel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, document.options);
});

//Modal

$(document).ready(function(){
  $('.modal').modal();
});
        
// Autocomplete search bar
var pokeData = {
  "Pikachu": null,
  "Bulbasaur": null,
  "Ivysaur": null,
  "Charmander": null,
  "Squirtle": null,
};

$(document).ready(function () {
  $('input.autocomplete').autocomplete({
    data: pokeData,
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function (val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});

$(document).ready(function() {
  $('#password-login, #password-signup').characterCounter();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, document.options);
});

// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});


// $('.dropdown-button').dropdown({
//   inDuration: 300,
//   outDuration: 225,
//   constrain_width: false, // Does not change width of dropdown to that of the activator
//   hover: true, // Activate on hover
//   gutter: 0, // Spacing from edge
//   belowOrigin: false, // Displays dropdown below the button
//   alignment: 'left' // Displays dropdown with edge aligned to the left of button
// }
// );

$(document).ready(function() {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });
  var elems = document.querySelectorAll('.dropdown-button');
  var instances = M.Dropdown.init(elems, document.options);
});
