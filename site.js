console.log("External file");

var city = "";
var cityFrom = "";
var cityName = "New York City";
var x =32;

console.log("cityName, x: ", cityName, x)

var firstname = "hortencia" , lastname = "cisneros";
console.log("firstname,lastname", firstname, lastname);

var num = 2019;
var numString = "2019";
console.log("x + num = ", (x+num)); // x + num = - 2051
console.log("x + numString = ", (x+numString)) // x + num

var s = "2019";
var s2 =parseInt("2019") + s;
var n = 2001;
console.log("age: ", s - n);
console.log("age: ", s + n);
console.log("age: ", s + parseInt(n) );

var escapequotes = "This is hortencia's \"name";
console.log ("escapequotes: ", escapequotes);


var mystring="This is my string.";
var stringLength= mystring.length;
console.log("stringLength:", stringLength);
var convertoupperCase = mystring.toUpperCase();
console.log("convertoupperCase: ", convertoupperCase, mystring.toupperCase);


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
  var myObj = {}
  console.log(myObj)
  var myObj = {
  	  "state": "New York",
  	  "zipcode": 10027
  	}
  	console.log("object: ", myObj.zipcode)

  	var myArray = new Array;
  	console.log(myArray)
  	myArray = ["Monday", "Tuesday", "Sunday"];
  	console.log(myArray, myArray[2])       