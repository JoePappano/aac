import React from 'react'
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from "react-router-dom"


const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>
    // console.log(props)
    if (project) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {project.name} </span>
                        {/* <img alt="dogpic"> </img> */}
                        <p> {project.info} </p>
                    </div>
                </div>  
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p> Loading project... </p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "projects"}
    ])
)(ProjectDetails)

