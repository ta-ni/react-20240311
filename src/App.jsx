import { useState } from 'react';
import { Layout } from "./components/layout/component.jsx";
import { RestaurantTabs } from "./components/restaurant-tabs/component.jsx";
import { Restaurant } from "./components/restaurant/component.jsx";
import { restaurants } from "./constants/mock.js";
import { localStorageKeys } from "./constants/storage-keys.js";
import { getStorageItem, setStorageItem } from "./utils/storage.js";

export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => {
        return Number(getStorageItem(localStorageKeys.CURRENT_RESTAURANT_INDEX));
    });
    const currentRestaurant = restaurants[currentRestaurantIndex];

    return (
        <Layout>
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={(index) => {
                    setCurrentRestaurantIndex(index);
                    setStorageItem(localStorageKeys.CURRENT_RESTAURANT_INDEX, index);
                }}
                currentIndex={currentRestaurantIndex}
            />
            {<Restaurant restaurant={currentRestaurant}/>}
        </Layout>
    )
}
