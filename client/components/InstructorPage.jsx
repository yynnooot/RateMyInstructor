import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInstructorThunk } from '../store';

import ReviewForm from './ReviewForm.jsx';
import Review from './Review.jsx';

class InstructorPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getInstructor(id);
  }
  render(){
    console.log('________state', this.props.instructor)
    return (
      <div>
        <h1>{this.props.instructor.firstName}</h1>
        <Review />
        <ReviewForm />
      </div>
    )
  }
}
const mapState = (state) => ({
  instructor: state.instructor.currentInstructor
})

const mapDispatch = (dispatch) => ({
  getInstructor : (id) => dispatch(getInstructorThunk(id))
})
export default connect(mapState, mapDispatch)(InstructorPage);