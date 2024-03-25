import { restaurants } from '../../constants/mock.js';
import Restaurant from '../restaurant';

const Restaurants = () => {
    return (
        <div>
            {!!restaurants.length && restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
        </div>
    )
}

export default Restaurants;
