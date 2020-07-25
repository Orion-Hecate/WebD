# JavaScript (ES6 - ECMAScript6)
[Functions](#Functions)

## What is a Scripting Language?
All scripting languages are programming languages. The scripting language do not require the compilation step and are rather interpreted. This is basically a language where instructions are written for a run time environment.
<br><br>


## Advantages of Scripting Languages
1. Easy learning
2. Fast Editing
3. Interactivity
4. Functionality
<br><br>


## Applications of Scripting Languages
1. To automate certain task in a program.
2. They are used in system administration. For ex: Shell, Perl, Python, etc.
3. It is used in Games application and Multimedia.
4. It is used to create plugins and extensions for existing applications.
5. Scripting languages are used in Web Applications. It is used in server side as well as client side. Server side scripting languages are: JavaScript, PHP, Perl, etc. and client side scripting languages are: JavaScript, VBScript, etc.
<br><br>


## Features of JavaScript
It is a lightwight, cross-platform and interpreted scripting language. It is well-known for the developement of web pages, many non-browser environments also use it. JavaScript can be used for **Client-Side** developments as well as **Server-side** developments. JavaScript contains a standard library of objects like - Array, Date, Math and a core set of language elements like operators, control structures and statements.
<br><br>


## JavaScript Code Structure
1. **Statements** - They are syntax constructs and commands that perform actions. For example: Here we split "Hello World" into two alerts:
> alert('Hello'); 
alert('World');

2. **Semicolons** - A semicolon may be omitted in most cases when a line break exists. But it generally marks the end of a statement.

3. **Comments** - As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why. Comments can be put into any palce in a script. They dont't affect its execution because the engine simply ingores them. 
    - **One-line comments** start with two forward slash characters `//`.
    - **Multi-line comments** start with a forward slash and an asterisk `/*` and end with an asterisk and a forward slash `*/`. 
    - Note: Nested comments are not supported!

4. **Whitespace and Line Breaks** - ES6 ignores spaces, tabs and newline that appear in programs. You can use them freely in your program to format and indent your code.

5. **JavaScrpt is Case Sensitive** - This means that JavaScript differentiates between the uppercase and the lowewrcase characters.
<br><br>


## ES6 Syntax
**Syntax** defines the set of rule for writing programs. Every language specification defines its own syntax. A JavaScript program can be composed of:
1. **Variables** -  Represents a named memory block that can store values for the program.
2. **Literals** - Represents constant/fixed values.
3. **Operators** - Symbols that define how the operands will be processed.
4. **Keywords** - Words that have a special meaning in the context of a language.
5. **Modules** - Represents code blocks that can be reused across different programs/scripts.
6. **Identifiers** - These are the names given to the elements in a program like: variables, functions, etc. The rules for identifiers are:
    - Identifiers can include both characters and digits.
    - Identifiers cannot begin with a digit.
    - Identifiers cannot include special symbols except for underscore (_) or a dollar sign ($).
    - Identifiers cannot be keywords.
    - Identifiers are case sensitive.
    - Identifiers cannot contain spaces.
<br><br>


## ES6 and Hoisting
The JavaScript engine, by default, moves declarations to the top. This feature is termed as **hoisting**. This feature applies to variables and functions. Hoisting allows JavaScript to use a component before it has been declared. However, the concept of hoisting does not apply to scripts that are run in the **Strict Mode** (The Strict Mode imposes a layer of constraint on JavaScript. It makes several changes to normal JavaScript semantics.).
<br><br>


## Variables
Most of the time, a JavaScript application needs to work with information. So, Variables are used to store this information.
- **Variable Declartion**
    - A **variable** is a named space in the memory that stores values. In other words, it acts as a container for values in a program. Variable names are also identifiers.
    - A variable must be **declared** before it is used. This can be done using `var` keyword in ES5 syntax as follows:
    > var variable_name;
    - ES6 introduces the following variable declaration syntax:
        - using the `let`
        - using the `const`

- **Variable Initialization** refers to the process of storing a value in the variable. A variable may be initialized at the time of declaration or at a later point of time.
> var variable_name = value;
var variable_name2;
variable_name2 = value2;

- **Dynamic Variable Type** - This means that the same variable can be used to hold different data types. In order to declare a variable we need to use `var` keyword.
> var x;    // Now x is declared and undefined
x = 5;      // Now x is a Number
x = "John"; // Now x is a String

- **JavaScript variable scope** - The scope of a variable is the region of your program in which it is defined. Traditionally JavaScript defines only two scopes:
    - *Global scope* - A variable with global scope can be accessed from within any part of the JavaScript code.
    - *Local Scope* - A variable with a local scope can be accessed from within a function where it is declared.
Example:
> var num = 10 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num) 
} 
console.log("value of num outside test() "+num) 
test()

