const RestaurantCard = (props) => {

  const { resData } = props; 

  const { name, place, breakfast, dinner, rating, imageId} = resData;

  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image-container">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/"+imageId}
          alt="restaurant-card"
          className="restaurant-card__image"
        />
      </div>
      <div className="restaurant-card__info">
        <h2 className="restaurant-card__name">{name}</h2>
        <h3 className="restaurant-card__cuisine">{place}</h3>
        <div className="restaurant-card__details">
          <span className="restaurant-card__rating">{rating} ★</span>
          <span className="restaurant-card__delivery-time">5.89 mins</span>
        </div>
        <h4 className="restaurant-card__cuisine">{dinner}</h4>
        <h5 className="restaurant-card__cuisine">{breakfast}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
