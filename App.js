import React from "react";
import ReactDOM from "react-dom/client";

const Heading = 
  
   <p>Hello world !</p>;
;

const head1 = <h1>
  {Heading}
  Hi guys
</h1>

// jsx should return only one parent element If there Are multiple child Wrap them inside one parent.
// You can write JS inside JSX between {} These Curly braces. Cross Site Scrypting.
// Javascript variable should be called only after declaring 

const HeadingComponent = () => {
  return (
    <>
      {head1 }
      <div id="container">
        <h1>Hello world From Components!</h1>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
