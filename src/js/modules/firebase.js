const firebase = require('firebase');

module.exports = {
  moviesDatabase: null,
  fetch(table) {
    return firebase.database().ref(`/${table}/`).once('value').then(data => {
      return data.val();
    });
  },

  post(movieId, type) {
    let movieData;
    firebase.database().ref(`/tracking/${movieId - 1}`).once('value').then(data => {
      movieData = data.val();
      movieData.tracking[type]++;

      firebase.database().ref(`/tracking/${movieId - 1}`).set(movieData);
    });
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
