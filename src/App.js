import React, { Component } from 'react'
import { connect } from "react-redux";
import { setDiscipline,setCourseswithQuery } from './Redux/actions';
import './App.css'
import RadioButton from './Components/RadioButton';
import CourseCard from './Components/CourseCard';



 class App extends Component {
   
  constructor(props){
    super(props)
    this.state ={
        searchQuery : "",
        discipline : "All Courses"
    }
  }

    onDisciplineChange = (e) => {
      this.setState({discipline : e.target.value},() => {this.setDiscipline()})
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

   generateCards = () => {
     if(Array.isArray(this.props.state.currentCourses)){
       return (
         this.props.state.currentCourses.map(
           (course) => {
             return <CourseCard key={course["Course Name"]} course = {course} />
           })
        )
     }
     else {
       
      let combinedCourse = []
       this.props.state.disciplines.forEach((discipline) => {
         combinedCourse = combinedCourse.concat(this.props.state.allCourses[discipline])
       })
       console.log(combinedCourse)
       return ( 
          combinedCourse.map(
          (course) => {
            return <CourseCard key={course["Course Name"]} course = {course} />
          })
        )
     }
   }

   
  render() {
    console.log(this.props.state)

    return (
      <div className="h-100 container-fluid">

        <div className="row container-lg">
            <div className="col-3 col-md-3 SideBar h-100">
              <h6> Sidebar</h6>
              <input type="text" value={this.state.searchQuery} placeholder="Find Courses" name="searchQuery" onChange={this.onQueryChange}/>

              <h5>List of Courses</h5>
              {this.props.state.disciplines.map((discipline) => <RadioButton key={discipline} name={discipline} discipline={this.state.discipline} onChange={this.onDisciplineChange}/> )}
            </div>
            <div className="col-9 col-md-9 CourseContainer container-fluid">
                 <h3>{this.state.discipline} - {this.props.state.length} courses available </h3>
                 <div className="row">{this.generateCards()}</div>
                 
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