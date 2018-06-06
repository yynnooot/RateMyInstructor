import React, {Component} from 'react';
import { connect } from 'react-redux';

export class InstructorPage extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div>

      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(InstructorPage);