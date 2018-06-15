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
    const { instructor } = this.props
    console.log('______instructor:', instructor)
    return (
      <div>
        <h1>Instructor: {instructor.firstName} {instructor.lastName}</h1>
        <h1>School: {instructor.school}</h1>
        {/* <Review reviews={instructor.reviews}/> */}
        <ReviewForm instructorId={instructor._id}/>
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