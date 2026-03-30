import { useEffect, useState } from "react";
import { resMenu } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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
  const [showIndex, setShowIndex] = useState(0);

  const data = "dummy data";

  const handleAccordian = (index, value) => {
        console.log(index, value);
        if (showIndex !== index)
            setShowIndex(index);
          else {
            setShowIndex(null)
          }
    }

  const { resInfo, categories } = useRestaurantMenu();
  // console.log("categories", categories);

  if (!resInfo) return <Shimmer />;

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-3 text-2xl">{resInfo.name}</h1>
      <h2 className="font-bold text-xl">Menu ({resInfo.costForTwoMessage})</h2>
      <ul>
        <li>Biryani</li>
        <li>Coffee</li>
        <li>Crossiant</li>
      </ul>
      <h3 className="font-bold text-xl">Most Ordered cuisines</h3>
      <ul>
        {resInfo.cuisines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    {/* Category section */}
      <div>
        {categories.map((category, index) => {
          //  console.log(category.card.card);

          return <RestaurantCategory key={category.card.card.title} data={category.card.card} showItems={index === showIndex} handleAccordian={(value) => handleAccordian(index, value)}/>
})}
      </div>
    </div>
  );
};

export default RestaurantMenu;
