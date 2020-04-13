import React from 'react'

function CourseCard(props) {
    
    const getDate= () =>{

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        console.log("Fired")
        let courseType = undefined
        let currentDate = new Date((new Date()).toLocaleDateString());
        let startDate = new Date(props.course["Course Start Date"]);
        let endDate = new Date (props.course["Course End Date"]);

        
        if(currentDate < startDate) {courseType = "Pre-Registration"}
        else if(startDate<currentDate && currentDate<endDate){ courseType = "Ongoing"}
        else if(endDate<currentDate) {courseType= "Completed"}

        return (
        <div>
            <p>{`${courseType} - ${props.course["Type"]}`}</p>  
            <p>
                {monthNames[startDate.getMonth()]} {startDate.getFullYear() + " to "}  
                {monthNames[endDate.getMonth()]} {endDate.getFullYear()}
            </p> 
        </div>)
    }

    return (
        <div  className="card col-md-4">
            <div className="card-body">
                 <p className="card-title">{props.course["Course Name"]}</p>
                 <h6>{props.course["SME Name"]}</h6>
                <p>National Programme on Technology Enhanced Learning (NPTEL) is an initiative funded by Ministry of Human Resource and Development </p>
                {getDate()}
            </div>
        </div>
    )
}

export default CourseCard