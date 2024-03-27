import { useState } from 'react';
import { Layout } from "./components/layout/component.jsx";
import { RestaurantTabs } from "./components/restaurant-tabs/component.jsx";
import { Restaurant } from "./components/restaurant/component.jsx";
import { restaurants } from "./constants/mock.js";

export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const currentRestaurant = restaurants[currentRestaurantIndex];

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
