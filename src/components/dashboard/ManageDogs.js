import React, { Component } from "react"
import DogList from "../dogs/DogList"
import { connect } from "react-redux"
// import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        const { dogs } = this.props
        // const { projects } = this.props
        return(
            <div className="dashboard-container">
                <div className=""> 
                <h1> Manage Dogs</h1>
                    <DogList dogs={dogs}/>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         projects: state.firestore.ordered.projects
//     }
// }

const mapStateToProps = (state) => {
    return {
        dogs: state.dog.dogs
    }
}

export default connect(mapStateToProps)(Dashboard)