import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <Link
      to="/restaurant/1255"
      className="w-70 m-2 p-2 rounded bg-[#F0F0F0] text-black"
    >
      <div>
        <div className="res-card">
          <img
            alt="burger-king-img"
            className="card-img h-50 w-full object-cover bg-center bg-no-repeat"
            src={CDN_URL + cloudinaryImageId}
          />
          <h3 className="text-black font-bold py-1">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{sla.slaString}</h4>
        </div>
      </div>
    </Link>
  );
};

// Higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative w-70 bg-[#F0F0F0] ">
        <label className="absolute top-6 bg-amber-900 text-white rounded p-0.5">Highly Rated</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
