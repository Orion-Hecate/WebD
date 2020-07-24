# CSS (Cascading Style Sheets)


## What is a Style Sheet?
A **style sheet** is a collection of style that tells a browser how the various **styles** are to be applied to the HTML tags to present the document. Rules can be applied to all the basic HTML elements or you can define your own variation and apply them where you wish to. <br><br>


## Why do they Cascade?
Style sheets let you selectively override previous defined styles. for ex: a website might be using a standard style sheet but certain web pages can have an additional style sheet that can override styles that have been defined in the standard style sheet. <br><br>


## Where are Style Sheets stored?
Style sheets can be external or internal to your website and/or external or internal to your web pages. A style sheet is a text file that is stored on an web server, within the same location as your web pages or a style sheet can also be included as part of your web pages.<br>

There are three types of Style Sheets:
1. **Embedded or Internal** - the style rules are included within the HTML at the top of the web page - in the head.
2. **Inline** - the style rules appear throughout the HTML of the web page - in the body.
3. **Linked or External** - the style rules are stored in a separate file external to all the web pages.
<br><br>


## Cascading Order
Style sheet precedence is: inline over embedded over linked over the browser's default style sheet. However, some browsers treat linked style sheets as more important than embedded.<br><br>


## CSS Syntax
- **selector**: It is the **who** (tag_name or tag_id), we want to modify in the web page.
- **property**: It is the **what**, about the selector we want to change.
- **value**: It is the **how**, we want to change the property of a selector.
- One **rule** is denoted by a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration include a CSS property name and a value, separated by a colon.
> selector { property: value; }
> // rule
selector1, selector2 { 
    property1: value;
    property2: value;
}
<br><br>


## CSS Box Model
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. Explanation of the different parts:
    - **Content** - The content of the box, where text and images appear.
    - **Padding** - Clears an area around the content. The padding is transparent.
    - **Border** - A border that goes around the padding and content.
    - **Margin** - Clears an area outside the border. The margin is transparent.
<br><br>


## CSS Display Property
The display property specifies the display behavior (the type of rendering box) of an element. In HTML, the default value in XML is inline, including SVG elements. Some display values are:
    - **Block** - displays an element as a block element (like `<p>`). It starts on a new line and takes up the whole width.
    - **Inline** - displays an element as an inline element (like `<span>`). Any height and width properties will have no effect. It only take as much box (or block) space as required by its element to be filled. 
    - **Inline-block** - displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.
    - **None** - The element is completely removed.
<br><br>


## CSS position property
The position property specifies the type of positioning method used for an element (static, relative, absolute or fixed).
    - **Static** - Default value. Elements render in order as they appear in the document flow.
    - **Relative** - The element is positioned relative to its normal position, so "left: 20px" adds 20 pixels to the elemet's LEFT position.
    - **Absolute** - The element is positioned relative to its first positioned (not static) ancestor element.
    - **Fixed** - The element is positioned relative to the browser window.
    - **Sticky** - An element with position sticky, is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in viewport - then it "sticks" in place (like position: fixed).
<br><br>


## CSS z-index property
The **z-index** property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. It only works on positioned elements (position: absolute, position: relative, position: fixed or position: sticky).
<br><br>


## Media Query
The `@media` rule, introduced in CSS2, made it possible to define different style for different media types. Example: You could have one set of rules for computer screens and other for mobile devices and so on. Unfortunately, these media types never got a lot of support by devices, other than the print media type. <br>

Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device. Media queries can be used to check many things, such as:
- width and height of the viewport
- width and height of the device
- orientation
- resolution
<br>

Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets and mobile phones. <br>

The media query syntax consists of a media type and can contain one or more expression, which resolve to either true or false.
> @media not|only mediatype and (expressions) {
    CSS-Code;
}
> @media not|only mediatype and (mediafeature and|or|not mediafeature) {
    CSS-code;
}
<br>

The CSS3 media types are:
- all - Used for all media type devices
- print - Used for printers
- screen - Used for computer screens, tablets, smart-phones, etc.
- speech - Used for screen-readers that "reads" the page out loud.
<br>

The example code is as follows:
> @media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
<br><br>


## Code Refactoring
1. Readiblity
2. Modularity
3. Efficiency
4. Length
<br><br>


