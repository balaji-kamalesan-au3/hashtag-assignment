import allCourses, {disciplines} from "../Data/get_courses";



const initialState = {

    allCourses,
    currentCourses : allCourses,
    disciplines,
    length : 424

}


const reducer = (state = initialState,action) => {
        switch (action.type)  {
            case "SET_COURSES" : 
                return {
                    ...state,
                    currentCourses : action.payload,
                    length : action.payload.length
                }
            case "RESTORE_ALL_COURSES" : 
                return {
                    ...state,
                    currentCourses : allCourses,
                    length : 424
                }
            }
        
        return state
        }
        

export default reducer