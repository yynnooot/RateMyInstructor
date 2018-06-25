import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Review = props => 
  (
    <div>
      <h1>Review</h1>
      {props.reviews.map((review,idx) => <p>{review.rating}</p>)}
      {/* {props.reviews.isArray() ? props.reviews.map((review, index) => <h3 key={index}>{review.rating}</h3>)
      : <p>no reviews</p>} */}
      {/* {props.reviews.isArray() ? <p>reviews here</p>: <p>no reviews</p>} */}
    </div>
  )

Review.propTypes = {
  reviews: PropTypes.array
}
export default Review;

