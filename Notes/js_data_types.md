# JavaScript Primitive Data Types


## What is a Data Type?
In computer programming, a **data type** or simple **type** is an attribute of a data which tells the compiler or interpreter how the programmer intends to use the data. The data types also defines the operations that can be done on the data, the meaning of data and the way values of that type can be stored.
<br><br>


## What is a Primitive Data Type?
Primitive data types are the most basic or fundamental types available within a programming language.
<br><br>


## What is a Primitive Data Type in JavaScript?
In JavaScript, a primitive data type is a single simple data with no additional properties and methods. All primitives are immutable.
- The `typeof` operator can return one of these primitive types - `string`, `number`, `boolean` or `undefined`.
<br><br>


## Primitive Data Types in JavaScript
JavaScript variables can hold many data types: numbers, strings, objects and more. In a programming language, data types is an important concept. To be able to operate on variables, it is important to know something about the type. There are 5 primitive data types:
1. **Numbers** - It has only one type of numbers. It can be written with or without decimals. In general, you do not need to worry about Number instances because the browser automatically converts number literals to instances of the number class. In the place of number, if you provide any non-number argument, then the argument cannot be converted into a number, it returns **(NaN (Not-a-Number)**.

2. **Booleans** - It can have only two values: `true` or `false`. They are often used in conditional testing. If the value parameter is *omitted or is 0, -0, null, false, NaN, undefined or an empty string (''), the object has an initial value of false.

3. **Strings** - A string (or a text string) is a series of characters. Strings are written within quotes. In javascript you can use single or double quotes.

4. **Symbols** - ES6 introduces a new primitive type called Symbol. They are helpful to implement metaprogramming in JavaScript programs. A symbol is just a piece of memory in which you can store some data. Each symbol will point to a different memory location. Values returned by a Symbol() constructor are **unique and immutable**.

- ***Symbol and Classes*** - A symbol can be used with classed to define the properties in the class. The advatage is that if property is a symbol as shown below, the property can be accessed outside the package only if the symbol name is known. So, data is much encapsulated when symbols are used as properties.

Example:
> const COLOR = Symbol();
class Bike {
    constructor(color) {
        this[COLOR] = color;
    }
}
let bike = new Bike('red');
console.log(bike);
// property can be accessed only if symbol name is known
console.log(bike[COLOR]);

Output:
Bike {Symbol(): 'red'}
red

5. **Undefined** - In JavaScript, a variable without a value has the value `undefined`. The type is also `undefined`. Any variable can be emptied, by setting the value to `undefined`.

*Note: Undefined is a data type as well as a value. While ***null*** is only a value that describes the value of the variable is "nothing" at the moment but it do not change the data type of that variable.*
<br><br>


## Complex Data in Java Script
The `typeof` can return one of two complex types - `function` or `object`. The `typeof` operator returns "object" for objects, arrays and null.
<br><br>
