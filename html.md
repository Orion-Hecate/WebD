# HTML (HyperText Markup Language)


## What is a Markup Language?
In computer text processing, a markup language is a system for annotating (add notes to a text or diagram giving explanation or comment) a documeny in a way that is syntactically distinguishable from the text, meaning when the document is processed for display.<br>

The markup language is not shown and is onyl used to format the text. The idea and terminology evolved from the **marking up** of paper manuscripts (i.e., revision instructions by editors), written with a red or blue pencil on author's manuscripts. In digital media, this "blue pencil instrcution" text was replaced by tags.<br><br>


## What is HTML?
The HyperText Markup Language is the language used to create documents for the **World Wide Web (WWW)**. As the name implies - it is markup language. When an HTMl document is read by a suitable web browser specifically designed to understand HTML codes, such as Internet Explorer or Firefox, the formatting codes are interpreted and the text is displayed in an attractive and more dynamic way. HTMl documents can include graphics and more importantly, links to other documents called **hypertext**. <br><br>


## HTML Tags
Tags are the starting and ending part of an HTML element. They begin with `<` symbol and end with `>` symbol. Whatever written inside `<` and `>` are called tags. The tags ideally indicate what the parts of the document are, rather than details of how they might be shown on some display.<br><br>


## Anatomy of HTML tags
When we use tags to provide some markup functionality, we put the content in between the `opening (start) tag - <tag_on>` and the `ending (end) tag - </tag_off>` of an HTML element. Though there are some tags which are **self-closing tags** and do not require a closing tag. for e.g. `<br>`.<br><br>


## HTML Elements
An HTML element is defined by a start tag, some content and end tag. The HTML element is everything from the start tag to the end tag.<br>

Syntax: `<tagname>Content goes here...</tagname>`<br>

Some HTML elements have no content (like the `<br>` element). These elements are called **empty elements**. Empty elements do not have an end tag.<br><br>


## HTML Attributes
It is used to define the character of an HTML element. It always placed in the opening tag of an element. It generally provides additional styling (attribute) to the element. for e.g. `<hr size=3>`. In the example the **size** is an attribute of an **hr element**.<br><br>


## Doctype
Doctype stands for **Document Type Declaration**. It informs the type and version of HTML used in building the web document. This helps the browser to handle and load it properly. <br>

While the HTML syntax for this statement is somewhat simple, we must note each version of HTML has its own rules. All HTMl documents must start with a `<!DOCTYPE>` declaration. In HTML5, the declaration is simple: `<!DOCTYPE html>`.<br>

In older HTML documents (HTML4 or XHTML), the declaration is more complicated because the declaration must refer to a **DTD (Document Type Definition)**.<br><br>


## HTML boiler plate code
<br><br>


## Character Sets
TO display an HTML page correctly, the browser must know what character-set (encoding) to use. For HTML5, the default character encoding is **UTF-8**. The character encoding for the early web was **ASCII**. Later, from HTML2.0 to HTML4.01, **ISO-8859-1** was considered the standard.<br><br>


## ASCII <br><br>
## ISO-8859-1 <br><br>
## UTF-8 <br><br>


## HTML Entities
Reserved characters in HTML must be replaced with character entities. Some characters are reserved in HTML. A character entity looks like this: `&entity_name;` or `&#entity_number;`.<br><br>


## Combining Diacritical Marks
A diacritical mark is a **glyph**(symbol that tells a reader how to pronounce a letter) added to a letter. Some diacritical marks, like **grave (\`)**, **tilde (~)**, **circumflex (^)** and **acute (´)** are called **accents**. We can add a glpyh to a letter like this: `o&#768` -> `ò`.<br><br>


## Tags
1. **Html tag**
2. **Head tag**
3. **Meta tag**
4. **Title tag**
5. **Body tag**
6. **Heading tags (h1 to h6)**
7. **Break tag**
8. **Horizontal rule tag**
9. **Paragraph tag**
10. **Emphasis tag**
11. **Italic tag**
12. **Strong tag**
13. **Bold tag**
14. **Underline tag**
15. **Image tag**
16. **Anchor tag**
17. **List tags (list, ul, ol, li, etc.)**
18. **Table tags (table, tr, th, td, thead, tbody, etc.)**
19. **Form tags (form, label, input, button, etc.)**
20. **Link tag**
21. **Content division tag**
22. **Span tag**
23. **Section tag**
24. **Script tag**
<br><br>


## HTML Semantic Elements
A semantic element clearly describes its meaning to both the browser and the developer. Examples of **non-semantic** elements: `<div>` and `<span>` - Tells nothing about its content. Examples of **semantic** elements: `<form>`, `<table>`, `<section>` and `<article>` - Clearly defines its content.
<br><br>


## Class Attribute
The class attribute is part of the **Global Attributes** and can be used on any HTML element. The class attribute specifies one or more classnames for an element. The class attribute is mostly used to point to a class in a stylesheet. However, it can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified class.<br><br>


## Favicons
<br><br>


## Some Interesting Sites
1. codepen.io
2. Internet archive way back machine
3. Photobucket
4. crop-circle.imageonline.co
5. Wiki-game
6. flaticon.com
