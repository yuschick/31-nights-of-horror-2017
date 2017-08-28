const Handlebars = require('handlebars');
const util = require('./../util');

module.exports = {
  dates: [
    {
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
  movies: [
    {
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

  loadImage(path, ref) {
    const img = document.createElement('img');
    img.src = path;

    img.addEventListener('load', () => {
      this.allContainers[ref].style.backgroundImage = `url(${path})`;
      this.allContainers[ref].style.backgroundSize = 'cover';
      this.allContainers[ref].classList.add('loaded');
    }, false);
  },

  init() {
    const main = document.getElementsByTagName('main')[0];
    const movieTemplate = document.getElementById('movie-template');
    const source = movieTemplate.innerHTML;
    const template = Handlebars.compile(source);
    let id = 1;
    let index = 0;
    let containerID;

    this.movies.map(movie => {
      movie.id = id < 10 ? `0${id}` : id;
      movie.label = util.formatString(movie.title);
      movie.date = {};
      movie.date.theme = this.dates[index].theme;
      movie.date.day = this.dates[index].day;
      movie.arrows.top = id === 1 ? false : true;
      movie.arrows.bottom = id === 31 ? false : true;

      let context = movie;
      let html = template(context);
      main.innerHTML += html;

      this.allContainers = document.querySelectorAll('.day-outer-container');
      containerID = id - 1;

      this.loadImage(movie.details.backdrop, containerID);
      index = index++ === 7 ? 0 : index++;
      id++;
    });
  }
};
