//! What is React ?
// React is a Js Library, which is used for creating UI for different Application.

import { Component } from "react";

//! Library VS Framework

// Library is the collection of reusable methods, functions etc. But Framework is the collection of multiple libraries.

// In Library, you are in-charge, means you can choose where and when you wants to use the library. But In Framework, framework is in-charge, means it tells you where to put specific part of the code.

// Library :- ReactJs, JQuery etc...
// Framework :- AngularJs, VueJs etc...

//! Features Of React

//? Single Page Application
// In traditional Multipage Applications that loads a new HTML page for each navigation action. React has feature of Single Page Application which means contins only one html file, which dynamically update its content as the user interacts with the App. This result in faster and smoother transitions, providing more app like experience.

//? Declarative
// React is declarative in nature, means instead of telling how to do, you just have to say what to do, and the React will do for you. Simply it means you don't have to specify each and every steps.

//? Virtual Dom
// React uses virtual DOM to update its content. Virtual DOM is the exact replica of the real DOM. Whenever you make any changes, React will creates a new virtual DOM with updated node. And then it compares the newly updated virtual DOM with the preUpdated DOM, it uses Diffing Algorithm for comparision. If it finds any changes then only the updated node is added to the real DOM.

//? Component Based Architecture
// It is a way to build applications, where the whole UI is divided into multiple reusable and independent components.

//? There are 2 types of Components:- Functional Component and Class Component

//          Class Based Component                           Functional Component
//              JS Classes                                      JS Functions
//              StateFull                                       StateLess
//              No Hooks                                        Hooks
//              LifeCycleMethods                                No LifeCycleMethods
//              this keyword                                    No this keyword
//              render method                                   No render method

//? Class Based Components

// class CBC extends Component {
//     render(){
//         return (
//             <div>

//             </div>
//         )
//     }
// }


//? Function Based Component

// const FBC = () => {
//     return (
//         <div>
//         </div>
//     )
// }

//? JSX 
// JSX stands for JavaScript XML. It is a syntax extension of JavaScript, which allow us to write HTML within JavaScript inside React.

//? JSX vs Regular JavaScript
//                      JSX                                     Regular JavaScript
//              HTML inside JavaScript                      Uses Standard JavaScript Syntax
//         Used in React to define UI components        Used everywhere in JavaScript development
//          Easier to read & write, like HTML              More complex, harder to visualize UI
//          Needs to be compiled using Babel                    No extra compilation needed

{
// JSX Allows you to write HTML elements in JavaScript and place them in the DOM without using methods like createElement().
// const element = <h1>Hello, JSX!</h1>;

// Regular JS Requires using methods like createElement() to create DOM elements.
// const element = React.createElement('h1', null, 'Hello, JavaScript!');
}

{
// JSX Allows embedding JavaScript expressions within curly braces {}.
// const name = 'World';
// const element = <h1>Hello, {name}!</h1>;

// Regular JavaScript Requires template literals for embedding JavaScript.
// const name = 'World';
// const element = React.createElement('h1', null, `Hello, ${name}!`);
}

{
// JSX Needs to be compiled into regular JavaScript using a tool like Babel before it can be understood by the browser.

// Regular JavaScript Does not require compilation and can be run directly in the browser.
}

