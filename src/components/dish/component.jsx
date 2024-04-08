import {Counter} from "../counter/component.jsx";
import { useCount } from '../../hooks/use-count.js';

export const Dish = ({name}) => {
   const {amount, decrement, increment} = useCount();


    return (<div>
        <h5>{name}</h5>
        <Counter value={amount} decrement={decrement} increment={increment}/>
    </div>)
}
