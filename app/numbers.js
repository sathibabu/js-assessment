exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	let str = num.toString(2);
    let index = str.length-bit;
    return parseInt(str.charAt(index));
  },

  base10: function(str) {
        return parseInt(str,2);
  },

  convertToBinary: function(num) {

  		return ('00000000'+num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
  		return (a*b).toFixed(1);
  }
};
