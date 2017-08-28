const Handlebars = require('handlebars');

module.exports = {
  movie: null,
  trailer: null,

  removeTrailers() {
    const trailers = document.querySelectorAll('.trailer-container.active');
    trailers.forEach(trailer => {
      trailer.innerHTML = '';
    });
  },

  buildTemplate(movieId, trailerId) {
    const trailerTemplate = document.getElementById('trailer-template');
    const source = trailerTemplate.innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      trailer: this.trailer
    };
    const html = template(context);

    this.insertTemplate(html);
  },

  insertTemplate(html) {
    const container = document.querySelector(`.day-outer-container[data-movie=${this.movie}]`);
    const trailer = container.querySelector('.trailer-container');

    this.toggleContainerClasses(container);

    trailer.classList.add('active');
    trailer.innerHTML = html;

    this.bindCloseIcon();
  },

  toggleContainerClasses(container = null) {
    const currentActive = document.querySelector('.day-outer-container.trailer');
    if (currentActive) currentActive.classList.remove('trailer');
    if (container) container.classList.add('trailer');
  },

  bindCloseIcon() {
    const close = document.querySelector('.close-icon');
    close.addEventListener('click', () => {
      this.removeTrailers();
      this.toggleContainerClasses();
    });
  },

  init(movieId, trailerId) {
    this.removeTrailers();

    this.movie = movieId;
    this.trailer = trailerId;

    this.buildTemplate();
  }
}
