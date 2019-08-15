import React, { Component } from "react"
import DogList from "../dogs/DogList"
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteDog } from "../../store/actions/dogActions"
import { Redirect } from "react-router-dom"


class ManageDogs extends Component {

    deleteDog = (id) => {
        // console.log(id)
        this.props.deleteDog(id)
    }

    // updateDog = (id, data) => {
    //     this.props.updateDog(id, data)
    // }

    render(){
        const { dogs, auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin"></Redirect>
        // const { projects } = this.props
        return(
            <div className="dashboard-container">
                <div className=""> 
                <h1> Manage Dogs</h1>
                    <DogList deleteDog={this.deleteDog} dogs={dogs}/>
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
    // console.log(state)
    return {
        dogs: state.firestore.ordered.dogs,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDog: (id) => dispatch(deleteDog(id)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "dogs" },
    ])
)(ManageDogs)