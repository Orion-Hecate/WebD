# JavaScript - HTML DOM (Document Object Model)


## What is DOM?
Every web page resides inside a **browser window**, which can be considered as an object. A **document object** represents the HTML document that is displayed in that window. The document object has various properties that refer to other objects which allow access to and modification of the document content. The way a document content is accessed and modified is called the **Document Object Model (DOM)**.<br>

The objects are organized in a hierarchy. This hierarchical structure applies to the organization of objects in a web document.<br>

There are several DOMs in existence.
1. **The Legacy DOM** - This is the model which was introduced in early versions of JavaScript language. It is well supported by all browsers but allows access only to certain key portions of documents, such as form elemetns and images.

2. **The W3C DOM** - This document object model allow access and modification of all document content and is standardized by the World Wide Web Consortium (W3C). This model is supported by almost all the modern browsers.

3. **The IE4 DOM** - This document object model was introduced in Version 4 of Microsoft's Internet Explorer browser. IE 5 and alter version include support for most basic W3C DOM features.
<br><br>


## Important Methods of "document" Method
- *getElementsByTagName()*
- *getElementById()*
- *querySelectorAll()*
- *querySelector()*
    - *style*
        - *color*
        - *fontSize*
        - (so on ...)
    - *classList*
        - *add*
        - *delete*
        - (so on ...)
    - *innerHTML*
    - *textContent*
    - *attributes*
    - *getAttribute()*
    - *setAttribute()*
    - *addEventListener()*
<br><br>


## Important Tips
1. We can change the style or properties of a HTML element inline, by directly accessing style from querySelector or other methods or by using a more better way the *classList* method of querySelector by which we can add styles to the HTML element while keeping the styles in external style sheet.
2. The values that we edit using the document object, whether style or innerHTML, we should need to pass those values in a string, otherwise it will think of it as a JavaScript code.
<br><br>
