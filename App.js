{
  /* <div id="parent">
  <div id="child">
    <h1>I'm h1 tag!</h1>
  </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I'm an h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I'm an h2 tag!"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
