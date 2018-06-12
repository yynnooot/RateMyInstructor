import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewForm from './ReviewForm.jsx';
import Review from './Review.jsx';

class InstructorPage extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <Review />
        <ReviewForm />
      </div>
    )
  }
}
const mapState = () => ({

})

const mapDispatch = () => ({

})
export default connect(mapState, mapDispatch)(InstructorPage);