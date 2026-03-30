import { useEffect, useState } from "react";
import { resMenu } from "./mockData";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      // we are using dummy data because swiggy api was not working for this
      const fetchMenu = async () => {
        // const test = fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3520421&lng=77.3368654&restaurantId=725402&catalog_qa=undefined&submitAction=ENTER");
      
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(resMenu);
          }, 1000);
        });
        
        console.log(data[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        setCategories(data[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
        setResInfo(data[0].data.cards[2].card.card.info);
      };

    return {resInfo, categories};
}

export default useRestaurantMenu;