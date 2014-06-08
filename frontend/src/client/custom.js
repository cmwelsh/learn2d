'use strict';

var $ = require('jquery');

var router = require('../router');

router.configure({
  html5history: true
});
router.init();

$(document).on('click', 'a', function(event) {
  var href = $(this).attr('href');

  if (href.slice(0,1) === '/') {
    event.preventDefault();

    router.setRoute(href);
  }
});
