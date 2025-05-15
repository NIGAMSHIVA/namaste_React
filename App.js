const heading = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am an h1 Tag"),React.createElement("h2",{},"I am an h2 tag")]
  )
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


