console.log("External file");

var city = "";
var cityFrom = "";
var cityName = "New York City";
var x = 32;

console.log("cityName, x: ", cityName, x)

var firstname = "hortencia" , lastname = "cisneros";
console.log("firstname,lastname", firstname, lastname);

var num = 2019;
var numString = "2019";
console.log("x + num = ", (x+num)); // x + num = - 2051
//console.log("x + numString = ", (x+numString)); // x + num

var s = "2019";
var s2 =parseInt("2019") + s;
var n = 2001;
console.log("age: ", s - n);
console.log("age: ", s + n);
console.log("age: ", s + parseInt(n) );

var escapequotes = "This is hortencia's \"name";
console.log ("escapequotes: ", escapequotes);


var mystring="This is my string.";
var stringLength = mystring.length;
console.log("stringLength:", stringLength);
var convertoupperCase = mystring.toUpperCase();
console.log("convertoupperCase: ", convertoupperCase, mystring.toUpperCase());

var x = 3.14; //a number with decimals
var y = 3;    // A number without decimals
console.log("x + y = ",(x+y), x);  // 6.140000000000001 - 3.14

var a = 0.2 + 0.1;     // x will be 0.30000000000000004
var d = (0.2 * 10 + 0.1 * 10) / 10;     // x will be 0.3

/*
Math
  The Javascript Math oject allows you to perfrom mathematical tasks on numbers
  */
  var xy = (x+y);
  var m = Math.round(xy);
  console.log("m: ",m);

  var show_random_num = Math.random();
  console.log("show_random_num:", show_random_num);

  /*Boolen*/
  console.log("cityName: ", Boolean(cityName), cityName);
  console.log("city: ", Boolean(city), city);
  var x = null;
  console.log("x:", Boolean(x));

  console.log("City From: ", cityFrom, Boolean (cityFrom));
  cityfrom = "Brooklyn";
  console.log("city from: ", cityFrom, Boolean (cityFrom));

  /* objects */
  var myObj = {};
  console.log(myObj);
  myObj = {
  	  "state": "New York",
  	  "zipcode": 10027
  	}
  	console.log("object: ", myObj.zipcode);


 var myArray = new Array;
 console.log("myArray: ",myArray);
 myArray = [0, 1, 2, 'string1','string2', 'string3', true, false];
 console.log("myArray, myArray[2]:", myArray, myArray[2]);
console.log("myArray: ", myArray[5])
var daysoftheweek =[
     "Sunday",
     "Monday" ,
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
    ];
    console.log(daysoftheweek, daysoftheweek[0]);
    var d = new Date();
    console.log("date;", d)
    var getweekDay = d.getDay();
    console.log("daysoftheweek", daysoftheweek[getweekDay], " getweekday" , getweekDay)
 var arrayofstuff =[
 {'name': 'judi'},
 [3,4,5],
  'nifty'
  ]
  console.log("arrayofstuff", arrayofstuff.length);

  var nycBoroughs = [
  'Manhatten',
  'Brooklyn',
  'Queens',
  'Bronx',
  'Staten Island'
  ];
  console.log('nycBoroughs:' , nycBoroughs, nycBoroughs[3])

nycBoroughs[3] = "The Bronx";
console.log('boroughs: ' , nycBoroughs, nycBoroughs[3])

