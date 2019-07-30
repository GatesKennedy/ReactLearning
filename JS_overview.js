
/*
=================
Var vs Let vs Const
=================
*/
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

/*
Scope [ -> ]
    var -> entire function
    let -> block scope
    const -> block scope

Assignability [ ~> ]
    var ~> reassignable (re-write)
    let ~> reassignable (re-write)
    const ~> Not reassignable (Read-only)
*/

/*
=================
Objects
=================
*/

const person = {
    name: "Conor",
    walk() {            //  newer method syntax
        console.log(this);
    }               
};

person.talk();
person['name'] = 'Chuck';

const targetMember = 'someInputValue';    //  input field from user
person[targetMember.value] = 'Chuck';

/*
Object Members
    Key         =   Value
    Variables   =   'properties'
    Functions   =   'Methods'

    Accessing Members
        dot notation: if property is known (hard coded)
        bracket notation: used for dynamic member access
*/

/*
=================
'this' Keyword
=================
*/

/*
The value of 'this' is determined by how a function is called
    if function is called as a method in an object,
        'this' returns a reference to the object
    if function is called as a stand-alone function,
        'this' returns a reference to the global object (window object)

    ~'this' returns a reference to the parent object~

Functions in JavaScript ARE Objects
*/

/*
=================
Binding
=================
*/

/*
=================
Arrow Function
=================
*/

//  Before
const square = function(number) {
    return number * number;
}

//  Now (ES6)
const square2 = number => number * number;

//  Example 1
// Array
const jobs = [
    {id: 1, isActive: true },
    {id: 2, isActive: true },
    {id: 3, isActive: false },
];

    //  Before
const activeJobs = jobs.filter(function(job) {return job.isActive;});
    //  After
const activeJobs2 = jobs.filter(job => job.isActive);

/*
=================
Arrow Fxn with 'this' Keyword
=================
*/
//  Object 'person'
const person = {
    talk() {
        console.log("this", this);
    }
};
//  Call Fxn 'talk()'
person.talk();
//  Returns
    //  'this' > [ref to person object]

//==== BUTTT... =====

//  Object 'person'
const person = {
    talk() {
        setTimeout(function() {         //  Insert SetTimeout Fxn
            console.log("this", this);  //  'this' ref inside SetTimeout()
        }, 1000);
    }
};
//  Call Fxn 'talk()'
person.talk();
//  Returns
    //  'this' > [ref to Window Object]
    //  explain: setTimeout is a 'stand-alone' funtion
    //              strict mode is not overridden 
    //              'this' will return the context of the containing Fxn()

//  USING ARROW FUNCTION
const person = {
    talk() {
        setTimeout(() => {              //  Insert SetTimeout Fxn
            console.log("this", this);  //  Arrow Fxn Does NOT reBind 'this'
        }, 1000);
    }
};
person.talk();
//  Returns
    //  'this' > [ref to person Object]

/*
=================
Array.map Method
=================
*/
//  Define Array
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
//  returns: ["<li>red</li>", "<li>green</li>", ...etc]

/*
=================
Object Destructuring
=================
*/
//  Given 'address' object
const address = {
    street: '',
    city: '',
    country: ''
};

//  Before
const street = address.street;
const city = address.city;
const country = address.country;
//  Destructuring syntax
const { street, city, country } = address; //   Same as 'Before'
                                            //  creates 3 new constants
//  Destructuring Aliases
const { street: st } = address;     //  Creates new const called 'st'
                                    //  st === address.street
/*
=================
Operator: Spread Operator
=================
*/
//  Define Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
//  Before
const combined = first.concat(second);
//  ES6
const combined = [...first, ...second];
//  Usage: Insert
const combined = [...first, 'a', ...second, 'b'];
//  Usage: Clone
const clone = [...first];   //  clones the first[] array
//========
//  Objects with Spread
const firstObj = { name: "Dale" };
const secondObj = { job: "Sales" };

const combinedObj = { ...first, ...second, location: "Australia" };
    // Adds a combines first, second and adds a property 'location
console.log(combinedObj);

/*
=================
Classes
=================
*/
//  Classes ARE objects in JS
//  Define Class 'Person'
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
const person = new Person('Dale');

/*
=================
Inheritance
=================
*/
class Teacher extends Person {
    teach() {
        console.log("teach")
    }
}
const teacher = new Teacher('Chuck');

//==== Custom Constructor in Child Class
class Teacher extends Person {
    constructor(name, degree) {
        super(name);            //  Initialize 'name' from Person Class
        this.degree = degree;   //  Initialize 'degree'
    }
    teach() {
        console.log("teach")
    }
}
const teacher = new Teacher('Chuck', 'BSME');   //  Contains both props
teacher.teach();    //  Contains both methods teach() and walk()
teacher.walk();

/*
=================
Modules
=================

Modules
    Seperate JS files are considered modules
        Break up Classes into separate files
        Classes ARE objects in JS

        Each Module (JS file) needs to be **EXPORTED
            Named Exports
            CODE:
                export function() { <functionLogic> }

        Each Module (JS file) needs to be **IMPORTED
            Import modules are defined in package.json
            CODE:
                import { Teacher } from "<relativePath>";

        Default Exports
            import ... from '';
        Named Exports
            import { ... } from '';

*/
