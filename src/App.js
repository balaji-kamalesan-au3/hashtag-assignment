import React, { Component } from 'react'
import organisedCourses from './Data/get_courses'

 class App extends Component {
   
  constructor(props){
    super(props)
    this.state = {
        organisedCourses
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>

        <h1>This is a React app</h1>

        
        
      </div>
    )
  }
}

export default App