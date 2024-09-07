import { API_URL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const shimmerCount = 25;
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const url = await fetch(API_URL);
    const data = await url.json();
    const fetchedRestaurants =
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(fetchedRestaurants);
    setFilteredRestaurants(fetchedRestaurants);
  };

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = filteredRestaurants.filter(
      (res) => res?.info?.avgRatingString > 4.5
    );
    setRestaurants(topRatedRestaurants);
  };

  return (
    <main className="body">
      <div
        className="elements-container"
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            className="search-input__field"
          />
        </div>
        <button className="filter-button" onClick={filterTopRatedRestaurants}>
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">

        {restaurants.length === 0 ? Array.from({ length: shimmerCount }, (_, index) => <ShimmerCard key={index} />): restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </main>
  );
};

export default Body;
