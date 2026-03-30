import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searhText, setSearhText] = useState("");

  const PromotedLabelCard = withPromotedLabel(RestaurantCard);
  // somehow it is not working error: "../utils/UserContext" module not found
  // const {loggedInUser , setUserName} = useContext(UserContext);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log("response check: ", json?.data.cards[1]);
    // console.log(
    //   "response check 2: ",
    //   json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    // );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  // console.log("listOfRestaurants", listOfRestaurants);

  const userOnline = useOnlineStatus();

  if (!userOnline) {
    return <h3>Looks like you are offline buddy! 😪</h3>;
  }

  const handleSearch = () => {
    console.log(searhText);
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searhText.toLowerCase()),
    );
    setFilteredRestaurants(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searhText}
            className="p-2 rounded outline-none border border-green-200"
            onChange={(e) => setSearhText(e.target.value)}
            placeholder="search your favourite restaurant"
          ></input>
          <button
            className="searchBtn px-4 py-2 bg-green-100 cursor-pointer m-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="filter-btn px-4 py-2 bg-pink-100 ml-2 rounded cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3,
              );
              console.log("btn clicked", filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

          {/* <label>UserName: </label>
          <input
            type="text"
            value={loggedInUser}
            className="p-2 rounded outline-none border border-blue-200"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
          ></input> */}

        </div>
      </div>
      <div className="res-container flex flex-wrap justify-around rounded">
        {filteredRestaurants.map((restaurant) => {
          return restaurant.info.avgRating > 4.5 ? (
            <PromotedLabelCard resData={restaurant} key={restaurant.info.id}/>
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
          // return (

          //   <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          // )
        })}
      </div>
    </div>
  );
};

export default Body;
