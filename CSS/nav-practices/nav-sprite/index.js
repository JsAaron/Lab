!function ($) {
  'use strict'

  $('nav>a').click(function() {
    var $this = $(this)
    if (!$this.hasClass('active')) {
      $('nav>.active').removeClass('active')
      $this.addClass('active')
    }
  })

}(jQuery)