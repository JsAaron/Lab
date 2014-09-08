!function() {
$(window).on('scroll', function () {
  
  var scrollTop = $(document).scrollTop(),
      activeLi = $('#sidenav li.active').first();
     
  if (activeLi.length <= 0) {
     $('#sidenav li').first().addClass('active');
  } else {
    var activeSec = $(activeLi.find('a').attr('href'));
    if (activeSec.offset().top + activeSec.outerHeight() <= scrollTop) {
      activeLi.removeClass('active');
      activeLi.next().addClass('active');
    } else {
      var preActiveLi = activeLi.prev();
      if (preActiveLi.length > 0) {
        var preActiveSec = $(preActiveLi.find('a').attr('href'));
        if (preActiveSec.offset().top - scrollTop >= 0) {
          activeLi.removeClass('active');
          preActiveLi.addClass('active');
        }
      }
    }
  }
 
});

$('nav li').on('click', function() {
  $('nav li.active').removeClass('active');
  $(this).addClass('active');
});
  
}();