//==> Basic core REACT Code without JSX
// react works for small part of the website also example below here
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Heading Tag with h1 tag from react!"
// );

//==> If we have multiple nested/ multiple react elements
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is h1 tag"),
//     React.createElement("h2", {}, "This is h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h3", {}, "This is h3 tag"),
//     React.createElement("h4", {}, "This is h4 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
<div id="parent" >
    <div id="child" >
        <h1>This is h1 tag</h1>
    </div>
    <div id="child" >
        <h1>This is h1 tag</h1>
    </div>
</div>

React.createElement(object) ==> HTML (Browser understands)
React.createElement is an object. When ReactDOM read that object it converts into html in the browser.

*/

import React from "react";
import ReactDOM from "react-dom/client";

//==> React Eelement : to create react element in core react way
const heading = React.createElement(
  "header",
  { id: "header" },
  "Heading1 : React.createElement() Core React Element to create react elements."
);

//==> JSX syntax code : to create react elements in esier way
// Babel will compiles JSX to React Element.
const headingJsx = (
  <div className="card" tabIndex="1" data-target="#modal">
    <h2>Heading2 : JSX Syntax</h2>
    <p>Paragraph</p>
    <a href="#">Call to action button</a>
  </div>
);

//==> Functional Components : This components return JSX code --> Babel Complies --> React element --> javascript object --> DOM HTML.
// with Normal function
const HeadingComponent = function () {
  return <h1>Heading3 : Functional Component with Normal Function</h1>;
};

//==> Functional components :
// with Arrow function (flower braces and return key)
const HeadingComponent1 = () => {
  return (
    <h1 className="heading" data-target="modal">
      Heading4 : Functional Component with Normal Function
    </h1>
  );
};

//==> Functional components :
// with Arrow function (No braces and return key)

//==> Component Composition : Calling a component inside other component is component composition.
// Below Title component being called in HeadingComponent.
// As a component is just a normal javascript function, we can also call function with () paranthesis.

const HeadingComponent2 = () => (
  <h3 className="heading" data-target="modal">
    {Title()}
    <Title />
    <Title></Title>
    Sub Heading : Functional Component with ARROW Function
  </h3>
);

const Title = () => <h2>Heading : Namaste React</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(headingJsx);
root.render(<HeadingComponent />);
root.render(<HeadingComponent1 />);
root.render(<HeadingComponent2 />);
