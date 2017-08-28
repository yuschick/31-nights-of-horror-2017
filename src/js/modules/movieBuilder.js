const Handlebars = require('handlebars');
const util = require('./../util');
const Trailer = require('./trailer');

module.exports = {
  dates: [{
      theme: 'Slow Burn',
      day: 'Sunday'
    },
    {
      theme: '',
      day: 'Monday'
    },
    {
      theme: '',
      day: 'Tuesday'
    },
    {
      theme: 'WTF',
      day: 'Wednesday'
    },
    {
      theme: 'Bloodthirsty',
      day: 'Thursday'
    },
    {
      theme: 'Festive',
      day: 'Friday'
    },
    {
      theme: 'Sequel',
      day: 'Saturday'
    }
  ],
  movies: [{
      title: 'The VVitch',
      details: {
        backdrop: 'https://filmgrab.files.wordpress.com/2016/09/thewitch022.jpg',
        release: '2016-02-09',
        language: 'English',
        description: "New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. 'The Witch' is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inescapable evil."
      },
      links: {
        trailer: 'gud8viI-P7Q',
        imdb: 'tt4263482',
        youtube: 'itDbDcDHBRQ',
        amazon: 'https://www.amazon.com/gp/product/B01BT3SCUG'
      },
      arrows: {
        top: true,
        bottom: true
      }
    },
    {
      title: '30 Days of Night',
      details: {
        backdrop: 'https://filmgrab.files.wordpress.com/2016/09/thewitch022.jpg',
        release: '2016-02-09',
        language: 'English',
        description: "New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. 'The Witch' is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inescapable evil."
      },
      links: {
        trailer: 'gud8viI-P7Q',
        imdb: 'tt4263482',
        youtube: 'itDbDcDHBRQ',
        amazon: 'https://www.amazon.com/gp/product/B01BT3SCUG'
      },
      arrows: {
        top: true,
        bottom: true
      }
    },
    {
      title: 'Something Else',
      details: {
        backdrop: 'https://filmgrab.files.wordpress.com/2016/09/thewitch022.jpg',
        release: '2016-02-09',
        language: 'English',
        description: "New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. 'The Witch' is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inescapable evil."
      },
      links: {
        trailer: 'gud8viI-P7Q',
        imdb: 'tt4263482',
        youtube: 'itDbDcDHBRQ',
        amazon: 'https://www.amazon.com/gp/product/B01BT3SCUG'
      },
      arrows: {
        top: true,
        bottom: true
      }
    }
  ],
  allContainers: null,
  id: 1,
  index: 0,

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
    movie.date.theme = this.dates[this.index].theme;
    movie.date.day = this.dates[this.index].day;
    movie.arrows.top = this.id === 1 ? false : true;
    movie.arrows.bottom = this.id === 31 ? false : true;

    return movie;
  },

  bindEvents() {
    // Bind the date nav arrows

    // Bind play icons
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

      this.loadImage(movie.details.backdrop, containerID);

      this.index = this.index++ === 7 ? 0 : this.index++;
      this.id++;
    });
  },

  init() {
    // Make reuqest to movies JSON
    // Make reuqest to day/themes JSON
    
    this.buildAllMovies();
  }
};
