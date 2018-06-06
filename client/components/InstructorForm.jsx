import React, {Component} from 'react';
import { connect } from 'react-redux';

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

    this.setState({name: value});
  }

  onSubmit(e){
    e.preventDefault();
    
    this.props.addReview({rating})
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
  
})
export default connect(null, mapDispatch)(InstructorForm)