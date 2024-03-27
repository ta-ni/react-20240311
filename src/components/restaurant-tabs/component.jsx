import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
    return (restaurants.map((restaurant, index) => {
        return (<Tab title={restaurant.name}
                    onClick={() => onTabClick(index)}
                    isActive={index === currentIndex}
        />)
    }))
}
