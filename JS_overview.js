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

