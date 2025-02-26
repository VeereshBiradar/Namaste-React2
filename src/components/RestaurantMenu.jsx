import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {

    const { resId } = useParams(); //get the id from url

    const resInfo = useRestaurantMenu(resId);

    const onlineStatus = useOnlineStatus();

    if (resInfo === null) {
        return <ShimmerCard />
    }

    if(onlineStatus === false) {
        return <h1>You're offline! Please check your internet connection</h1>
    }

    const { name, city } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <>
            <h1>{name}, {city}</h1>
            <h2>Menu Items: </h2>
            <ul>
                {itemCards.map((item, index) => {
                    return (
                        <li key={index}>{item?.card?.info?.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default RestaurantMenu;