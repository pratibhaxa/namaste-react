import { useState } from "react";
import { resData } from "../utils/dummyData";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

    const handleClick = () => {
        const filterList = listOfRestaurants.filter(
            (res) => res.avgRating >= 4.0
        );
        setListOfRestaurants(filterList);
    };

    return (
        <>
            <div className="body">
                <div className="search">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {listOfRestaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.resName}
                            resData={restaurant}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
