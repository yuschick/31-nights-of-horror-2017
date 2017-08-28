const trailer = require('./modules/trailer');
const calendar = require('./modules/movieBuilder');

(function() {
  "use strict"

  calendar.init();
  trailer.init();
})();
