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
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, document.options);
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