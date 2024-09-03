import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <main className="body">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          className="search-input__field"
        />
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </main>
  );
};

export default Body;
