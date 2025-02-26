import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    const getRestaurantInfo = async () => {
        const api = await fetch(MENU_API + resId);
        const data = await api.json();
        setResInfo(data);
    }

    useEffect(() => {
        getRestaurantInfo();
    }, []);
    return resInfo;
}

export default useRestaurantMenu;