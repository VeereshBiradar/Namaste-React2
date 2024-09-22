import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId }= useParams();


    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async () => {
        const api = await fetch(MENU_API+resId);
        const data = await api.json();
        setResInfo(data);
    }

    if(resInfo === null) {
        return <ShimmerCard/>
    }

    const {id, name, city, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
   



    return (
        <>
           <h1>{name}, {city}</h1>
           <h2>Menu Items: </h2>
            <ul>
                {itemCards.map((item, index)=> {
                    return (
                        <li key={index}>{item?.card?.info?.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default RestaurantMenu;