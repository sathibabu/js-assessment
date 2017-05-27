exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	setTimeout({},100);
      for(let i=start; i<=end;i++){
      	setTimeout({},100);
      }
  }
};
