const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image-container">
        <img
          src="https://via.placeholder.com/150"
          alt="restaurant-card"
          className="restaurant-card__image"
        />
      </div>
      <div className="restaurant-card__info">
        <h3 className="restaurant-card__name">Namste Restaurant</h3>
        <p className="restaurant-card__cuisine">Cusine</p>
        <div className="restaurant-card__details">
          <span className="restaurant-card__rating">3.3 ★</span>
          <span className="restaurant-card__delivery-time">5.89 mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
