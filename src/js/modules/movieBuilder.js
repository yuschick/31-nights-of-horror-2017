const Handlebars = require('handlebars');
const util = require('./../util');
const Trailer = require('./trailer');
const firebase = require('./firebase');

module.exports = {
  themes: null,
  movies: null,
  allContainers: null,
  id: 1,
  index: 0,

  fetchMovies() {
    return firebase.fetch('movies');
  },

  fetchThemes() {
    return firebase.fetch('themes');
  },

  loadImage(path, ref) {
    const img = document.createElement('img');
    img.src = path;

    img.addEventListener('load', () => {
      this.allContainers[ref].style.backgroundImage = `url(${path})`;
      this.allContainers[ref].style.backgroundSize = 'cover';
      this.allContainers[ref].classList.add('loaded');
    }, false);
  },

  buildMovieObject(movie) {
    movie.id = this.id < 10 ? `0${this.id}` : this.id;
    movie.label = util.formatString(movie.title);
    
    movie.date = {};
    movie.date.theme = this.themes[this.index].theme;
    movie.date.day = this.themes[this.index].day;
    movie.date.happyhalloween = this.id === 31 ? 'Happy Halloween!' : false;

    movie.arrows = {};
    movie.arrows.top = this.id === 1 ? false : true;
    movie.arrows.bottom = this.id === 31 ? false : true;

    return movie;
  },

  bindEvents() {
    const playIcons = document.querySelectorAll('.play-icon-container');
    playIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const movieId = this.attributes['data-movie'].value;
        const trailerId = this.attributes['data-trailer'].value;
        Trailer.init(movieId, trailerId);
      });
    });
  },

  buildTemplate(context) {
    const movieTemplate = document.getElementById('movie-template');
    const source = movieTemplate.innerHTML;
    const template = Handlebars.compile(source);
    const html = template(context);

    this.insertTemplate(html);
  },

  moveToDate() {
    const rightNow = new Date();
    const month = rightNow.getMonth();

    if (month === 9) {
      let date = rightNow.getDate();
      let section;
      let pos;

      if (date < 10) {
        date = `0${date}`;
      }

      section = document.getElementById(date);
      pos = section.offsetTop;
      window.scroll(0, pos - 25);
    }
  },

  insertTemplate(html) {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += html;
  },

   buildAllMovies() {
    let html;
    let containerID;

    this.movies.map(movie => {
      let context = this.buildMovieObject(movie);
      this.buildTemplate(context);

      this.allContainers = document.querySelectorAll('.day-outer-container');
      containerID = this.id - 1;
      this.loadImage(movie.images.backdrop, containerID);

      this.index++;
      if (this.index > 6) this.index = 0;

      this.id++;
    });

    this.moveToDate();
  },

  init() {
    Promise.all([this.fetchMovies(), this.fetchThemes()]).then((data) => {
      this.movies = data[0];
      this.themes = data[1];

      const main = document.getElementsByTagName('main')[0];
      main.innerHTML = '';

      this.buildAllMovies();
      this.bindEvents();
    });
  }
};
