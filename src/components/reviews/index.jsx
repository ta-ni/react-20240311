import Review from "../review/index.jsx";

const Reviews = ({reviews}) => {
    if(!reviews?.length){
        return null;
    }

    return (<div>
        <h3>Отзывы</h3>
        <ul>
            {reviews.map(review =>
                <li>
                    <Review text={review.text}/>
                </li>
            )}
        </ul>
    </div>)
}

export default Reviews;
