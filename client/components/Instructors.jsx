import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          return (<div key={idx}>
            <p>{instructor.firstName} {instructor.lastName}</p>
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