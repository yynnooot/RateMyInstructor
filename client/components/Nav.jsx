import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => 
  (
    <div className='nav-container'>
      <h1><Link to={'/'}>RateMyInstructor</Link></h1>
      <button>Sign-in with Linkedin</button>
    </div>
  )

  export default Nav;