Output:
> value of num outside test() 10
value of num in test() 100

- **Let and Block level safety** - If we try to declare a `let` variable twice within the same block, it will trhow an error. However, the same `let` variable can be used in different block level scopes without any syntax errors.

- **The const** - The `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. Constants are block-scoped, much like variabels defined using the `let` statement. The value of a constant cannot change through re-assignment, and it can't be re-declared. A constant required an initializer during the decalration. The constant is immmutable.

- **var hoisting and block scope** - Prior to ES6, the `var` keyword was used to declare a variable in JavaScript. 
    - Variables decalared using `var` do not support block level scope. This means if a variables is declared in a loop or `if block` it can be accessed outside the loop or the `if block`. This is beacuase the variables declare using the `var` keyword support **hoisiting**.
    - Variable hoisting allows the use of a variable in a JavaScript program, even before it is declared. Such variables will be initialized to `undefined` by default.
    - JavaScript runtime will scan for variable declarations and put them to the top of the function or script.
    - The **block scope** restricts a variable's access to the block in which it is declared. Variables declared using the `var` keyword do not have a block scope.
    - Also we can declare the same **variable** twice using the `var` keyword within a block.
<br><br>


## Operators
An **expression** is a special kind of statement that evaluates to a value. Every expression is composed of:
- **Operands** - Represent the data.
- **Operator** - Defines how the operands will be processed to produce to produce a value.
JavaScript supports the following types of operators:
- Arithmetic operators
- Logical operators
- Relational operators
- Bitwise operators
- Assignment operators
- Ternary/conditional operators
- String operators
- Type operators (`typeof`)
- void operator (`void`)
- Spread operator (`...`)
<br><br>


## Decision Making
A conditional/decision-making construct evaluates a condition before the instructions are executed.
- if else statement
- switch case statement
<br><br>


## Loops
At times, certain instructions require repeated execution. Loops are an ideal way to do the same. A loop represents a set of instructions that must be repeated. In a loop's context, a repetition is termed as an **iteration**.
- **Definite Loop** - A loop whose number of iterations are definite/fixed is termed as a definite loop.
    - `for` loop - It executes the code block for a specified number of times.
    > for (initial_value; termination_condition; step) {
        // statements
    }

    - `for in` loop - It is used to loop through an object's properties.
    > for (var_name in object) {
        //statements
    }

    - `for of` loop - It is used to iterate iterables instead of object literals.
    > for (var_name of iterable) {
        //statements
    }

- **Indefinite Loop** - A loop whose the number of iterations is indeterminate or unkown.
    - `while` loop - It executes the instructions each time the condition specified evaluates to true.
    > while (expression) {
        // Statements
    }

    - `do while` loop - It is similar to the while loop except that it doesn't evaluate the condition for the first time the loop executes as it checks the conditin after the block of statements are executed. (Because of this it said to be a **exit-controlled loop** while others are **entry-controlled loop**)
    > do {
        Statement(s) to be executed;
    } while (expression);

- **Loop Control Statements**
    - `break` statement - It is used to take the control out of a construct
    - `continue` statement - It skips the subsequent statements in the current iteration and takes the control back to the beginning of the loop.

- **Using labels to Control the flow** - A **label** is simply an identifier followed by a colon (`:`) that is applied to a statement or block of code. A label can be used with `break` and `continue` to control the flow more precisely.
<br><br>


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


## Anonymous Recursive Function
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
<br><br>


## Data Types in JavaScript
JavaScript variables can hold many data types: numbers, strings, objects and more. In a programming language, data types is an important concept. To be able to operate on variables, it is important to know something about the type.

- **Strings** - A string (or a text string) is a series of characters. Strings are written within quotes. In javascript you can use single or double quotes.
> var name1 = "Rohan";
var name2 = "John";
- **Numbers** - It has only one type of numbers. It can be written with or without decimals.
> var x1 = 34.00;
var x2 = 34;
- **Booleans** - It can have only two values: `true` or `false`. They are often used in conditional testing.
- **Arrays** - They are written with square brackets. Array items are separated by commas.
> var cars = ['Saab', 'Volvo', 'BMW'];
<br><br>


## Objects in JavaScript
Objects, in JavaScript, is its most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript's 
