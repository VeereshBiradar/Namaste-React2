import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

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
        {restaurantList.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </main>
  );
};

export default Body;
