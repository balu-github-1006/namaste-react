import { CDN_URL } from "./utils/constants";

//RestarantCard
const RestaurantCard = (props) => {
  const { resData } = props; // Object De-structured
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info; //Again Nested Object De-structured
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h5>{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating} Stars</h6>
      <h6>{costForTwo} </h6>
    </div>
  );
};

export default RestaurantCard;
