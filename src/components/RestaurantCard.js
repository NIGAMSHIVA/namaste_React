export const RestaurantCard = ({ resDataKey }) => {
  const resKey = resDataKey?.card?.card?.info;
  const {avgRating,cuisines,costForTwo} = resDataKey?.card?.card?.info;

  console.log(resKey.cloudinaryImageId);

  return (
    <div className="resCard">
      <img
        className="res-image "
        src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resKey.cloudinaryImageId}    
      />

      <div className="res-name">
        <h4 className="">{resKey.name}</h4>
        <h4>{avgRating}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwo }</h5>
        <h5>{resKey.sla.slaString}</h5>
      </div>
    </div>
  );
};