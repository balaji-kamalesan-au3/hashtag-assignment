



export const setDiscipline = (discipline,courses) => dispatch => {
    if(discipline === "All Courses"){
        console.log("Event Fired")
        dispatch(restoreAllCourse());
    }
    else{
        const allCourses = courses[discipline]
        dispatch(setCourses(allCourses))  
    }
    
}


export const setCourseswithQuery = (query,courses) => dispatch => {

    const serchCoursesinArray = (array) => {
        let arr =  array.filter((course) => {
            const name = course["Course Name"];
            if(name.includes(query)) return course
       })
       return arr
    }

    if(Array.isArray(courses)){
       
       dispatch(setCourses(serchCoursesinArray(courses)))

    }
    else {
        let eachDisciplineArray= Object.values(courses);
        
        let newCourseArray = []
        
        eachDisciplineArray.forEach((indvidualDisciplineArray) => newCourseArray= newCourseArray.concat (serchCoursesinArray(indvidualDisciplineArray))) 

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