import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addInstructorThunk } from '../store';

class InstructorForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      school: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  handleChange(e){
    const name = e.target.name
    const value = e.target.value

    this.setState({[name]: value});
  }

  onSubmit(e){
    e.preventDefault();
    const instructor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      school: this.state.school
    }
    this.props.addInstructor(instructor)
  }
  render(){
    return(
      <div>
        <h1>Add Instructor Form</h1>
        <form onSubmit={this.onSubmit} id="form">
          <div>
            <label>First Name:</label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange} />

            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange} />

            <label>School:</label>
            <input
              name="school"
              type="text"
              value={this.state.school}
              onChange={this.handleChange} />
          </div>
          <input type="submit" value="Add Instructor"/>
          </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  addInstructor: (instructorObj) => dispatch(addInstructorThunk(instructorObj))
})
export default connect(null, mapDispatch)(InstructorForm)