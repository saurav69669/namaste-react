import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log("data itemcards: ", items);

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    console.log("item: ", item);
    dispatch(addItem(item));
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="grid grid-cols-12 gap-4 py-2 border-b border-gray-400"
        >
          {/* Text/details: 9 columns */}
          <div className="col-span-10 text-start">
            <span className="font-semibold text-[#02060cbf]">
              {item.card.info.name} &nbsp;
            </span>
            <span>₹{item.card.info.price / 100}</span>
            {item.card.info.description && (
              <p className="text-xs pt-1">{item.card.info.description}</p>
            )}
          </div>

          {/* Image: 3 columns */}
          <div className="col-span-2 flex justify-end relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-[80%] object-cover rounded"
            />
            <button className="absolute rounded bg-white text-[#1ba672] -bottom-1 left-[32%]  shadow-lg p-1 px-4 border-[0.5px] border-gray-100 cursor-pointer" onClick={() => handleAddItem(item)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
