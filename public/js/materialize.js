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

// Audio
function play() {
  const audio = document.getElementById('pallet');
  audio.volume = 0.10;
  audio.loop = true;
  if (audio.paused) { audio.currentTime = 0; audio.play(); } else audio.pause();
};

// Autocomplete search bar
const getCardNames = async () => {
  const results = await fetch('https://api.pokemontcg.io/v2/cards');
  const data = await results.json();
  const cards = data.data;
  const cardNames = cards.map((card) => card.name);
  const nameMap = {};
  for (const el of cardNames) {
    nameMap[el] = null;
  }
  return nameMap;
};

document.addEventListener('DOMContentLoaded', async () => {
  const elems = document.querySelectorAll('input.autocomplete');
  const instances = M.Autocomplete.init(elems, {
    data: await getCardNames(),
    minLength: 1,
    limit: 20,
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
  $('.btn1').floatingActionButton({
    direction: 'left',
    hoverEnabled: false,
  });
  $('.btn2').floatingActionButton({
    direction: 'top',
  });
});

// Preloader for Pokedex Page
$(window).on('load', () => {
  $('.progress').delay(250).fadeOut();
});

// homepage audio

function play() {
  const audio = document.getElementById('pallet');
  audio.volume = 0.25;
  audio.loop = true;
  if (audio.paused) { audio.currentTime = 0; audio.play(); } else audio.pause();
}

// reveal

$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});

// pop out button
$('.chat-button').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up #close').click(function(){
  $('.pop-up').removeClass('open');
});

// animated button
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
