function hello(message) {
	// body...
	console.log("hello world!", message);
}

hello("hortencia");

var navbar= {
	"home":{
		"url":"index.html",
         "heading": "home"
	},
	"stills": {
		"url": "stills.html",
		"heading": "stills"
	},
	"travel":{
		"url": "travel.html",
		"heading": "travel"
	},
	"contact":{
		"url": "contact.html",
		"heading": "Contact Us"
	}
};

// For loops: Enumerative
var location = 0 ;
function navigationbar(pageID,logo) {
	console.log("pageID", pageID, logo, typeof navbar);
	 if (typeof navbar === "object") {
	 	console.log("yes");
	 	for (var n in navbar){
	 		console.log("n ->", navbar);
	 		console.log("navbar ->", navbar);
	 		document.getElementbyId("navbarUL")
	 		  .appendChild(
	 		  	 document.createElementbyId('li')
	 		  	 )
	 		  .setATTRIBUTE('class', 'item');

	 		  var nav;
	 		  if (pageID === "home") {
	 		  	//<a href="index.html#home">Home</a>
	 		  	nav = '<a href="'+navbar[pageID]+'#home">Home</a';
	 //		  	nav = '<a href="'+navbar[pageID].url+'#'+n+'">'+navbar[n].heading+'</a
	      } else {
	 		  nav = '<a href="'+navbar[n].url+'">'+navbar[n].heading+'</a>'
	      }
	 	}
	 	document.getElementsbyTagName("li")(l)[location].innerHTML = nav;

	 	location++;
	 	console.log('l++',location);
	 	}

	 } else {
   console.log("error");
   for( var n in navbar){

   }
} else{
	console.log("error");
}

 }
navigationbar("home","img/logo.png");	
	