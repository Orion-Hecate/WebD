# JavaScript Functions


## Functions
Functions are the building blocks of readable, maintable and reusable code. They are defined using the `function` keyword.
> function function_name() {
    //function_body
}

To execute the function (called as **function invocation**), following syntax is used.
> function_name()
<br><br>


## Classification of Functions
Functions may be classified as **Returning** and **Parameterized** functions.
1. **Returning functions** - Functions may also return the value along the control, back to the caller. Such functions are called as returning functions.
    - A returning function must end with an return statement.
    - A function can return at the most one value. In other words, there can be only one return statement per function.
    - The return statement should be the last statement in the function.
> function function_name() {
    //Statements
    return value;
}

2. **Parameterized functions** - Parameters are a mechanism to pass values to functions. Parameters form a part of the **function's signature**. The parameter values are passed to the function during its invocation. Unless explicitly specified, the number of values passed to a function must match the number of parameters defined.
> //function definition - paramters 
function function_name(param1, param2, ..., paramN) {
    // Statements
}
// function invocation - arguments
function _name(arg1, arg2, ..., argN);

***Default function parameters*** - In ES6, a function allows the parameters to be initialized with default values, if no values are passed to it or it is undefined.<br>

Example:
> function add(a, b=1) {
    return a + b;
}
console.log(add(4))
console.log(add(2,4))

Output:
> 5
6

***Rest Parameters*** - They are similar to variable arguments in other languages. Rest parameters doesn't restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type. To declare a rest parameter, the parameter name is prefixed with three preiods, known as the **spread operator**. 

Example:
> function fun1(...params) {
    console.log(params.length);
}
fun1();
fun1(5);
fun1(5,6,7);

Output:
> 0
1
3

*Note: Rest paramters should be the last in a function's paramter list.*
<br><br>


## Anonymous Function
Functions that are not bound to an identifier (function name) are called as anonymous functions. These functions are **dynamically declared at runtime**.
- They can accept inputs and return outputs just as standard functions do.
- An anonymous function is usually not accessible after its intial creation.
- Variables can be assigned as anonymous function. Such an expression is called a **function expression**.
- Function expression can be used as **closures** (*a record storing a function together with an evironment*), as arguments to the other functions and as IIFEs.

Example:
> var f = function() { return "hello"; }
console.log(f())

Output:
> hello
<br><br>


## Function Constructor
The function statement is not the only way to define a new function. We can **define a function dynamically** using `Function()` along with the `new` operator.
> var var_name = new Function('arg1', 'arg2', ..., 'Function Body');
<br><br>


## Anonymous Recursive Function (or Self-Executing Function)
An anonymous function calls itself using a pair of parenthesis ().

Example:
> (function() {
    var msg = 'Hello World';
    console.log(msg);
})()

Output:
> Hellow World
<br><br>


## Lambda Functions
Lambda refers to anonymous functions in programming. Lamda fucntions are a concise mechanism to represent anonymous functions. These functions are also called as **Arrow functions**.
- **Lambda Function - Anatomy**
There are 3 parts to a lambda function:
    - ***Parameters*** - A function may optionally have parameters.
    - The ***fat arrow notation / lambda notation (=>)*** - It is also called as **goes to** operator.
    - ***Statements*** - Represents the function's instruction set.
- **Lambda Expression** - It is an anonymous function expression that points to a single line of code.
> ([param1, param2, ..., paramN]) => statement;
> ([param1, param2, ..., paramN]) => {
    //Statements
}
<br><br>


## Function Expression and Function Declaration
Function expression and function declaration are not the same. Unlike a function expression, a function declaration is bound by the function name.<br>
The fundamental difference between the two is that, function declarations are parsed before their execution. On the other hand, function expressions are parsed only when the script engine encounters it during an execution.<br>
When the JavaScript parser sees a function in the main code flow, it assumes function declaration. When a function comes as a part of a statement, it is a function expreesion.
<br><br>


## Function Hoisting
Like variables, functions can be also hoisted. Unlike varaibles, function declarations when hoisted, hoists the function definition rather than just hoisting the function's name.
<br><br>


## Immediately Invoked Function Expression
IIFEs can be used to avoid variable hoisting from within blocks. It allows public access to methods while retaining privacy for variables defined within the function. This pattern is called as a **self-executing anonymous function**. In the below example, statement of `main` is a function expression while statement of `loop` is an IIFE.
> var main = function() {
    var loop = function() {
        for (var x = 0; x < 5; x++) {
            console.log(x);
        }
        // x can be used again inside function scope
    }();
// x cannot be accessed here even though it is declared using var
}
<br><br>


## Generator Functions
When a normal function is invoked, the control rests with the function called until it returns. WIth generators in ES6, the caller function can now control the execution of a called function. A generator is like a regular function except that:
- The function can yield control back to the caller at any point.
- When you call a generator, it doesn't run right away. Instead, you get back an `iterator`. The function runs as you call the iterator's next method.
- Generators are denoted by suffixing the function keyword with an `*` asterisk.
- Generators enable a 2-way communication between the caller and the called function. This is accomplished by using the `yield` keyword.

Example1:
> function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}
for (let color of rainbow()) {
    console.log(color);
}

Example2:
> function* ask() {
    const name = yield 'What is your name?';
    const sport = yield 'What is you fav. sport?';
    return name + "'s fav. sport it" + sport";
}
const it = ask();
console.log(it.next());
console.log(it.next('Silver'));
console.log(it.next('Cricket'));
<br><br>


## Arrow function and "this"
Inside an arrow function, if we use `this` pointer, it will point to the enclosing lexical scope. This means arrow functions do not create a new `this` pointer instance whenever it is invoked.

Example:
> function Student(rNo, fName, lName) {
    this.rNo = rNo;
    this.fName = fName;
    this.lName = lName;

    this.fullName1 = function() {
        setTimeout(function() {
            console.log(this.fName + " " + this.lName);
        }, 2000);
    }

    this.fullName2 = function() {
        setTimeout(() => {
            console.log(this.fName + " " + this.lName);
        }, 3000);
    }
}
const s = new Student(101, 'Silver', 'Taurus');
s.fullName1();
s.fullName2();

Output:
> undefined undefined
Silver Taurus
<br><br>


## void Keyword
`void` is an important keyword in JavaScript which can be used as a `unary operator` that appears before its single operand, which may be of any type. This oeprator specifies an expression to be evaluated without returning a value. The operator evaluates a given expression and then returns undefined.
> void expression


***Void and IIFEs***
When using an IIFE, void can be used to force the function keyword to be treated as an expression instead of a declaration. (So we can also give the name to an IIFE)
> void function iifeVoid() {
    var msg = function() { console.log('hello world'); };
    msg();
}();
<br><br>
