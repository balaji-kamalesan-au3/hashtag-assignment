import React, { Component } from 'react'
import { connect } from "react-redux";
import { setDiscipline,setCourseswithQuery } from './Redux/actions';


 class App extends Component {
   
   
   setDiscipline = () => {
      this.props.setDiscipline("Mathematics",this.props.state.allCourses)
   }

   setAllCourses = () => {
      this.props.setDiscipline("All Courses")
   }

   setQuery = () => {
     this.props.setCourseswithQuery("Cal",this.props.state.currentCourses)
   }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>This is a React app</h1>
        <button onClick= {this.setDiscipline}>Set Mathematics</button>
        <button onClick= {this.setQuery}>Set Query</button>
        <button onClick= {this.setAllCourses}>Set All Courses</button>

      </div>
    )
  }
}


const mapStateToProps = state => ({
  state,
});

export default connect(
  mapStateToProps,
  {setDiscipline,setCourseswithQuery}
  )(App)