import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: props.reviews
    }
  }
  componentDidUpdate(nextProps){
    console.log('CHANGE IN PROPS')
    // this.setState({reviews: nextProps})
  }
  render(){
    return (
      <div>
        <h1>Review</h1>
        {this.props.reviews && this.props.reviews.map((review,idx) => <p key={idx}>{review.rating}</p>)}
      </div>
    )}
}
Review.propTypes = {
  reviews: PropTypes.array
}
export default Review;

