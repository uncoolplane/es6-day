var name = 'Becky';
var age = 23;

const myvar = "234";

age++;

console.log(name, age);

const namesArr = ['name1', 'name2', 'name3', 'name4'];

namesArr.push('newname'); //allowed
// namesArr = 'Brett';  won't allow, can't change to another type

var person = {
  name: 'Brett'
}

var teacher = person;
person.name ='Becky';

console.log('teacher', teacher.name);

//Arrays, Objects are both reference variables ... strings, numbers just point to data
//'Immutable --> strings, numbers, Mutable --> arrays, objects

//Changeable variables
let name2='Becky';

if(true) {
  let animal="Bear";
}

// console.log(let); won't work, allows you to declare variables with scope
console.log('name2', name2);

//usage
for(let i = 0; i < namesArr.length; i++) {
  console.log('arr', namesArr[i]); //-->>won't clutter variables being stored
}

//old way
var sayName = function(name) {
  console.log(name);
}

//new way
const sayNewName = (name) => 'Hello ' + name;

console.log(sayNewName('Mike'));

// function $http(){};

// $http({method:'Get', url: 'Apistuff'}).then(res=>res.data);

var person = {
  name: 'Becky',
  sayName: function() {
    return name;
  }
}

const sayName2 = (name) => {
  console.log(this.name); //doesn't know what "this" is, error, can't read "undefined"
}

person.sayName = sayName2;
person.sayName();


var string = "<h1><div></div></h1>"; //old way .. you have to use it all in one string

//ES6 -- Multi-line strings, use back-tick characters, adds new line character
//${XXX} -- use template strings to inject variables into string
var body = "BODY TEXT";
var cool = "Cool Text";
var newstr = `alksd flak jdsf
alksd jf;lak jsd;flka jsdf
laks djflak ${body} flk j

alks ${cool} sad

aklsdjflkasdj flkasdj f`;

//Old way
var name = 'Becky';
var salutation = "Hello"
var greeting = name + " " + salutation + "!";

//new way
var greeting2 = `Prefix text ${salutation} ${name2} ...What's going on'`

//Decoupling code

//old code
var user = ['Becky', 'admin', 'mypass', 5, 16, 23];

var userName = user[0];
var userPassword = user[1];

//new code
//list variables in order, '...' will slice remaining values and dump into an array
var [user_name, role, pass, ...nums] = user;

//assign values directly to an object
const user2 = {
  user2: 'name',
  role2: 'admin',
  pass2: 'pass',
  nums2: [2,3]

}
let {user2, role2, pass2, nums2} = user2;
console.log(user2)


/// '...' spread operator

var arr1 = [1,2,3];
var arr2 = [4,5,6];

var combine = [];
//old way...for loop to combine

//new way
combine = [...arr1,...arr2]

var newarr=[1,2,3, ...arr2];
console.log(newarr);

function sum(...arr) {
  var ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }

  return ans;
}

console.log(sum(1,2,3,4,5,6,6)); //using '...' allows you to decouple the list of numbers without creating an array

console.log(...newarr);

//object properties in shorthand
//old way

var property = 'password';
var person = {};
person[property] = 'name';
console.log(person);


//new way
var person2 = {
  [property]: 'MyPassword'
}
