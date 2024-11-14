import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX transpile before it reaches to JS Engine => Parcel => Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React from JSX.</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