## Selectors
CSS selectors are used to **find (or select)** the HTML element **who** you want to style. We can divide CSS selectors into five categories:
1. **Simple selectors** -  select elements based on name, class or id.
    - **CSS element selector** - The element selector selects HTML elements based on the element name.
    > p { 
        text-align: center;
        color: red;
        }
    - **CSS class selector** - The class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a **period (.)** character, followed by the class name. Note: a class name cannot start with a number!
    > .center { 
        text-align: center;
        color: red;
        }
    > p.center {
        text-align: center;
        color: red;
        }
    - **CSS id selector** - The id selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element! To select an element with a specific id, write a **hash (#)** character, followed by the id of the element. Note: an id name cannot start with a number!
    > #para1 { 
        text-align: center; 
        color: red;
        }
    - **CSS Universal Selector** - The **universal selector (*)** selects all HTML elements on the page.
    > * { 
        text-align: center;
        color: blue;
        }
    - **CSS grouping selector** - The grouping selector selects all the HTML elements with the same style definitions.
    > h1, h2, p {
        text-align: center;
        color: red;
        }
2. **Combinator selectors** - select elements based on a specific relationship between them. A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a **combinator**. There are four different combinators in CSS:
    - **Descendant Selector (space)** - The descendant selector matches all elements that are descendants of a specified element. The following example selects all `<p>` elements inside `<div>`elements.
    > div p {
        background-color: yellow;
        }
    - **Child Selector (>)** - The child selector selects all elements that are the children of a specified element. The following example selects all `<p>` elements that are children of a `<div>` element.
    > div > p {
        background-color: yellow;
        }
    - **Adjacent sibling selector (+)** - The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element. Sibling element must have the same parent element, and "adjacent" means "immediately following". The following example selects all `<p>` elements that are placed immediately after `<div>` elements.
    > div + p {
        background-color: yellow;
        }
    - **General sibling selector (~)** - The general sibling selector selects all elements that are sibling of a specified element. The following example selects all `<p>` elements that are siblings of `<div>` elements.
    > div ~ p {
        background-color: yellow;
        }
3. **Pseudo-Class selectors** - select elements based on a certain state. It is used to define a special state of an element. For example, it can be used to: style an element when a user mouses over it, style visited and unvisited links differently (**anchor pseudo-class**), style an element when it gets focus, etc. The syntax of pseudo-classes:
> selector:pseudo-class {
    property: value; 
    } 
4. **Pseudo-Elements selectors** - select and style a part of an element. It is used to style specified parts of an element. For example, it can be used to: style the first letter or line of an element, insert content before or after the content of an element. The syntax of psuedo-elements:
> selector::pseudo-element {
    property: value;
    }
5. **Attribute selectors** - select elements based on an attribute or attribute value. 
    - The `[attribute]` selector is used to select elements with a specified attribute. The following example select all `<a>` elements with a target attribute:
    > a[target] {
        background-color: yellow;
        }
    - The `[attribute="value"]` selector is used to select elements with a specified attribute and value. The following example selects all `<a>` elements with a target="_blank" attribute:
    > a[target="_blank"] {
        background-color: yellow;
        }
    - The `[attribute|="value"]` selector is used to select elements with the specified attribute starting with the specified value. The following example selects all elements with a class attribute value that begins with "top".
    > [class|="top"] {
        background: yellow;
        }
    - The `[attribute^="value"]` selector is used to select elements whose attribute value begins with a specified value. The following example selects all elements with a class attribute value that begins with "top".
    > [class^="top"] {
        background: yellow;
        }
    - The `[attribute$="value"]` selector is used to select elements whose attribute value ends with a specified value. The following example selects all elements with a class attribute value that ends with "test":
    > [class$="test] {
        background: yellow;
    }
    - The `[attribute*="value"]` selector is used to select elements whose attribute value contains a specified value. The following example selects all elements with a class attribute value that contains "te":
    > [class*="te"] {
        background: yellow;
        }
<br>

Note: We can also use **multiple selectors** by concatening selectors as in the following example in which the color red will be applied to the element which contains both the container and title class in it:
> .container.title {
    color: red;
}
<br><br>


## Important points
1. If the parent element is center element, but the child element is block display and set a width value then to center it, we need margin to be set to auto for the positions toward which the child is more inclined.
2. We can provide multiple font-family separated by commas (,) in which case the fonts are applied serial-wise presence.
3. We can give font size in the **em** format. 1em = 100% = 16px.
4. **Pixel (px)** unit is for statically sized case while **percentage (%)** and **em** unit is for dynamically sized case. In dynamically sized case the font size changes with the change in the preference setting.
5. The dynamically sized font can get add up hierarchically. This problem can be solved in the latest CSS (CSS3) using the new unit known as **Root em (rem)**.
6. Implement **DRY** methodology - **Don't Repeat Yourself** over **WET** methodology - **We Enjoy Typing**. Try to minmize the code that is being repeated whereever possible.
7. **Inline** style is preferred over **Id** style over **class** style over the **tag** style.
8. If we declare a property twice in a rule, the one encountered at the end will the one, remain applied.
<br><br>


## Some Interseting Sites
1. colorhunt.co
2. emojipedia.org
3. favicon.cc
4. pesticide.io
