import {useState} from "react";

const MIN_DISH_QUANTITY = 0;
const MAX_DISH_QUANTITY = 5;

export const Dish = ({name}) => {
   const [dishQuantity, setDishQuantity] = useState(MIN_DISH_QUANTITY);

   const isMinDishQuantity = dishQuantity === MIN_DISH_QUANTITY;
   const isMaxDishQuantity = dishQuantity === MAX_DISH_QUANTITY;

    const increaseDishQuantity = () => {
       if(!isMaxDishQuantity) {
           setDishQuantity(dishQuantity + 1)
       }
   }

    const decreaseDishQuantity = () => {
        if(!isMinDishQuantity) {
            setDishQuantity(dishQuantity - 1)
        }
    }


    return (<div>
        <h5>{name}</h5>
        <div>
            <button onClick={decreaseDishQuantity} disabled={isMinDishQuantity}>-</button>
            {dishQuantity}
            <button onClick={increaseDishQuantity} disabled={isMaxDishQuantity}>+</button>
        </div>
    </div>)
}
