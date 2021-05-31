// Code MovieReviews Here
import React from 'react' 

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews ? reviews.map(review => <div className="review">{review.display_title}</div>) : null}
        </div>
    )
}

export default MovieReviews