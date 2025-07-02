import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent", key: "yo7" }, [
  React.createElement("div", { id: "child", key: "yo0" }, [
    React.createElement("h1", { id: "heading", key: "yo" }, "I'm an h1 tag!"),
    React.createElement("h2", { id: "heading2", key: "yo1" }, "I'm an h2 tag!"),
  ]),
  React.createElement("div", { id: "child2", key: "yo6" }, [
    React.createElement("h1", { id: "heading", key: "yo2" }, "I'm an h1 tag!"),
    React.createElement("h2", { id: "heading2", key: "yo3" }, "I'm an h2 tag!"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
