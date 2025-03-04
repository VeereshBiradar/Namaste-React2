const RestaurantCard = ({ resData }) => {
  const { name, locality, areaName, cuisines, avgRatingString, cloudinaryImageId, costForTwo } = resData.info || {};

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : 'https://placeholder-image.com/150x150';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 w-72 h-96 mt-8 cursor-pointer flex flex-col">
      <div className="w-full h-44 overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt="restaurant-card"
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-1 truncate">{name}</h2>
          <h3 className="text-sm text-gray-600 mb-2 truncate">{locality}, {areaName}</h3>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{avgRatingString} ★</span>
          <span className="text-sm text-gray-500">5.89 mins</span>
        </div>
        <div>
          <h3 className="text-sm text-gray-700 font-semibold">{costForTwo}</h3>
          <h4 className="text-sm text-orange-500 font-bold truncate">
            {cuisines?.length > 0 ? cuisines.slice(0, 3).join(', ') : cuisines}
          </h4>
        </div>
      </div>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </>
    )
  }
}

export default RestaurantCard;