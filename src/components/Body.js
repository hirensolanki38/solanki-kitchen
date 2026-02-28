import RestaurntCard from "./RestaurntCard";
import resList from "../utils/resList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // let resListData = resList;
  // const [resListData, setResListData] = useState(resList);
  const [resListData, setResListData] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");

  // console.log("Body Rendered");

  const fetchData = async () => {
    console.log("Fetch Data function");
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2072943&lng=72.8436443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2315453&lng=72.8662668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // Optional Chaining
    setResListData(restaurantList);
    setFilterResList(restaurantList);
  };

  // Conditional Rendering
  return resListData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResListData = resListData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterResList(filteredResListData);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredResListData = filterResList.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setFilterResList(filteredResListData);
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="res-container">
        {filterResList.map((restaurant, index) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
