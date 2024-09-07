const RestaurantCard = ({ resData }) => {

  const { name, locality, areaName,cuisines, avgRatingString, cloudinaryImageId, costForTwo } = resData.info || {};

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : 'https://placeholder-image.com/150x150';

  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image-container">
        <img
          src={imageUrl}
          alt="restaurant-card"
          className="restaurant-card__image"
        />
      </div>
      <div className="restaurant-card__info">
        <h2 className="restaurant-card__name">{name}</h2>
        <h3 className="restaurant-card__cuisine">{locality}, {areaName}</h3>
        <div className="restaurant-card__details">
          <span className="restaurant-card__rating">{avgRatingString} ★</span>
          <span className="restaurant-card__delivery-time">5.89 mins</span>
        </div>
        <h3 className="restaurant-card__cuisine">{costForTwo}</h3>
        <h4 className="restaurant-card__cuisine">
          {cuisines?.length > 0 ? cuisines.slice(0, 3).join(', ') : cuisines}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;