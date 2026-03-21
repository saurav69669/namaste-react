import { useEffect, useState } from "react";
import { resMenu } from "./mockData";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      // we are using dummy data because swiggy api was not working for this
      const fetchMenu = async () => {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(resMenu);
          }, 500);
        });
    
        console.log(data[0].data.cards[2].card.card.info);
        setResInfo(data[0].data.cards[2].card.card.info);
      };

    return resInfo;
}

export default useRestaurantMenu;