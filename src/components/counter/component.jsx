const MIN_DISH_QUANTITY = 0;
const MAX_DISH_QUANTITY = 5;
export const Counter = ({value, decrement, increment, min = MIN_DISH_QUANTITY, max = MAX_DISH_QUANTITY}) => {

    return (<div>
        <button onClick={decrement} disabled={value <= min}>-</button>
        {value}
        <button onClick={increment} disabled={value >= max}>+</button>
    </div>)
}
