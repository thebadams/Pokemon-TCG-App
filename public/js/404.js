$('.loading').height($(window).height());
$('.loading').width($(window).width());

$('.loading img').css({
  // paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
  paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
});

$(window).resize(() => {
  $('.loading').height($(window).height());
  $('.loading').width($(window).width());

  $('.loading img').css({
    // paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
  });
});

$(window).mousemove((e) => {
  $('.original').css({
    left: e.pageX - 16,
    top: e.pageY - 16,
  });
});

$('.page-404').on('click', (e) => {
  $('.original').clone(true).appendTo('.page-404').css({
    left: e.pageX - 16,
    top: e.pageY - 16,
  })
    .removeClass('original');
});
