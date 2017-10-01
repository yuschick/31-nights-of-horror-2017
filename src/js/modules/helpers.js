const Handlebars = require('handlebars');

module.exports = {
  init() {
    Handlebars.registerHelper("next", function(value)
    {
        const nextVal = parseInt(value) + 1;
        return nextVal < 10 ? `0${nextVal}` : nextVal;
    });

    Handlebars.registerHelper("prev", function(value)
    {
      const prevVal = parseInt(value) - 1;
      return prevVal < 10 ? `0${prevVal}` : prevVal;
    });
  }
}
