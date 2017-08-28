module.exports = {
  // bindEvents() {
  //   const playicons = document.querySelectorAll('.play-icon-container');
  //   const closeicons = document.querySelectorAll('.close-icon');
  //
  //   playicons.forEach(icon => {
  //     icon.addEventListener('click', () => {
  //       const movie = icon.attributes['data-movie'].value;
  //       this.toggleTrailer(movie);
  //     });
  //   });
  //
  //   closeicons.forEach(icon => {
  //     icon.addEventListener('click', () => {
  //       const movie = icon.attributes['data-movie'].value;
  //       this.toggleTrailer(movie);
  //     });
  //   });
  // },
  //
  // toggleTrailer(movie) {
  //   const container = document.querySelector(`.day-outer-container[data-movie=${movie}]`);
  //   const inner = container.getElementsByClassName('day-inner-container')[0];
  //   const trailer = container.getElementsByClassName('trailer-container')[0];
  //
  //   inner.classList.toggle('trailer');
  //   trailer.classList.toggle('active');
  // },
  //
  // init() {
  //   this.bindEvents();
  // }
}
