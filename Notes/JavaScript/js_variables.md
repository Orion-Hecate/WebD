# JavaScript Variables


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
