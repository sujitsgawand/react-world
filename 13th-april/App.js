import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Let's go with new World! Happy"
// );

const jsxHeading = <h1 id="heading">Let's build the world!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
