import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div style={{ backgroundColor: "#f0f0f0", margin: "10px auto" }}>
      <Link to="/restaurant/1255" style={{ color: "black" }}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          <img
            alt="burger-king-img"
            className="card-img"
            src={CDN_URL + cloudinaryImageId}
          />
          <h3 className="text-black">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{sla.slaString}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
