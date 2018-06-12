import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllInstructorsThunk } from '../store';

class Instructors extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getInstructors();
  }
  render(){
    return (
      <div>
        <h6>Instructors component:</h6>
        {this.props.instructors.length > 0 ? this.props.instructors.map((instructor,idx)=> {
          console.log('instructor:',instructor)
          return (<div key={idx}>
            <Link to={`/instructors/${instructor._id}`}><p>{instructor.firstName} {instructor.lastName}</p></Link>
          </div> )        
        }) : null}
      </div>
    )
  }
}
const mapState = (state) => ({
  instructors: state.instructor.instructors
})

const mapDispatch = (dispatch) => ({
  getInstructors: () => dispatch(getAllInstructorsThunk())
})
export default connect(mapState, mapDispatch)(Instructors);