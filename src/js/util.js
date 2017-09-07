module.exports = {
  localStorage: {
    set(prop, value) {
      localStorage.setItem(prop, JSON.stringify(value));
    },
    get(prop) {
      let data = localStorage[prop] === undefined ?
        false :
        JSON.parse(localStorage[prop]);
      return data;
    },
    clear(prop) {
      localStorage.removeItem(prop);
      console.log(`${prop} cleared from localStorage.`);
    }
  },
  formatString(string) {
    let label = string.replace(/[0-9]/g, '').replace(/ /g,'-').replace(/'/g,'').replace(/:/g,'');
    while (label.charAt(0) === '-') {
     label = label.substr(1);
    }
    return label;
  }
}
