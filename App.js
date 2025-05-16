import React from "react";
import ReactDOM from "react-dom/client";

//Header
// logo
// nav items
// body
//Restaurant container
//res cards
// footer
// copyright
//links
// address
//contact

const RestaurantCard = () => {
  return (
    <div className="resCard">
<h3>Meghna Foods</h3>
  </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo_Image" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="searchBar">Search</div>
      <RestaurantCard />
    </div>
  )
}



const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
