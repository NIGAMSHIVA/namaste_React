import { RestaurantCard } from "./RestaurantCard";
import { resDataOBJ } from "../utils/mockData";

export const Body = () => {
  return (
    <>
      <div className="searchBar">Search</div>

      <div className="res-container">

        {
          resDataOBJ.map((uniq, index) => {
            return(

              <RestaurantCard
                resDataKey={uniq}
                key={uniq?.card?.card?.info.id}
                
              />

            )
          })
        }
        
      </div>
     
    </>
  );
};