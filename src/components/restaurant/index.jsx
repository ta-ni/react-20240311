import Reviews from "../reviews/index.jsx";
import Menu from "../menu/index.jsx";
const Restaurant = ({restaurant}) => {
    if(!restaurant){
        return null;
    }

    const {name, reviews, menu} = restaurant;

    return <div>
        <h2>{name}</h2>
        <Menu menu={menu}/>
        <Reviews reviews={reviews}/>
    </div>
}

export default Restaurant;
