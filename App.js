import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = (props) => {
  return (
    <div className="resCard">
      <img
        className="res-image "
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rv0ov9ox5vjqowrxrejj"
      />

      <div className="res-name">
        <h4 className="">{props.resDataKey.card.info.name}</h4>
        <h4>{props.resDataKey.card.info.avgRating}</h4>
        <h5>{props.resDataKey.card.info.cuisines}</h5>
        <h5>{props.resDataKey.card.info.sla.slaString}</h5>
      </div>
    </div>
  );
};

const resDataOBJ = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "665242",
      name: "Hunger Hackers",
      cloudinaryImageId: "b6e3f3e981926f02211c9d02150c6cfe",
      locality: "Awas Vikash Colony",
      areaName: "Naubasta",
      costForTwo: "₹249 for two",
      cuisines: ["Italian-American", "Snacks", "Fast Food", "Salads"],
      avgRating: 3.5,
      veg: true,
      parentId: "104227",
      avgRatingString: "3.5",
      totalRatingsString: "9",
      sla: {
        deliveryTime: 29,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=665242&source=collection&query=Burger",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
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

      <div className="res-container">
        <RestaurantCard resDataKey={resDataOBJ} />
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
