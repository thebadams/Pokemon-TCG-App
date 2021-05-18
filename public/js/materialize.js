// side nav for modile view
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, window.options);
});

// Carousel
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems, document.options);
});

// Modal

$(document).ready(() => {
  $('.modal').modal();
});

// Autocomplete search bar
// Make it so it gets the data from the api.
const pokeData = {
  Pikachu: null,
  Bulbasaur: null,
  Ivysaur: null,
  Charmander: null,
  Squirtle: null,
};

$(document).ready(() => {
  $('input.autocomplete').autocomplete({
    data: pokeData,
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});

$(document).ready(() => {
  $('#password-login, #password-signup').characterCounter();
});

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.collapsible');
  const instances = M.Collapsible.init(elems, document.options);
});

// Or with jQuery

$(document).ready(() => {
  $('.collapsible').collapsible();
});

function myFunction() {
  const x = document.getElementById('toggle');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// Floating Action Button

$(document).ready(() => {
  $('.fixed-action-btn').floatingActionButton({
    direction: 'left',
    hoverEnabled: false,
  });
});

// pagination logic

$(document).ready(() => {
  $('#data').after('<div id="nav"></div>');
  const rowsShown = 4;
  const rowsTotal = $('#data tbody tr').length;
  const numPages = rowsTotal / rowsShown;
  for (i = 0; i < numPages; i++) {
    const pageNum = i + 1;
    $('#nav').append(`<a href="#" rel="${i}">${pageNum}</a> `);
  }
  $('#data tbody tr').hide();
  $('#data tbody tr').slice(0, rowsShown).show();
  $('#nav a:first').addClass('active');
  $('#nav a').bind('click', function () {
    $('#nav a').removeClass('active');
    $(this).addClass('active');
    const currPage = $(this).attr('rel');
    const startItem = currPage * rowsShown;
    const endItem = startItem + rowsShown;
    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem)
      .css('display', 'table-row')
      .animate({ opacity: 1 }, 300);
  });
});

// Preloader for Pokedex Page
$(window).on('load', () => {
  $('.progress').delay(250).fadeOut();
});

