import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCardList, setItemCardList] = useState([]); // 👈 empty array, not null

    const { resId } = useParams();
    
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:9000/api/menu?lat=21.2315453&lng=72.8662668&restaurantId=" +
        resId,
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);

    // 👇 Set itemCards inside fetchData itself
    let itemCards =
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    if (!itemCards) {
      itemCards =
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
    }

    console.log("itemCards:", itemCards);
    setItemCardList(itemCards || []); // 👈 fallback to empty array
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card.card.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCardList.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
