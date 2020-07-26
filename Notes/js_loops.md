# JavaScript Loops


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
