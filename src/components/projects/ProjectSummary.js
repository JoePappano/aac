import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

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

const mapStateToProps = (state, ownProps) => {
    // const id = ownProps.match.params.id;
    // const projects = state.firestore.data.projects;
    return{

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "projects"}
    ])
)(ProjectSummary)