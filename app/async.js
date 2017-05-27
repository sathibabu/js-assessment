exports = typeof window === 'undefined' ? global : window;


exports.asyncAnswers = {
  async: function(value) {
    let promise = new Promise((resolve,reject)=>{
              resolve(value);
    });

    return promise;
  },

  manipulateRemoteData: function(url) {
     let promise = new Promise((resolve,reject)=>{
         	
         	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
			    httpRequest = new XMLHttpRequest();
			} else if (window.ActiveXObject) { // IE 6 and older
			    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
            
            httpRequest.onreadystatechange = function(){

            	  if (httpRequest.readyState === XMLHttpRequest.DONE) {
				      if (httpRequest.status === 200) {
				      	let response = JSON.parse(httpRequest.responseText);
				      	let result = [];
				      	for(let person of response.people){
				      		result.push(person.name)
				      	}
				      	//console.log()
				        resolve(result.sort());
				      } else {
				      	
				        reject('error');
				      }
			    }

            }

			httpRequest.open('GET', url);
			httpRequest.send();

     });

     return promise;
  }
};
