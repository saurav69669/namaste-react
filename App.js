import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namste React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX (transpiled before it reaches the JS engine of browser) - by parcel - Babel
const jsxHeading = (
  <>
    <h1 id="heading" tabIndex={2}>
      Namaste React Using jsx 😍
    </h1>{" "}
    <h2 tabIndex={1}>this is heading 2 boi!</h2>{" "}
  </>
);

const elem = <span>Namste Elem</span>;

const title = (
  <div>
    {elem}
    <h2>Namaste react using JSX! 👌</h2>
  </div>
);

// Component composition - when render component inside ither component
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React functional component</h1>
    {title}
  </div>
);
root.render(<HeadingComponent />);
