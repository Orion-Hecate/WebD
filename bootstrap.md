# Bootstrap 

## What is a Framework?
In computer programming, a framework is an abstraction in which software, providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software.
<br><br>


## Importance of a Framework
Deploying a project was not always as simple as it is today. It used to require hours and hours of work and the programming skills needed were intense. One single mistake could ruin an entire project. As a framework, what bootstrap does is to simplfy the process of development, by keeping the code consistent and of high quality. With a framework, you can:
- Prevent useless repetition
- Adapt to different requirements without making drastic changes
- Be consistent with your code
- Prototype new designs quicker and easier than ever.
- Make use of cross-browser compatibility.
<br><br>


## Framework vs Library
The difference between the two is defined by "Who calls whom" i.e., the caller/callee relationship. It is our code which calls the library code while in framework, it is framework's code which alles our code. Thus, the key difference is in the **Inversion of Control**, commonly called as **IoC**.
<br><br>


## What is Bootstrap?
It is described as an HTML, CSS and JS framework which is used to develop mobile-first, responsive projects.
- It is an open source tool.
- It comes equipped with a grid system, pre-build components and plugins that are built with jQuery to fit any project.
- To build websites that are as responsible as possible, bootstrap makes the process easier by letting users utilize it as a front-end development framework.
- What bootstrap does differently compared to other frameworks is that it uses jQuery extensively. Without jQuery cross-browser compatibility wouldn't be possible.
<br><br>


## Wireframing
It is a way to design a website service at the structural level. A wireframe is a low-fidelity way commonly used to lay out content and functionality on a page which takes into account user needs and user journeys.
- It can also be referred as a schematic or blueprint of your website that your are going to design or develop.
- It is the first step to be done.
<br><br>


## Mockup
It is a kind of high-fidelity static design diagram that should demonstrate information frames and statically present content and functions.
- Unlike a wireframe, amockup looks more like a finished product or prototype, but it is not interactive and not clickable.
- It is rather a graphic representation.
<br><br>


## Prototype
It is already very close to the finished product. Here, processes can be simulated and user interaction can be tested.
- A prototype looks very similar to the finished product.
- Early prototyping can save a lot of development costs and time so that the work of back-end product architecture will not be in vain because of unreasonable user interface design.
- A prototype is an excellent tool to obtain user feedback and to test the product.
<br><br>


## Bootstrap Grid System
Bootstrap's grid system allows up to 12 columns across the page. If you do not want to use all 12 column individually, you can group the columns together to create wider columns. Bootstrap's grid system is responsive and the columns will re-arrange depending on the screen size. Remember that grid columns should app up to twelve for a row, any more than that, columns will stack no matter the viewport.
<br><br>


## Grid Classes
The bootstrap grid system has four classes:
- **xs** - for phones and screens less than 768px wide.
- **sm** - for tablets and screens equal to or greater than 768px wide.
- **md** - for small laptops and screens equal to or greater than 992px wide.
- **lg** - for laptops and desktops and screens equal to or greater than 1200px wide.
The classes above can be combined to create more dynamic and flexible layouts. Each class scales up, so if you wish to set same widths for xs and sm you only need to specify xs.
<br><br>


## Containers
Bootstrap requires a containing element to wrap site contents. Containers are used to pad the content inside of them and there are two container classes available:
1. The `.container` class provides a responsive **fixed width**.
2. The `.container-fluid` class provides a **full width container**, spanning the entire width of the viewport.
<br><br>


## Buttons
- Bootstrap provides different styles of buttons which can be used on `<a>`, `<button>` or `<input>` element. Following are the different styles:
    - `.btn`
    - `.btn-default`
    - `.btn-primary`
    - `.btn-success`
    - `.btn-info`
    - `.btn-warning`
    - `.btn-danger`
    - `.btn-link`
- Bootstrap provides four button sizes:
    - `.btn-lg` (button large)
    - `` (by default, button normal)
    - `.btn-sm` (button small)
    - `.btn-xs` (button extra small)
- Block level buttons are the buttons that span the entire width of the parent element. It can be added by the class `.btn-block`.
- Active/Disabled buttons can also be made. A button can be set to an active (appear pressed) or a disabled (unclickable) state using the classes `.active` and `.disabled`.
<br><br>


## Navigation Bar
- A navigation bar is a navigation header that is placed at the top of the page. With bootstrap, a navigation bar can extend or collapse, depending upon the screen size.
- A standard navigation bar is created with `<nav class="navbar navbar-default">`.
- If you don't like the style of the default navigation bar, bootstrap provides an alternative, **black navigation bar (or Inverted Navigation Bar)**. This can be achieved by using the class `.navbar-inverse` in place of `.navbar-default`.
- Navigation bar can also the dropdown menus using the classes `.dropdown` and `.dropdown-menu` inside of `<li>` and `<ul>` resepectively.
- The `.navbar-right` class is used to right-align navigation bar buttons.
- To add buttons inside the navbar, add the `.navbar-btn` class on a Bootstrap button (one with the class `.btn`).
- To add form elements inside the navbar, add the `.navbar-form` class to a form element and add an input(s). Note that we can add a `.form-group` class to the div container holding the input to add proper padding.
- You can also use the `.input-group` and `.input-group-addon` classes to attach an icon or help text to the input field.
- We can use the `.navbar-text` class to vertical align any elements inside the navbar that are not links (ensures proper padding and text color).
- The navigation bar can be made fixed at the top or the bottom using `.navbar-fixed-top` and `.navbar-fixed-bottom` classes.
- For collapsing the navbar, we need to make a button with the class `.navbar-toggler` for providing **toggle** functionality, set the **data-toggle** property as **collapse** and put the **data-target** property as the **division id** which holds which contains the list element with classes `nav` and `.navbar-nav`.
<br><br>


## Carousel
<br><br>


## Cards
<br><br>


## Important sites
1. dribble.com
2. sneekpeekit.com
3. balsamiq.cloud
4. codeply.com
5. fontawesome.com
