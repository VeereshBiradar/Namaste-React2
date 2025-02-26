import { API_URL } from "../utils/constant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

const Body = () => {
  const shimmerCount = 25;
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchRestaurants = async () => {
    setLoading(true)
    try {
      const url = await fetch(API_URL);
      const data = await url.json();
      const fetchedRestaurants =
        data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    }
    catch (error) {
      console.error("Error fetching restaurants:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const filterTopRatedRestaurants = () => {
    if (filteredRestaurants.length !== restaurants.length) {
      setFilteredRestaurants(restaurants);
    } else {
      const topRatedRestaurants = restaurants.filter(
        (res) => res?.info?.avgRatingString > 4.5
      );
      setFilteredRestaurants(topRatedRestaurants);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    if (value.trim() === '') {
      setFilteredRestaurants(restaurants);
    }
    else {
      const searchedRestaurantsList = restaurants.filter((res) =>
        res?.info?.name?.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredRestaurants(searchedRestaurantsList);
    }
  }

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
            type="text" value={searchValue} onChange={handleSearch}
            placeholder="Search..."
            className="search-input__field"
          />
        </div>
        <button className="filter-button" onClick={filterTopRatedRestaurants}>
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {loading ? (
          Array.from({ length: shimmerCount }).map((_, index) => (
            <ShimmerCard key={index} />
          ))
        ) : filteredRestaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <Link to={'/restaurant/' + res.info.id} key={res.info.id}>{res.info.promoted ? (<RestaurantCardPromoted resData={res} />) : (<RestaurantCard resData={res} />)}</Link>
          ))
        )}
      </div>
    </main>
  );
};

export default Body;
