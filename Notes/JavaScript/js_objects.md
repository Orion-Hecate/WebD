# javaScript Objects


## Objects
JavaScript supports extending data types. JavaScript objects are a great way to define custom data types. An **object** is an instance which contains a set of key value pairs. Unlike **primitive data types**, objects can represent multiple or complex values and can change over their life time. The values can be scalar values or functions or even array of other objects.
- **Object Initializers** - Like the primitive types, objects have a literal syntax: **curly braces** (`{ }`).
> var identifier= = {
    key1: value,
    key2: function() { // statements },
    key3: ['content1', 'content2']
}

- **Properties** - The content of an object are called properties (or **members**). They consist of a **name** (or key) and **value**. Property name must be strings or symbols and values can be any type. You can access the properties of an object with a simple **dot-notation**.

Example:
> var person = {
    fName: 'Silver',
    lName: 'Taurus',
    func: function() { return 'Hello!!!'; }
};
console.log(person.fName);
console.log(person.lName);
console.log(person.func());

Output:
> Silver
Taurus
Hello!!!

- **Object property Initializer (or Concise Method)** - In ES6, assigning a property value that mathches a property name, you can omit the property value. With the shorthand syntax, the JS engine looks in the containing scope for a variable with the same name. If it is found, that varaible's value is assigned to the property. If it is not found, a `Reference Error` is thrown.

Example1:
> var foo = 'bar'
var baz = { foo }
consolo.log(baz.foo)

Output1:
> bar

Example2 - *We can declare a method directly without the use of `function` keyword*:
> let fName = 'Silver', lName = 'Taurus';
let name = {
    fName,
    lName,
    getFullName() {
        return this.fName + ' ' + this.lName;
    }
}
console.log(name.getFullName())

Output2:
> Silver Taurus

- **Computed Properties** - In computer properties syntax, the property of an object can be dynamically created from varaibles.

Example:
> let suffix = 'Name';
let name = {
    ['first' + suffix]: 'Silver',
    ['last' + suffix]: 'Taurus'
}
console.log(name['firstName']);
console.log(name['lastName']);

Output:
> Silver
Taurus

- **Object() Constructor** - JavaScript provides a special constructor function called **Object()** to build the object. The `new` operator is used to create an instance of an object.
> var obj_name = new Object();
obj_name.property = value;
OR
obj_name['key'] = value;

Following is the syntax for accessing a property:
> object_name.property_key
OR
object_name['property_key']

- Unassigned properties of an object when accessed give an `undefined` value.

- An object property name can be any valid JavaScript string or anything that can be converted to a string, including the empty string.

- However, any property name that is not valid JavaScript identifier (for ex., a property name that has a space or a hyphen or that starts with a number) can only be accessed usinng the square bracket notation.

- ***Constructor Function*** - An object can be created using the following steps:
    1. Define the object type by writing a constructor function. The `this` keyword refers to the current object in use and defines the object's property.
    > function function_name() {
        this.property_name = value;
    }
    2. Create and instance of the object with the `new` syntax. The `new` keyword invokes the function constructor and initialies teh function's property key.
    > var obj_name = new function_name(); 

- ***Object.create Method*** - Objects can also be created using the `Object.create()` method. It allows you to create the prototype for the object you want, without having to define a constructor function.

Example:
> var roles = {
    tryp: 'Admin',
    display: function() { console.log(this.type); }
}
// Create new role
var super_role = Object.create(roles);
super_role.display();
// Create new role type as Guest
var guest_role = Object.create(roles);
guest_role.type = 'Guest';
guest_role.display();

Output:
> Admin
Guest

- ***Object.assign() Function*** - The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
> Object.assign(target, ...sources)

Example - Cloning and Object
> var det = { name: 'Silver', ID: 'E001' }
var copy = Object.assign({}, det);
for (let val in copy) {
    console.log(copy[val]);
}

Output:
> Silver
E001

Example - Merging Objects
var obj1 = { a: 10 };
var obj2 = { b: 20 };
var obj3 = { c: 30 };
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj);
console.log(obj1);

Output:
> { a: 10, b: 20, c: 30}
{ a: 10, b: 20, c: 30}

*Note - Unlike copying object, when objects are merged, the larger object doesn't contain a new copy of the properties. Rather it holds the reference to the properties contained in the original objects.*

- ***Deleting Properties*** - You can remove a properety by using the `delete` operator.

Example:
> var my_obj = new Object();
my_obj.a = 5;
delete my_obj.a;
console.log('a' in my_obj);

Output:
> false

- ***Comparing Objects*** - In JavaScript, object are a **reference type**. Two distinct objects are never equal, even if they have the same properties. This is because, they point to completely different memory address. Only those objects that **share a common reference yields true on comparison.**

Example1 - *Different Object Reference*
> var v1 = { name: 'Silver' };
var v2 = { name: 'Silver' };
console.log(v1 == v2);  // return false
conolse.log(v1 === v2)  // return false

In the above example, `v1` and `v2` are two distinct objects that refer to two different memory addresses. hence on comparison for equality, the operator will return `false`.

Example2 - *Single Object Reference*
> var v1 = { name: 'Silver' };
 var v2 = v1;
 console.log(v1 == v2); // return true
 console.log(v1 === v2); // return true

In the above example, the contents in v1 are assigned to v2, i.e., the reference of the propertes in v1 are shared with v2. Since, the objects now share the same reference to the property, the equality operator will return `true` for two distinct objects that refer to two different memory addresses.

- ***Object De-Structring*** - The term **destructuring** refers to breaking up the structure of an entity. The destructuring assignment syntax in JavaScript makes it poosible to extract data from arrays or objects into distinct variables.

Example:
> let student = {
     rNo: 1,
     name: 'Silver',
     cgpa: 8.19
 ; 
>
// destructuring to same property name 
let { name, cgpa } = student;
console.log(name);
>
// destructuring to different name
let { name: std_name, cgpa: std_cgpa } = student;
console.log(std_name);
console.log(std_cgpa);
>
// destructuring to already declared varaible
let rNo;
({rNo} =  student)
console.log(rNo);
>
// assign default values to variables
let product = { id: 101, price: 2000 };
let {id, price, discount=.10} = product;
console.log(id)
console.log(price)
console.log(discount)
>
// destructuring using the **rest operator**
let customers = {
    c1: 101,
    c2: 102,
    c3: 103
};
let {c1, ...others} = customers;
console.log(c1);
console.log(others);
>
// destructuring **nested objects**
let emp = {
    id: 101,
    address: {
        city: 'Delhi',
        pin: 91,
    }
}
let {address} = emp;
console.log(address);
let({address: {city, pin}}) = emp;
console.log(city);
console.log(pin);

Example:
> Silver
8.19
Silver
8.19
1
101
2000
0.1
101
{c2: 102, c3: 103}
{city: 'Delhi', pin: 91}
Delhi
91
<br><br>


## JSON
<br><br>


## JSON object
<br><br>
