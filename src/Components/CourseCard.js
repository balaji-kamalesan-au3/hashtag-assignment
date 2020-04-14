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
        <div  className="card col-lg-3 coursecard ">

            <div className="card-body container-fluid">
                <div className = "row">
                    <div className="col-sm-2">
                    <img src="https://www.freeiconspng.com/uploads/courses-icon-28.png" width="30" alt="Svg Courses Icon" />
                    </div>
                    <div className="col-sm-10">
                        <p className="card-title">{props.course["Course Name"]}</p>
                        <h6>{props.course["SME Name"]}</h6>
                    </div>
                   
                </div>
                 
                <div className = "row">

                    <div className="col-sm-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png" width="30" alt="Svg Courses Icon" />
                    </div>
                    <div className="col-sm-10">
                        <p>
                            National Programme on Technology Enhanced Learning (NPTEL) is an initiative funded by Ministry of Human Resource and Development
                        </p>
                    </div>
                    
                </div>
                
                <div className = "row">
                    <div className="col-sm-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Calendar_icon.svg/1200px-Google_Calendar_icon.svg.png" width="25" alt="Svg Courses Icon" />
                    </div>
                    <div className="col-sm-10">
                    {getDate()}
                    </div>


                    
                </div>
                
            </div>
        </div>
    )
}

export default CourseCard