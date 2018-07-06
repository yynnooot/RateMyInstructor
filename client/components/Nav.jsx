import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from '../store';

class Nav extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { isLoggedIn, logout } = this.props
    return(
      <nav className='nav-container'>
        <h1><Link to={'/'}>RateMyInstructor</Link></h1>
        { 
          isLoggedIn ?
            <button onClick={logout}>Logout</button>
            : <a href="/api/auth/linkedin">Sign-in with Linkedin</a>
        }
        
      </nav>
    )
  }
}
  
const mapState = (state) => ({
    isLoggedIn: !!state.user._id
  }
)
const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout())
  })

export default connect(mapState, mapDispatch)(Nav);