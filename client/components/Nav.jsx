import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  constructor(props){
    super(props)
  }

  logout = () => {
    axios.post('/api/auth/logout')
  }

  render(){
    return(
      <div className='nav-container'>
        <h1><Link to={'/'}>RateMyInstructor</Link></h1>
        <button>Sign-in with Linkedin</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
  

export default Nav;