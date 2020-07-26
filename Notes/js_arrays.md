# JavaScript Arrays


## Limitations of Ordinary Variables
- Ordinary Variables are **scalar** in nature. In other words, a variable declaration can only contain a single value at a time. This means that to store n values in a program, n variable declarations will be needed. Hence, the use of ordinary variables is not feasible when one needs to store a larger collection of values.

- Ordinary Variables in a program are allocated moemory in random order, thereby making it difficult to retrieve/read the values in the order of their declaration.
<br><br>


## Arrays
An array is a homogenous collection of values. To simplify, an array is a collection of values of the same data type. It is a **User-Defined or Complex** type.

***Features of an Array***
- An array declaration allocates sequential memory blocks.
- Arrays are static. This means that an array once initialized cannot be resized.
- Each memory block represents an array element.
- Array elements are identified by a unique integer called as the **subscript/index** of the element.
- Arrays too, like variables, should be declared before they are used.
- Array initialization refers to populating the array elements.
- Arrays element values can be updated or modified but cannot be deleted.

***Declaring and Initializing Arrays***
To declare and initialize an array in JavaScript we have the following syntax:
> var array_name;
array_name = [val1, val2, ..., valN];
OR
var array_anme = [val1, val2, ..., valN];

*Note - The pair of [] is called the ***dimension of the array.***
<br>

***Accessing Array ELements***
The array name followed by the subscript is used to refer to any array element.
> array_name[subscript];

***Array Object***
An array can also be created using the Array object. The Array constructor can be passed as:
- A numeric value that represents the size of the array, or
- A list of comma separated values.

***Concepts of Arrays in JavaScript***
1. *Multi-Dimensional arrays* - It spports multidimensional arrays. The simplest form of the multidimensional array is the 2-dimensional array (matrix).

2. *Passing arrays to functions* - You can pass to function a pointer to an array by specifying the array's name without an index.

3. *Return array from functions* - Allows a function to return an array.

***Array De-Structuring***
**De-Structuring** refers to extracting individual values from an array or an object intp distinct variables.
> let [var1, var2] = [item1, item2];
<br><br>
