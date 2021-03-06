



export const setDiscipline = (discipline,courses) => dispatch => {
    if(discipline === "All Courses"){
      
        dispatch(restoreAllCourse());
    }
    else{
        const allCourses = courses[discipline]
        dispatch(setCourses(allCourses))  
    }
    
}


export const setCourseswithQuery = (query,courses) => dispatch => {
    let searchQuery = query.toLowerCase();
    console.log(searchQuery)
    const searchCoursesinArray = (array) => {
        let arr =  array.filter((course) => {
            const name = course["Course Name"].toLowerCase();
            const professor = course["SME Name"].toLowerCase();
            const discipline = course["Discipline"].toLowerCase();
            if(name.includes(searchQuery)!== false || professor.includes(searchQuery) !== false|| discipline.includes(searchQuery)!== false) return course
       })
       return arr
    }

    if(Array.isArray(courses)){
       
       dispatch(setCourses(searchCoursesinArray(courses)))

    }
    else {
    
        let eachDisciplineArray= Object.values(courses);
      
        let newCourseArray = []
        
        eachDisciplineArray.forEach((indvidualDisciplineArray) => newCourseArray= newCourseArray.concat (searchCoursesinArray(indvidualDisciplineArray))) 

        dispatch(setCourses(newCourseArray))
    }
}

const setCourses = (courses) => {

    return {
        type : "SET_COURSES",
        payload : courses
    }

}

const restoreAllCourse = () => {
    return {
        type : "RESTORE_ALL_COURSES"
    }
}