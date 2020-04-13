import allCourses, {disciplines,courses} from "../Data/get_courses";



const initialState = {

    allCourses,
    currentCourses : allCourses,
    disciplines

}


const reducer = (state = initialState,action) => {
        switch (action.type)  {
            case "SET_COURSES" : 
                return {
                    ...state,
                    currentCourses : action.payload
                }
            case "RESTORE_ALL_COURSES" : 
                return {
                    ...state,
                    currentCourses : allCourses
                }
            }
        
        return state
        }
        

export default reducer