// //lecture = 28;
// In web development, three important concepts are frequently used: DOM (Document Object Model), BOM (Browser Object Model), and the `window` object. Let's briefly discuss each of them:

// 1. **DOM (Document Object Model):**
//    - The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.
//    - JavaScript interacts with the DOM to dynamically manipulate the content, structure, and style of a web page.
//    - Examples:
//      ```html
//      <!-- HTML document -->
//      <!DOCTYPE html>
//      <html>
//      <head>
//        <title>DOM Example</title>
//      </head>
//      <body>
//        <h1 id="pageTitle">Hello, DOM!</h1>
//        <p>This is a paragraph.</p>
//      </body>
//      </html>
//      ```
//      ```javascript
//      // JavaScript manipulating the DOM
//      let pageTitleElement = document.getElementById('pageTitle');
//      pageTitleElement.innerHTML = 'Updated Title';
//      ```

// 2. **BOM (Browser Object Model):**
//    - The BOM represents additional objects provided by the browser, which are not directly related to the document structure. It includes objects like `window`, `navigator`, `screen`, `history`, and `location`.
//    - The `window` object is a key component of the BOM and represents the browser window or tab.
//    - Examples:
//      ```javascript
//      // Accessing BOM properties
//      console.log(window.innerWidth);   // Width of the browser window
//      console.log(navigator.userAgent);  // User agent information
//      console.log(location.href);        // URL of the current page
//      ```

// 3. **`window` Object:**
//    - The `window` object is the global object in the browser's JavaScript environment. It represents the browser window and acts as a container for global variables, functions, and other objects.
//    - It provides properties and methods for interacting with the browser, such as opening new windows, setting timeouts, and handling events.
//    - Examples:
//      ```javascript
//      // Accessing window properties
//      console.log(window.innerWidth);      // Width of the browser window
//      console.log(window.location.href);    // URL of the current page
//      console.log(window.document.title);  // Title of the document

//      // Opening a new window
//      window.open('https://www.example.com', '_blank');
//      ```

// These concepts are fundamental to web development, allowing developers to create dynamic and interactive web pages. The DOM enables the manipulation of page content, the BOM provides access to browser-related features, and the `window` object is the entry point for interacting with both.
  let age =prompt("Enter the age ");
  if(parseInt(age)>=18){
    alert("You are eligible to drive" );
}else{
    alert("You are not eligible to drive");
}


  