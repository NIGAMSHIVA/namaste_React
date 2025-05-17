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
    
        <img
          className="res-image "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rv0ov9ox5vjqowrxrejj"
      />
    
      <div className="res-name">
        <h4 className="">Baba Anandeshwar foods</h4>
        <h4>4.3stars
      </h4>
        <h5>Italia,Mexican and japanese</h5>
        <h5>38 minutes</h5>
      </div>
      
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo_Image"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
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
    <>
          <div className="searchBar">Search</div>

    < div className="res-container">
      
        <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
     
     
    
      </div>
      </>
  );
};

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
