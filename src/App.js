import React, { useState } from 'react';
import QuestionCard from './components/questionCard.jsx';
import "./App.css"

const App = () => {
  const questions = [
    {
      question: 'What is the difference between HTML and HTML5?',
      answer: 'HTML (Hypertext Markup Language) is used for structuring web content. HTML5 is the latest version, introducing new elements like <header>, <nav>, and APIs for better functionality.',
      level:"Beginner",
    },
    {
      question: 'Explain the box model in CSS.',
      answer: 'The box model defines how elements are displayed as rectangular boxes. It includes content, padding, border, and margin. The total size of an element is the sum of these parts.',
      level:"Beginner",

    },
    {
      question: 'What is HTML used for in web development?',
      answer: 'HTML (Hypertext Markup Language) is used to structure the content of a web page, defining elements like headings, paragraphs, links, and images.',
      level:"Beginner",

    },
    {
      question: 'What does CSS stand for and how is it used?',
      answer: 'CSS (Cascading Style Sheets) is used to style and layout the appearance of HTML elements, controlling attributes like colors, fonts, margins, and padding.',
      level:"Beginner",
    },
    {
      question: 'What is JavaScript used for in web development?',
      answer: 'JavaScript is a scripting language used to add interactivity, dynamic content, and behavior to web pages.',
      level:"Beginner",
    },
    {
      question: 'How do you comment your code in HTML, CSS, and JavaScript?',
      answer: `In HTML: <!-- This is an HTML comment -->
      In CSS: /* This is a CSS comment */
      In JavaScript: // This is a single-line JavaScript comment or /* This is a multi-line JavaScript comment */`,
      level:"Beginner",

    },
    {
      question: ' How do you include an external CSS stylesheet in an HTML document?',
      answer: 'You use the <link> element in the <head> section of the HTML document, specifying the rel attribute as "stylesheet" and providing the href attribute with the path to the CSS file.',
      level:"Beginner",
    },
    {
      question: 'What is the purpose of the <img> tag in HTML?',
      answer: `The <img> tag is used to embed images on a web page. It requires the src attribute to specify the image file's source.`,
      level:"Beginner",
    },
    {
      question: 'How can you make a link open in a new tab in HTML?',
      answer: 'Add the target="_blank" attribute to the <a> (anchor) tag: <a href="url" target="_blank">Link Text</a>',
      level:"Beginner",
    },
    {
      question: 'What is the difference between padding and margin in CSS?',
      answer: `Padding is the space inside an element's border, while margin is the space outside the element's border.`,
      level:"Beginner",
    },
    {
      question: 'How do you create a bulleted list in HTML?',
      answer: 'Use the <ul> element for an unordered (bulleted) list and the <li> elements for list items within it.',
      level:"Beginner",
    },
    {
      question: 'What is the purpose of the <div> element in HTML?',
      answer: 'The <div> element is a generic container used to group and style other elements on a web page.',
      level:"Beginner",
    },
    {
      question: 'What is the basic structure of an HTML document?',
      answer: 'An HTML document consists of an opening <!DOCTYPE>, followed by an <html> element containing <head> and <body> sections.',
      level:"Beginner",
    },
    {
      question: 'How do you include JavaScript in an HTML document?',
      answer: 'You can include JavaScript using the <script> element placed in the <head> or <body> section of the HTML document.',
      level:"Beginner",
    },
    {
      question: 'What is the purpose of the onclick attribute in an HTML element?',
      answer: ' The onclick attribute is used to specify a JavaScript function that will be executed when the element is clicked.',
      level:"Beginner",
    },{
      question: 'What is the difference between an ID and a class in CSS?',
      answer: 'An ID is unique and can be applied to only one element, while a class can be applied to multiple elements. IDs are often used for unique styling or targeting specific elements with JavaScript.',
      level:"Beginner",
    },{
      question: 'How do you create a heading element in HTML?',
      answer: 'Use the <h1> to <h6> elements for headings, where <h1> represents the highest level of heading and <h6> the lowest.',
      level:"Beginner",
    },{
      question: 'What is the purpose of the <p> tag in HTML?',
      answer: 'The <p> tag is used to define paragraphs of text on a web page.',
      level:"Beginner",
    },{
      question: 'How do you apply inline CSS styles to an HTML element?',
      answer: `Use the style attribute within the HTML element's opening tag. For example: <p style="color: blue;">This is a blue paragraph.</p>`,
      level:"Beginner",
    },{
      question: 'What is the purpose of the <a> tag in HTML?',
      answer: 'The <a> tag is used to create hyperlinks, allowing users to navigate to other web pages or resources.',
      level:"Beginner",
    },{
      question: 'How can you create a line break in HTML?',
      answer: 'Use the <br> tag to create a line break within text or content.',
      level:"Beginner",
    },{
      question: 'What is the purpose of the <ul> and <ol> elements in HTML?',
      answer: 'The <ul> element is used for unordered (bulleted) lists, while the <ol> element is used for ordered (numbered) lists.',
      level:"Beginner",
    },{
      question: 'What are media queries in CSS? How do they relate to responsive design?',
      answer: `Media queries are CSS rules that allow you to apply styles based on the characteristics of the user's device, such as screen size, resolution, and orientation. They play a key role in responsive web design by enabling the adaptation of styles and layouts to different devices and screen sizes.`,
      level:"Beginner",
    },{
      question: 'What is the purpose of the "viewport" meta tag in HTML?',
      answer: 'The "viewport" meta tag in HTML is used to control how a webpage is displayed on mobile devices. It allows you to set the width and initial scale of the viewport, helping to ensure that the content appears properly on various screen sizes and orientations.',
      level:"Beginner",
    },{
      question: 'How does JavaScript differ from Java?',
      answer: 'Despite the similar names, JavaScript and Java are distinct languages. JavaScript is a scripting language used for web development and runs in web browsers. Java is a general-purpose programming language often used for server-side applications. They have different syntax, use cases, and environments.',
      level:"Beginner",
    },{
      question: 'Explain the difference between "margin" and "padding" in CSS.',
      answer: `Margin" is the space outside an element, creating distance between elements. "Padding" is the space within an element's border, separating content from the border.`,
      level:"Beginner",
    },{
      question: 'What is the purpose of CSS Flexbox and CSS Grid? How do they differ?',
      answer: 'Both Flexbox and Grid are layout systems. Flexbox focuses on one-dimensional layouts, like rows or columns, while Grid is a two-dimensional system with rows and columns.',
      level: "Intermediate"
    },{
      question: 'How do you handle cross-browser compatibility issues?',
      answer: 'Cross-browser compatibility is achieved by testing websites on various browsers and versions, using CSS prefixes, and avoiding browser-specific features.',
            level: "Intermediate"

    },{
      question: 'Describe the usage of local storage and session storage in HTML5.',
      answer: `Local Storage and Session Storage are web storage APIs to store data in a user's browser. Local Storage persists data even after the browser is closed, while Session Storage is available only during a browser session.`,
            level: "Intermediate"

    },{
      question: 'What is a CSS preprocessor, and why might you use one?',
      answer: 'A CSS preprocessor like Sass or Less enhances CSS with variables, nesting, and functions. This helps in writing more maintainable and efficient stylesheets.',
            level: "Intermediate"

    },{
      question: 'What are media queries in CSS? How do they relate to responsive design?',
      answer: `Media queries adapt styles based on the user's device characteristics. They're crucial for responsive design, adjusting layouts for different screen sizes and orientations.`,
            level: "Intermediate"

    },{
      question: 'What is the purpose of the "viewport" meta tag in HTML?',
      answer: 'The "viewport" meta tag controls how a webpage is displayed on mobile devices, setting the width and initial scale to ensure proper rendering.',
            level: "Intermediate"

    },{
      question: 'How does JavaScript differ from Java?',
      answer: 'JavaScript is a scripting language used for web development, while Java is a general-purpose programming language. They have different syntax, use cases, and environments.',

      level : "Beginner"
    },{
      question: 'Explain the concept of closures in JavaScript.',
      answer: `Closures occur when a function retains access to its parent's variables. They enable private variables and maintain state even after the parent function completes.`,
            level: "Intermediate"

    },{
      question: 'What is the Document Object Model (DOM)? How do you manipulate it using JavaScript?',
      answer: `The DOM represents a webpage's structure as objects. JavaScript manipulates it by accessing, modifying, or deleting elements and content.`,
            level: "Intermediate"

    },{
      question: 'Describe the difference between synchronous and asynchronous programming in JavaScript.',
      answer: 'Synchronous programming executes code sequentially, while asynchronous programming allows tasks to overlap, improving responsiveness. Promises and async/await are common tools.',
            level: "Intermediate"

    },{
      question: 'What is the purpose of AJAX in web development?',
      answer: 'AJAX (Asynchronous JavaScript and XML) enables web pages to fetch and send data to servers without reloading the whole page, enhancing user experience.',
            level: "Intermediate"

    },{
      question: 'What is a single-page application (SPA)? How does it differ from a traditional multi-page application?',
      answer: 'A single-page application loads one HTML page and dynamically updates content. In contrast, multi-page apps load new pages for each interaction.',
            level: "Intermediate"

    },{
      question: 'Explain the concept of "state" in the context of front-end frameworks like React.',
      answer: '"State" refers to data that changes in a component, affecting its behavior and appearance. It allows for dynamic updates and interactive user interfaces.',
            level: "Intermediate"

    },{
      question: 'What are props in React, and how are they used?',
      answer: 'Props (short for properties) are inputs passed from a parent to a child component in React. They allow data to flow down the component tree.',
            level: "Intermediate"

    },{
      question: 'What is JSX in React?',
      answer: 'JSX (JavaScript XML) is a syntax extension for React. It allows you to write HTML-like code within JavaScript, making it easier to create React components.',
            level: "Intermediate"

    },{
      question: 'What is responsive web design, and how do you achieve it?',
      answer: 'Responsive web design adapts layouts for different screen sizes. Achieve it using media queries, fluid grids, and flexible images.',
            level: "Intermediate"

    },{
      question: 'How would you optimize the performance of a web page?',
      answer: 'Optimize performance by minimizing HTTP requests, using compression, caching resources, reducing image sizes, and optimizing critical rendering paths.',
            level: "Intermediate"

    },{
      question: 'Explain the concept of closures in JavaScript.',
      answer: `Closures occur in JavaScript when a function is defined within another function and retains access to its parent function's variables even after the parent function has finished executing. This allows for the creation of private variables and maintaining state between function calls.`,
            level: "Intermediate"

    },{
      question: 'What is the Document Object Model (DOM)? How do you manipulate it using JavaScript?',
      answer: 'The DOM is a programming interface provided by browsers that represents the structure of a web page as a tree of objects. JavaScript can be used to manipulate the DOM by adding, modifying, or deleting elements, attributes, and content on the page. This enables dynamic interactions and updates without needing to reload the entire page.',
            level: "Intermediate"

    },{
      question: 'What is a single-page application (SPA)? How does it differ from a traditional multi-page application?',
      answer: 'A single-page application (SPA) is a web application that loads a single HTML page and dynamically updates its content as the user interacts with it. This is in contrast to traditional multi-page applications where each interaction typically involves loading a new HTML page from the server.',
            level: "Intermediate"

    },{
      question: 'Explain the concept of "state" in the context of front-end frameworks like React.',
      answer: 'In the context of front-end frameworks like React, "state" refers to the data that can change in a component and affect its behavior and appearance. State allows for dynamic updates and interactive user interfaces.',
            level: "Intermediate"

    },{
      question: 'What is responsive web design, and how do you achieve it?',
      answer: 'Responsive web design is an approach that aims to create web pages that adapt and respond to different screen sizes and devices. Achieving it involves using fluid grids, flexible images, and media queries to ensure that the content is legible and visually appealing across various devices.',
            level: "Intermediate"

    },{
      question: 'What is the purpose of a CSS preprocessor like Sass or Less?',
      answer: 'A CSS preprocessor enhances the capabilities of traditional CSS by adding variables, mixins, functions, and nested rules. This helps in writing cleaner, more maintainable, and efficient stylesheets.',
            level: "Intermediate"

    },{
      question: ' Explain the concept of event delegation in JavaScript.',
      answer: 'Event delegation is a technique where a single event handler is attached to a higher-level element, like a container, instead of attaching handlers to individual elements. This reduces memory consumption and simplifies event management for dynamically generated elements.',
            level: "Intermediate"

    },{
      question: 'How does the "this" keyword work in JavaScript?',
      answer: 'The value of the "this" keyword depends on the context in which a function is called. In a regular function, "this" refers to the global object (e.g., "window" in a browser). In an object method or event handler, "this" refers to the object that the method belongs to.',
            level: "Intermediate"

    },{
      question: 'What is the Virtual DOM in the context of frameworks like React?',
      answer: `The Virtual DOM is a concept used in frameworks like React to improve performance. It's a lightweight representation of the actual DOM, allowing the framework to efficiently track and update changes before applying them to the real DOM, minimizing unnecessary reflows.`,
            level: "Intermediate"

    },{
      question: 'Explain the concept of "prop drilling" in React. How can you mitigate it?',
      answer: 'Prop drilling occurs when props are passed through multiple levels of components to reach a deeply nested child component. This can lead to code complexity. It can be mitigated using techniques like Context API, Redux, or component composition patterns.',
            level: "Intermediate"

    },{
      question: 'Describe the process of AJAX and its role in asynchronous web applications.',
      answer: 'AJAX (Asynchronous JavaScript and XML) allows web pages to retrieve and send data to a server without needing to reload the entire page. It enhances the user experience by enabling dynamic content updates and interactions.',
            level: "Intermediate"

    },{
      question: 'What are closures used for in JavaScript? Provide an example.',
      answer: 'Closures are often used to create private variables and encapsulate functionality. For example, a counter function can use closures to maintain its own private count variable while exposing methods to increment and retrieve the count.',
            level: "Intermediate"

    },{
      question: 'Explain the concept of "hoisting" in JavaScript.',
      answer: 'Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. However, only the declarations are hoisted, not the assignments or initializations.',
            level: "Intermediate"

    },{
      question: 'How does CSS specificity work? Provide an example.',
      answer: `CSS specificity determines which style rules are applied when multiple rules target the same element. It's based on selectors' combinations of IDs, classes, and tags. An example: #header .menu has higher specificity than .menu.`,
            level: "Intermediate"

    },{
      question: 'What is the difference between "localStorage" and "sessionStorage" in HTML5?',
      answer: 'Both "localStorage" and "sessionStorage" are used to store key-value pairs in a web browser, but "localStorage" data persists even after the browser is closed, while "sessionStorage" data is only available for the duration of a browser session.',
            level: "Intermediate"

    },{
      question: 'Explain the role of a CSS preprocessor in a front-end development workflow.',
      answer: 'A CSS preprocessor streamlines the process of writing and maintaining CSS. It offers features like variables, nesting, mixins, and functions, which aid in maintaining consistency and reusability in stylesheets.',
            level: "Intermediate"

    },{
      question: 'What is the purpose of the "useEffect" hook in React?',
      answer: 'The "useEffect" hook is used in React functional components to manage side effects and perform tasks like data fetching, DOM manipulation, and subscriptions. It replaces lifecycle methods in class components.',
            level: "Intermediate"

    },{
      question: 'Describe the "box-sizing" CSS property and its values.',
      answer: `The "box-sizing" property controls how an element's total width and height are calculated. It can take two values: "content-box" (default), where only the content size is included, and "border-box," where padding and border are included in the dimensions.`,
            level: "Intermediate"

    },{
      question: 'What is the purpose of a CSS flex container and flex items?',
      answer: 'CSS Flexbox is used for creating flexible layouts. A flex container holds flex items. The container defines how the items should be laid out, aligned, and spaced, allowing for responsive and dynamic layouts.',
            level: "Intermediate"

    },{
      question: 'Explain the difference between "null" and "undefined" in JavaScript.',
      answer: `"Undefined" is a value that a variable has when it is declared but hasn't been assigned a value. "Null" is a value that represents intentional absence of any value. It's recommended to use "null" when you want to explicitly indicate a lack of value.`,
            level: "Intermediate"

    },{
      question: 'What are Web Components, and how do they differ from traditional HTML elements?',
      answer: 'Web Components are a set of web platform APIs that allow you to create your own reusable custom HTML elements. Unlike traditional HTML elements, Web Components encapsulate their behavior and styling, making them more modular and reusable.',
            level: "Intermediate"

    },{
      question: 'How can you optimize the loading time of a web page?',
      answer: `To optimize loading times, you can use techniques like:

      •	Minifying and compressing assets (HTML, CSS, JavaScript)
      •	Caching resources
      •	Using lazy loading for images and non-essential content
      •	Reducing the number of HTTP requests`,
      level: "Intermediate"

    },{
      question: 'Describe the difference between synchronous and asynchronous JavaScript code execution.',
      answer: `Synchronous code executes in sequence, one instruction at a time, blocking the execution until each operation completes. Asynchronous code allows multiple operations to be executed concurrently, and it doesn't block the execution of subsequent instructions.`,
            level: "Intermediate"

    },{
      question: 'What is a closure? Provide an example where closures are useful.',
      answer: 'A closure is a function that has access to its own scope, the scope in which it was created, and the global scope. This allows it to "remember" variables even after its parent function has finished executing. An example could involve using closures to create private variables in a module pattern.',
            level: "Intermediate"

    },{
      question: 'How does the event loop work in JavaScript?',
      answer: 'The event loop is a fundamental concept in JavaScript that handles asynchronous operations. It continually checks the message queue for tasks to execute. When a task is complete, the event loop dequeues it and executes it, ensuring that the application remains responsive.',
            level: "Intermediate"

    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const showNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="app">
      <h1>Question and Answer App</h1>
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        answer={questions[currentQuestionIndex].answer}
        level={questions[currentQuestionIndex].level}
        onShowNextQuestion={showNextQuestion}
      />
      {currentQuestionIndex === questions.length && (
        <p>Congratulations! You have completed all questions.</p>
      )}
    </div>
  );
};


export default App;