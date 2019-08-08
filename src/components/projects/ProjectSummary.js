import React from "react"
import projectReducer from "../../store/reducers/projectReducer";

const ProjectSummary = ({project}) => {
    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> {project.name} </span>
                    <img alt="dogpic"></img>
                    <p> {project.bio} </p>
                </div> 
            </div>
        </div>
        
    )
}

export default ProjectSummary