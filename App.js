const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading Tag with h1 tag from react!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", {}, "This is h3 tag"),
    React.createElement("h4", {}, "This is h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

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

React.createElement is an object. When React Dom read that object it converts into html in the browser.

*/
