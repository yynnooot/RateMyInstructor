import React, { Component } from 'react';
import { me } from '../store';
import { connect } from 'react-redux';
import Instructors from './Instructors.jsx';

class Home extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('COMPONENT MOUNT IN HOME')
    this.props.checkUser();
  }
  render(){
    const { isLoggedIn } = this.props
    console.log('THIS IS LOGGEDIN IN HOME:',isLoggedIn)
    return(
      <div>
        <Instructors /> 
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  checkUser: () => dispatch(me())
})
export default connect(null, mapDispatch)(Home);