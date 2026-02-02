import RestaurntCard from "./RestaurntCard";
import resList from "../utils/resList";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // let resListData = resList;
  // const [resListData, setResListData] = useState(resList);
  const [resListData, setResListData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      console.log('Fetch Data function');
      // https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2072943&lng=72.8436443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2072943&lng=72.8436443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      // Optional Chaining
      setResListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    return resListData.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() => {
                console.log(resListData)
                const filteredResListData  = resListData.filter((res) => res.info.avgRating > 4.3)
                setResListData(filteredResListData);
                console.log(resListData);
              }}>Top Rated Restaurnt</button>
            </div>
            <div className="res-container">
              {resListData.map((restaurant, index) => (
                <RestaurntCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
        </div>
    )
};

export default Body;