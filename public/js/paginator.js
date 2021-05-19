$(document).on("click", ".previous", function () {

  const first = $(this).siblings().first();

  if(!first.hasClass("active")) {
    const active = $(this).siblings(".active");
    const prevItem = active.prev();
    const link = prevItem.children("a").prop("href");
    active.removeClass("active");
    prevItem.addClass("active");
    window.location.href = link;
  }
});


$(document).on('click', '.next', function() {
//  console.log($(this).siblings());
//  const first = $('.pagination li .pageEl').first().add('active');
//  console.log(first);
  const last = $(this).siblings().last();
  
  if (!last.hasClass('active')) {
    const active = $(this).siblings('.active');
    //   console.log($(this));
    //  console.log(active);
      const nextItem = active.next();
      
      const link = nextItem.children('a').prop('href');
      // console.log(nextItem)
      console.log(link);
      active.removeClass('active');
      nextItem.addClass('active');
      window.location.href = link;
  }
  
 

});