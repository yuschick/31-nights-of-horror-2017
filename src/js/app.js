const trailer = require('./modules/trailer');
const calendar = require('./modules/movieBuilder');
const firebase = require('./modules/firebase');
const helpers = require('./modules/helpers');

(function() {
  "use strict"

  firebase.init();
  helpers.init();
  calendar.init();
})();
