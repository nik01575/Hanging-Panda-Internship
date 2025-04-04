//! What is React ?
// React is a Js Library, which is used for creating UI for different Application.

import { Children, Component, StrictMode, Suspense } from "react";

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

//! Components
// Components are the reusable, independent peice of UI. 

//& Built-in components 

//& <Fragment/> or <> </> :

//  It is used for holding multiple JSX element and render those element to the UI without Creating extra Node.

//& <Profiler/> :

//  Profiler is a react component that measures the performance and detects the slow parts in your app. It tells you how much time a component takes to render, helping you optimize performance. Wrap your components inside <Profiler> and provide a callback function to log performance data. 

// function onRenderCallback(id, phase, actualDuration) {
//    console.log(`Component: ${id}, Time taken: ${actualDuration}ms`);
// }

// return (
//     <App>
//         <Profiler id="Sidebar" onRender={onRenderCallback}>
//         <Sidebar />
//         </Profiler>

//         <Profiler id="Content" onRender={onRenderCallback}>
//             <Content>
//                 <Profiler id="Editor" onRender={onRenderCallback}>
//                     <Editor />
//                 </Profiler>
//                 <Preview />
//             </Content>
//         </Profiler>
//   </App>
// )

//& <Suspense/> :

// It display a fallback until its children have finished loading.

{/* 
function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
    
<Suspense fallback={<BigSpinner />}>
  <Albums />
</Suspense>  
*/}

// In the example below, the Albums component suspends while fetching the list of albums. Until it’s ready to render, React switches the closest Suspense boundary above to show the fallback—your Loading component. Then, when the data loads, React hides the Loading fallback and renders the Albums component with data.

// children: The actual UI you intend to render. If children suspends while rendering, the Suspense boundary will switch to rendering fallback.
// fallback: An alternate UI to render in place of the actual UI if it has not finished loading. 

//& <StrictMode/> : 

// Use StrictMode to enable additional development behaviors and warnings for the component tree 


//!==================================Hooks==========================================

// Hooks : Hooks are the in-built function in React.

//! use State :
// useState is a React Hook which stores the data in the component level. It return an array which contains undefined, and setter fn(). This setter function is used to change the value of the state dynamically. States are mutable and can be changed within the component.

//! {} 
// It is known as expression which is used to use the js code inside the jsx.

//! Props :
// Props are the short form of properties, which are used to Pass Data from Parent Component to the Child Component. Props are immutable means it cannot be changed during runTime.

//! Props Drilling :
// When we wants to pass data from Parent Component to the nested Child Component, it is known as Props Drilling.

//! data?.map(() => {})
// Optional Chaining (?.):
// The ?. is like a safety check. It makes sure that allUser exists before trying to use the map function. If allUser is null or undefined, it won't try to call map, preventing errors.


//!==================================Class Based Components==========================================


//! render () :
// Render is the only methods that requires in the Class Based Components.
// Render method should specify what you wants to appear on the UI.
// When Strict Mode is on, React will call render twice in development and then throw away one of the results. This helps you notice the accidental side effects that need to be moved out of the render method.
//! Class Based Components:
// Have JavaScript Class
// StateFull
// this keyword
// render method
// life cycle method
// No Hooks

//! LifeCycle Methods:
//& ComponentDidMount : 
// The code present inside ComponentDidMount runs, when the Component is loaded on the UI.
//& ComponentDidUpdate :
// The Code present inside componentDidUpdate runs, when any changes occurs on the UI.
//& ComponentWillUnmount :
// The Code present inside ComponentWill Unmount runs, when any component is removed from the UI.



//!============================== Hooks =====================================

// Hooks are the in-built function in React, which starts with use Keywords.

// Rules of Using Hooks :

// 1. Do not call Hooks inside conditions or loops.
        for (let i = 0; i < 10; i++) {
        }
// 2. Do not call Hooks after a conditional return statement. 
        if (condition) {
        }
// 3. Do not call Hooks in event handlers.
        function handleClick() {
        }
// 4. Do not call Hooks in class components.
        class Bad extends React.Component {
          render() {
          }
        }
// 5. Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
        const style = useMemo(() => {
          const theme = useContext(ThemeContext);
          return (
            createStyle(theme)
          );
        });