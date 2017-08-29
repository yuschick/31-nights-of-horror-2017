const firebase = require('firebase');

module.exports = {
  database: null,
  fetch(table) {
    return firebase.database().ref(`/${table}/`).once('value').then(data => {
      return data.val();
    });
  },

  post(table, data) {
    // post shit
  },

  init() {
    const config = {
      apiKey: "AIzaSyDj19pdN2v4FPRgK89BRHOHUNf4T8eLwKY",
      authDomain: "horror-calendar-2017.firebaseapp.com",
      databaseURL: "https://horror-calendar-2017.firebaseio.com",
      projectId: "horror-calendar-2017",
      storageBucket: "horror-calendar-2017.appspot.com"
    };

    firebase.initializeApp(config);
    this.database = firebase.database();
  }
}
