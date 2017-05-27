exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
       fn();
       return arr[0]+', '+arr[1]+arr[2];
  },

  speak: function(fn, obj) {
       return fn.apply(obj);
  },

  functionFunction: function(str) {
      function fn(str1){
          return str+', '+str1;
      }
      return fn;
  },

  makeClosures: function(arr, fn) {
      

      let result = arr.map(item=>{
            return fn.bind(null,item);
         });

      return result;


  },

  partial: function(fn, str1, str2) {
      return fn.bind(this,str1,str2);
  },

  useArguments: function() {
      let sum =0;
      for(let i of arguments){
        sum+=i;
      }
      return sum;
  },

  callIt: function(fn) {
    let fnf = arguments.shift();
    return fn.bind(this,fnf);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
