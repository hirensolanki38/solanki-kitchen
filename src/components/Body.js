import RestaurntCard from "./RestaurntCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {resList.map((restaurant, index) => (
                <RestaurntCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
        </div>
    )
};

export default Body;