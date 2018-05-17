import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addReviewThunk } from '../redux/reviews';

class Form extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  onSubmit(e){
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const status = e.target.status.value;
    const date = e.target.date.value;
    const review = {
      title,
      content,
      date,
      status
    }
    this.props.addReview(review)
  }
  render(){
    return(
      <div>
        <h1>FORM</h1>
        <form onSubmit={(event)=> this.onSubmit(event)} id="form">
          <div>
            <label>Title</label>
            <input type="text" name="title" required/>
          </div>
            
          <div>
            <label>Content</label>
            <input type="text" name="content" required/>
          </div>
            
          <div>
            <label>Status</label>
            <input type="text" name="status" required/>
          </div>
          
          <div>
            <label>Date</label>
            <textarea name="date" required></textarea>
          </div>

          <input type="submit" value="Send"/>
          </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  addReview: (review) => dispatch(addReviewThunk(review))
})
export default connect(null, mapDispatch)(Form)