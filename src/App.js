import React, { Component } from 'react'
import { connect } from "react-redux";
import { setDiscipline,setCourseswithQuery } from './Redux/actions';
import './App.css'


 class App extends Component {
   
  constructor(props){
    super(props)
    this.state ={
        searchQuery : "",
        discipline : "All Courses"
    }
  }

    onQueryChange = (e) => {
        this.setState({[e.target.name] : e.target.value}, () => {this.updateCourseonQuery()})
        
    }

    updateCourseonQuery = () => {
      if(this.state.searchQuery !== "" ){
        if(this.state.discipline === "All Courses")
        this.props.setCourseswithQuery(this.state.searchQuery,this.props.state.allCourses)
        else 
        this.props.setCourseswithQuery(this.state.searchQuery,this.props.state.currentCourses)
      }
      else if(this.state.searchQuery === ""){
        this.setDiscipline();
      }
    }
   
   setDiscipline = () => {
      this.props.setDiscipline(this.state.discipline,this.props.state.allCourses)
   }

   setAllCourses = () => {
      this.props.setDiscipline("All Courses")
   }

   
  render() {
    console.log(this.props)
    return (
      <div className="h-100 container-fluid">

        <div className="row">
            <div className="col-3 col-md-3 SideBar h-100">
              <h6> Sidebar</h6>
              <input type="text" value={this.state.searchQuery} placeholder="Find Courses" name="searchQuery" onChange={this.onQueryChange}/>
            </div>
            <div className="col-9 col-md-3 CourseContainer">
              
                      <h1>This is a React app</h1>



              <button onClick= {this.setDiscipline}>Set Mathematics</button>
              
             
              <button onClick= {this.setAllCourses}>Set All Courses</button>
            </div>

        </div>
        

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