import React, { Component } from "react"
import ProjectList from "../projects/ProjectList"
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from "react-router-dom"

class Dashboard extends Component {
    render(){
        // console.log(this.props)
        const { projects, auth } = this.props;

        if (!auth.uid) return <Redirect to="/signin"></Redirect>

        
        return(
            <div className="dashboard-container">
                <div className=""> 
                    <ProjectList projects={projects}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection: 'projects',
            where: ['authorFirstName', '==', "Joe"]
        }
    ])
)(Dashboard)