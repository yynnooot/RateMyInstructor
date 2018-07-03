import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Nav extends Component {
  constructor(props){
    super(props)
  }

  logout = () => {
    axios.post('/api/auth/logout')
  }

  render(){
    const { isLoggedIn } = this.props
    return(
      <nav className='nav-container'>
        <h1><Link to={'/'}>RateMyInstructor</Link></h1>
        { 
          isLoggedIn ?
            <button onClick={this.logout}>Logout</button>
            : <button>Sign-in with Linkedin</button>
        }
      </nav>
    )
  }
}
  
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}
export default connect(mapState, null)(Nav);