import React, {Component} from 'react';

import Instructors from './Instructors.jsx';

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Instructors /> 
      </div>
    )
  }
}

export default Home;