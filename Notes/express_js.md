# Express.js


## What is Express.js?
It is a web framework for Node.js. It is a fast, robust and asynchronous in nature. You can assume express as a layer built on top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.<br>
Some of the core features of Express framework:
- It can be used to design single-page, multi-page and hybrid web applications.
- It allows to setup middlewares to respond to HTTP Requests.
- It defines a routing table which is used to perform different actions based on HTTP method and URL.
- It allows to dynamically render HTML pages based on passing arguments to templates.
<br><br>


## Why use Express?
- Ultra fast I/O
- Asynchronous and single threaded
- MVC (Model View Controller) like structure
- Roubust API makes routing easy
<br><br>


## Creating Server using Express
We can create a server in Express as shown in the following example. 
1. In the first statement, we need to **import** the `express` module in the **node** using the `require()` method.
2. Then in the next statement, we create a **new express application** for our use.
3. Then in the next statement, we create a **new route**, using the `app.get()` method for the **GET** requests. We pass the **/** (root) as the **URI** for the **index or home route** of the server.
4. Then in the last statement we started the server at the port 3000 using the `listen()` method and can provide the callback function.

> const express = require('express');
const app = express();
>
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('Example app listening at http://localhost:3000!'));
<br><br>


## Handling Requests
<br><br>


## Understanding and Working with Routes
<br><br>


## Nodemon
<br><br>


## Body Parser
<br><br>


## Application Programmin Interfaces (APIs)
APIs is a set of commands, functions, protcols and objects that programmers can use to **create software** or **interact with an external system**. APIs work using **requests** and **responses**. When an API requests information from a web application or web server, it will receive a response.<br><br>

**Key Terms**:
- ***Endpoint***
    - An endpoint is one end of a communication channel.
    - When an API interacts with another system, the touchpoints of this communication are considered endpoints.
    - For APIs, an endpoint can include a URL of a server or service.
    - The place that APIs send requests and where the resources lives, is called an endpoint.
    - API endpoints are important as, API performance relies on its ability to communicate effectively with API Endpoint.

- ***Paths or Routes***
    - Routes in the REST API are represented by **URIs** (Uniform Resource Identifiers).
    - The route itself is what is tacked onto the endpoint. So, what and how the resources are to be given in response from the server located at a given endpoint is identified using **paths** or **routes**.
    - The **index or home route** for the API is '**/**'.
    - Furthermore we can make more routes providing more specific and encapsulated functionalities. It can be accessed as '**/[route-name]**'.

- ***Parameters***
    - API parameters are the variable parts of a resource. They determine the type of action you want to take on the resource.
    - Each parameter has a name, value type and optional description.
    - There are different types of REST API parameters:
        1. *Header paramters* - These parameters are featured in the **request header** and are usually related to **authorization**.
        
        2. *Query parameters* - These are separated from the hierarchy parameters by a **question mark**. More than one query parameters can be added together using '**&** (ampersand or bitwise AND) symbol.
        
        3. *Request body parameters* - They are included in the request body and are used to send and receive data via the REST API.

        4. *Template / Path / Route parameters* - Set off within **curly braces**, path parameters are placed within the path of an endpoint just before the query string and they provide developers with an effective way to parameterize resources.

        5. *Matrix parameters* - They come in between the resource path and Query parameters and are separated from the hierarchy parameters by a semmicolon.

        6. *Plain parameters* - These are parameters which are defined in a request and are easily accessible in ReadyAPI but are omitted when the request is submitted.

- ***Authentication***
<br><br>


## Postman
<br><br>


## JavaScript Object Notation (JSON)
<br><br>


## Error Codes
<br><br>
