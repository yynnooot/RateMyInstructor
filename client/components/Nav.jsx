import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { removeUserThunk } from '../store';

class Nav extends Component {
  constructor(props){
    super(props)
  }

  // logout = () => {
  //   axios.post('/api/auth/logout')
  // }

  render(){
    const { isLoggedIn, logout } = this.props
    return(
      <nav className='nav-container'>
        <h1><Link to={'/'}>RateMyInstructor</Link></h1>
        { 
          isLoggedIn ?
            <button onClick={this.props.logout}>Logout</button>
            : <button>Sign-in with Linkedin</button>
        }
        <button onClick={logout}>Logout</button>
      </nav>
    )
  }
}
  
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}
const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(removeUserThunk())
  }
}
export default connect(mapState, mapDispatch)(Nav);