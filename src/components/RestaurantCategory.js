import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, handleAccordian }) => {

    // const [showItems, setShowItems] = useState(false)

    

//   console.log(data);
  return (
    // accordian Header
    <>
      <div>
        <div className="w-6/12 mx-auto my-8 bg-gray-100  shadow-lg p-3 rounded ">
          <div className="flex justify-between py-4 cursor-pointer" onClick={() => handleAccordian(data.title)}>
            <span className="font-bold ">
              {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>

          {/* Accordian Body */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
