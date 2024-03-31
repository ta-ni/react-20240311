import { useState, useEffect } from 'react';
import { Layout } from "./components/layout/component.jsx";
import { RestaurantTabs } from "./components/restaurant-tabs/component.jsx";
import { Restaurant } from "./components/restaurant/component.jsx";
import { restaurants } from "./constants/mock.js";

const localStorageKeys = {
    CURRENT_RESTAURANT_INDEX: "current-restaurant-index"
}

export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => {
        return Number(localStorage.getItem(localStorageKeys.CURRENT_RESTAURANT_INDEX));
    });
    const currentRestaurant = restaurants[currentRestaurantIndex];

    useEffect(() => {
        localStorage.setItem(localStorageKeys.CURRENT_RESTAURANT_INDEX, currentRestaurantIndex);
    }, [currentRestaurantIndex]);


    return (
        <Layout>
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={setCurrentRestaurantIndex}
                currentIndex={currentRestaurantIndex}
            />
            {<Restaurant restaurant={currentRestaurant}/>}
        </Layout>
    )
}
