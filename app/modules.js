exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
        
        let greeting = str1;
        let name = str2;

        function sayIt(){
        	return greeting+", "+name;
        }
  		return {greeting:str1,name:str2,sayIt:sayIt};
  }
};
