import { useEffect, useState } from "react";
import { resMenu } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const resInfo = () => {
  // const [resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // // we are using dummy data because swiggy api was not working for this
  // const fetchMenu = async () => {
  //   const data = await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(resMenu);
  //     }, 500);
  //   });

  //   console.log(data[0].data.cards[2].card.card.info);
  //   setResInfo(data[0].data.cards[2].card.card.info);
  // };
  const resInfo = useRestaurantMenu();

  return resInfo ? (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu ({resInfo.costForTwoMessage})</h2>
      <ul>
        <li>Biryani</li>
        <li>Coffee</li>
        <li>Crossiant</li>
      </ul>
      <h3>Most Ordered cuisines</h3>
      <ul>
        {resInfo.cuisines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default resInfo;
