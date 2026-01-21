import RestaurntCard from "./RestaurntCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
  let resListData = resList;
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() => {
                console.log(resListData)
                resListData = resListData.filter((res) => res.info.avgRating > 4.3)
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