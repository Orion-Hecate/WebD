# jQuery


## What is jQuery?
jQuery is a lightweight, "write less, do more", JavaScript library. 
- The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that requires many lines of JavaScript code to accomplish and wraps them into methods that you can call with a single line of code.

- jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

-The jQuery library contains the following features:
    - HTML/DOM manipulation
    - CSS manipulation
    - HTML event methods
    - Effects and animations
    - AJAX
    - Utilites
<br><br>


## Element Selection
We can easily select HTML Element **Selector** using the `$` symbol of jQuery rather writing long code of standard JavaScript using `querySelector()`. The `$` selects all the elements that matches the string passed in it.
> document.querySelectorAll('h1');     // standard JS
OR
$('h1');    // using jQuery

Using the jQuery way of selecting elements, we can also access their **css** property using `css()` and In that, we can access the attribute and also change its value as shown in the following example.
> $('h1').css('color');         // getting property
$('h1').css('color', 'red');    // setting property

- ***Important Methods for $()***
    - *css()*
    - *addClass()*
    - *removeClass()*
    - *text()*
    - *html()*
    - *attr()*
    - *click()*, *keypress()*, so on ...
    - *on()*
    - *before()*
    - *after()*
    - *prepend()*
    - *append()*
    - *hide()*
    - *show()*
    - *toggle()*
    - *fadeOut()*
    - *fadeIn()*
    - *fadeToggle()*
    - *slideUp()*
    - *slideDown()*
    - *slideToggle()*
    - *animate()*, etc.
<br><br>
