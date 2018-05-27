import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addReviewThunk } from '../redux/reviews';

class ReviewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  handleChange(e){
    this.setState({rating: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const rating = this.state.rating;
    // const review = {
    //   rating
    // }
    this.props.addReview({rating})
  }
  render(){
    return(
      <div>
        <h1>FORM</h1>
        <form onSubmit={this.onSubmit} id="form">
          <div>
            <label>Rating:</label>
            <select value={this.state.rating} onChange={this.handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* <input type="text" name="rating" required/> */}
          </div>
          <a
              target="_self"
              href="/api/auth/linkedin"
              className="">
              <span>Linkedin</span>
            </a>
          <input type="submit" value="Send"/>
          </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  addReview: (review) => dispatch(addReviewThunk(review))
})
export default connect(null, mapDispatch)(ReviewForm)