const trailer = require('./modules/trailer');
const calendar = require('./modules/movieBuilder');
const firebase = require('./modules/firebase');

(function() {
  "use strict"

  firebase.init();
  calendar.init();
})();
