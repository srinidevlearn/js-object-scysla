// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Object</h1>`;

// Why object ? - key value pair - key is always unique - it is comma separated
// Benefit of using Objects - framwork,busines logics,used as container for data
// How to intialize objects in JS ? - 3
// What is props and methods in js
// destructuring in JS obj !!!

const log = (...args) => console.log(...args);

//Object literal
var obj = {
  name: 'obj', // properties // props
  lastName: 'R', // properties
  'data-id': 1,
  fullName: function () {
    return this.name + ' ' + this.lastName;
  }, //method
};

//Object.assign or new Object

var obj2 = new Object({ name: 'obj2', lastName: 'R', fullName: null });
var obj2UsingAssign = Object.assign(
  {},
  { name: 'obj2UsingAssign', lastName: 'R', fullName: null }
);

//by using functions
function personInfo(name, lastName, data) {
  this.name = name;
  this.lastName = lastName;
  this.fullName = this.name + ' ' + this.lastName;
}

var personObject = new personInfo('person', 'R', null);

log(personObject);

var sanjayObj1 = new personInfo('sanjay', null, null);
var sivaObj2 = new personInfo('siva', null, null);

var sathishObj2 = new personInfo('satish', null, null);

log(sanjayObj1);
log(sivaObj2);
log(sathishObj2);

console.log(obj.name); //accessing values from object
console.log(obj['name']); //accessing values from object 'data-id' obj['data-id]
console.log(obj['data-id']);

// let name = obj.name;
// let lastName = obj.lastName;
// intro to destructuring
let { name, lastName } = obj;
let dataId = obj['data-id'];

console.log(name, lastName, dataId);

//getter-setter if we want to intercept the properties

let infoAboutGetSetObj = {
  // name
  _name: null,
  get name() {
    return this._name;
  },
  set name(val) {
    log('name prop was updated');
    this._name = val;
  },

  //title

  _title: null,

  //gender

  _gender: null,
  get gender() {
    return this._gender;
  },
  set gender(val) {
    this._title = val === 'M' ? 'Mr.' : 'Mrs.';
    this._gender = val;
  },

  salutationTitle: function () {
    return this._title + ' ' + this.name;
  },
};

infoAboutGetSetObj.name = 'Srini';
// infoAboutGetSetObj.name = 'sathish';
// infoAboutGetSetObj.name = 'sanjay';
// infoAboutGetSetObj.name = 'siva';
infoAboutGetSetObj.gender = 'M';

log(infoAboutGetSetObj.name); //srini

log(infoAboutGetSetObj.salutationTitle()); //srini
