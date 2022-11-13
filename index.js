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

log(Object.keys(obj2UsingAssign), Object.values(obj2UsingAssign));

let arrayOFArray = Object.entries(obj2UsingAssign);

log(arrayOFArray);

let objFromArrayofArray = Object.fromEntries(arrayOFArray);
log(objFromArrayofArray);

// enumeration in javascript object
var tempObject = {};

for (let key in infoAboutGetSetObj) {
  if (key === 'name' || key === 'salutationTitle') {
    // lefthandside creating new object keys completely dynamic or at the time of program execution
    // righthandside is accessing the old values from the object whichever is available for that dynamic key
    //using ternary
    // tempObject[key] =
    //   typeof infoAboutGetSetObj[key] === 'function'
    //     ? infoAboutGetSetObj[key]()
    //     : infoAboutGetSetObj[key];
    // using if else
    if (typeof infoAboutGetSetObj[key] === 'function') {
      tempObject[key] = infoAboutGetSetObj[key]();
    } else {
      tempObject[key] = infoAboutGetSetObj[key];
    }
  }
}

log(tempObject);

// real time js object implmentation
var data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

//name sort
// pagination using object
// id filters like odd ids separately and even ids separately
// email smallercase

//ascending sort
//descending sort

let asc = (firstEle, secondEle) =>
  firstEle.name.toLowerCase().localeCompare(secondEle.name.toLowerCase());
let desc = (firstEle, secondEle) =>
  secondEle.name.toLowerCase().localeCompare(firstEle.name.toLowerCase());

let nameSortedData = data.sort(desc);
// console.log(nameSortedData.map(i=>i.name))

let paginatedData = {
  config: {
    start: null,
    limit: null,
    data: null,
  },
  _page: null,
  get page() {
    return this._page;
  },
  set page(val) {
    this._page = val;
  },

  get newData() {
    if (!this.config.data) {
      console.error('you need to configure the data');
      return;
    }
    if (!this.config.start && !this.config.limit) {
      console.error('add limit and start configuration');
      return;
    }

    if (this.page > this.config.data.length / this.page) return null;

    return this.config.data.slice(this.config.start, this.config.limit);
  },
};

log(nameSortedData.slice(2, 4));

paginatedData.config.data = nameSortedData;
paginatedData.config.start = 2;
paginatedData.config.limit = 4;
paginatedData.page = 2;
log(paginatedData.newData);

// TODO:
// need to implement pagination  logc
