import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Let's go with new World! Happy"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