/* 
 pushing list items to the end of an array
 */
 console.log('nycBoroughs.length: ' , nycBoroughs.length);
 nycBoroughs[nycBoroughs.length] = "Westchester";
 console.log('extra boroughs:' , nycBoroughs)
 nycBoroughs.push("yonkers")
 console.log('push boroughs:',nycBoroughs)

 nycBoroughs.pop();
 console.log('pop boroughs:' , nycBoroughs)
 nycBoroughs.pop(3);
 console.log('pop(3) boroughs:' , nycBoroughs)

 //shift(): remove an item the array
 nycBoroughs.shift();
 console.log('shift boroughs: ', nycBoroughs);

 //unshift(): add items to the beginning of an array
 nycBoroughs.unshift('Long Island');
 nycBoroughs.unshift('Hudson Valley','Albany');
 console.log('unshift boroughs: ', nycBoroughs);
 console.log('unshift() returns length: ' , nycBoroughs.unshift()); //unshift()
 
 //splice where you want to start, hown many to remove)
 nycBoroughs.splice(2, 2)
 console.log('splice boroughs:', nycBoroughs)

  //Using a strict
  var one =1, two = 2;
  console.log('one = = = one',one=== one);
  console.log('one = one', one== one);
  console.log('one = = =two', one === two);
  console.log('one != = one',one != one);

 console.log('one < two', one < two);
 console.log('one > two', one> two);
 console.log('one<= two', one <= two);
 console.log('one>= two', one>= two);

 var animal1 = "cow";
 var animal2 ="bear";
 var animal3 ="tiger";
 var animal4 ="lion";
 // And
 console.log('animal &&', animal1 === "cow" && animal2 === "bear");

 //or
 console.log('one|| two', one || two);
 console.log('animal1 || animal2', animal1 === "cow"|| animal2 === "lion");

 //Not or Bang
 console.log("not true",!true);
 console.log("not false", !false);
 console.log('not animal1 || animal2', !(animal1 === "cow" || animal2 === "bear"));

 // If statements
 /*
 conpare the difference between alert and window confrim.
 window. confrim()
 */
  var answer = window.confrim("click ok, get true. click cancel, get false.");
  answer; // execute function

  // ('alert box'); 

  console.log("click answer: ", answer)
  if (answer === true) {
  	 console.log("you clicked ok.");

   // if else statement
   if (answer === true) {
   	  console.log("You clicked ok.");
   } else {
   	console.log("You clicked cancel.");
}

var answer = window.prompt("Type YES, NO, MAYBE. Then click ok");
if (answer === 'Yes'){
	console.log("You wrote YES.");
}
else if(answer === 'MAYBE'){
	console.log("You wrote MAYbe.");
}
else if(answer === 'NO') {
	console.log("You wrote NO.");
}
else {
	console.log('else answer', answer)
	//console.log('Boolean(answer.length) answer.length answer', Boolean(answer.length)
    // Bloolean(answer.length) answer.length
    if (answer) {
    	console.log("You wrote: ", answer);
    } else {
    	console.log("Empty");
    }


   switch(answer) {
   	case "YES":
   	//code block
   	console.log("You wrote YES.");
   	break;
   	case "MAYBE":
   	// code block
   	console.log("YOU wrote MAYBE.");
   	break;
   	case "NO":
   	// code block
   	console.log ("You wrote NO.");
   	break;
   	default:
   	// code block
   	console.log("You wrote:", answer);
  }

   // one line if statement
   var fname = "FristName"
   if (fname=== "FristName") console.log("first name", fname);

   var transportation = "bicycle", birthdayGift = "bicycle" , igot =false;
   //birthdayGift = "metrocard"
   if(transportation === birthdayGift) {
   	console.log("YAY!")
   	igot = false;
   	
   }
 var transport = "bicycle";
 //var transport = "subway";
 transport=== "bicycle"
  ? console.log("your transport is bicycle")
  : console.log("your transport is subway")
  //why we dont use semicoln?

  // ternary (conditional) operator setting a variable
  var transportType = transport === "bicycle" ? "type bicycle": "type subway";
  console.log("transporttype", transportType);
  //readablility
  var transportType = (transport === "bicycle") ? "type bicycle" : "type subway";

   // Type checking
   var thing = 12;
   console.log('typeof', typeof thing);
   var thing = "twelve";
   console.log('typeof');

   // for loops:sequential
   var i = 0; //set interger index
   console.log("i, daysoftheweek, daysoftheweek.length", i, daysoftheweek, daysoftheweek.length);
   // (index; when to stop; increments)

   for (i; i < daysoftheweek.length; i++){
   	daysoftheweek[i];
   	console.log('daysoftheweek[i]', daysoftheweek[i]);
   }

/*
 document.addEventListener('DOMContentLoaded', function(event) {
 	 console.log("ready!", event);

  	var welcome= "Web Basic";
		var intro = "this is a 9 week program with"
		var female= 3;
		var male = 2; 
		var totalofstudents = female+male;
		var introTxt = "test"

		console.log("welcome", welcome);
		console.log("intro", intro);
		console.log("Male", male);
		console.log("female",female);
		console.log("totalofstudents",totalofstudents);
		console.log("introTxt:", introTxt);

		document.getElementById('welcome').innerHTML=welcome;
		document.querySelector(".intro").innerHTML= introTxt;     
})
*/