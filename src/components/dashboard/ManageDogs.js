import React, { Component } from "react"
import DogList from "../dogs/DogList"
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteDog } from "../../store/actions/dogActions"
import { Redirect } from "react-router-dom"
import { Checkbox } from "react-materialize"


class ManageDogs extends Component {

    state = {
        checked: false,
    }



    deleteDog = (id) => {
        // console.log(id)
        if(window.confirm("Are you sure you want to delete this dog?")) {
            this.props.deleteDog(id)
        } 
    }

    searchDogName = () =>   {

    }

    searchKennelNum = () => {

    }

    searchWalked = () => {

    }
    
    searchPlaygroup = () => {
        
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
                <h1> Dog Manager </h1>
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Search For a Dog</h5>
                        <div className="row">
                            <div className="input-field col s6">
                                <label htmlFor="name"> Dog Name </label>
                                <input type="text" id="name" onChange={this.handleChange} />
                            </div>
                            <div className="input-field col s6">
                                <label htmlFor="content"> Kennel Number </label>
                                <textarea className="materialize-textarea" type="text" id="kennelNum" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            </div>
                        </div>
                </form>
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