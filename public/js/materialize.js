// side nav for modile view
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, window.options);
});

// Carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, document.options);
});
