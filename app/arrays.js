exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      let _sum=0;
      arr.forEach(item=>{_sum+=item});
      return _sum;
  },

  remove: function(arr, item) {
      let index = arr.indexOf(item);
      while(index!==-1){
        arr.splice(index,1);
        index = arr.indexOf(item);
      }
      return arr;
  },

  removeWithoutCopy: function(arr, item) {
      
  },

  append: function(arr, item) {
        arr.push(item);
        return arr;
  },

  truncate: function(arr) {
     let index = arr.length-1;
     arr.splice(index);
     return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
      
      let sum = arr.filter((ele)=>{
        return (ele===item)
          
      });
      return sum.length;
  },

  duplicates: function(arr) {
     
    
  },

  square: function(arr) {
      return arr.map((item)=>{return item*item});
  },

  findAllOccurrences: function(arr, target) {
      let sum =[]; 

      arr.filter((ele,index)=>{
        if(ele===target){
            sum.push(index);
        }
      
      });

      return sum;
  }
};
