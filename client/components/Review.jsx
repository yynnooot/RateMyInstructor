import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllReviewsThunk } from '../redux/reviews';

export class Review extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getReviews()
  }
  render(){
    return (
      <div>
        <h1>Review</h1>
        {this.props.reviews.length > 0 ? this.props.reviews.map((review, index) => <h3 key={index}>{review.rating}</h3>)
        : null}
      </div>
    )
  }
}
const mapState = (state) => ({
  reviews: state.allReviews
})
const mapDispatch = (dispatch) => ({
  getReviews: () => dispatch(getAllReviewsThunk())
})
export default connect(mapState, mapDispatch)(Review);
