import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategoryAccordion from "./RestaurantCategoryAccordion";

const RestaurantMenu = () => {

    const { resId } = useParams(); //get the id from url
    // const [showIndex, setShowIndex] = useState(0)

    const resInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

    if (resInfo === null) return <ShimmerCard />;

    if (onlineStatus === false) return <h1>You're offline! Please check your internet connection</h1>;

    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;

    const itemCategories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return (
        <>
            <div className="text-center">
                <h1 className="font-bold text-2xl my-6">{name}</h1>
              
                {itemCategories.map((categories, index) =>
                    <RestaurantCategoryAccordion
                        key={index} 
                        data={categories?.card?.card}
                        showItems={index === 2}
                        setShowIndex={() => setShowIndex(index)} />)}
            </div>
        </>
    )
}

export default RestaurantMenu;