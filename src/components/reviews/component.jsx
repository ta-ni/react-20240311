import { Review } from "../review/component.jsx";

export const Reviews = ({reviews}) => {
    if(!reviews?.length){
        return null;
    }

    return (<ul>
            {reviews.map(review =>
                <li>
                    <Review text={review.text}/>
                </li>
            )}
        </ul>)
}
