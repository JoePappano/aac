import React, { Component } from "react"
import DogList from "../dogs/DogList"
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteDog } from "../../store/actions/dogActions"
import { queryDogs } from "../../store/actions/dogActions"
import { Redirect } from "react-router-dom"
import { Checkbox } from "react-materialize"
// import fbConfig from "../../config/fbConfig"


class ManageDogs extends Component {

    state = {
        name: null,
        kennelNum: null,
        needsWalk: null,
        needsPlaygroup: null
    }

    deleteDog = (id) => {
        // console.log(id)
        if(window.confirm("Are you sure you want to delete this dog?")) {
            this.props.deleteDog(id)
        } 
    }

    queryDogs = (e) => {
        e.preventDefault();
        this.props.queryDogs()
    }

    checkState = (e) => {
        e.preventDefault();
        console.log(this.props.initDogs)
    }
    // updateDog = (id, data) => {
    //     this.props.updateDog(id, data)
    // }

    render(){
        const { dogs, auth, initDogs } = this.props;
        if (!auth.uid) return <Redirect to="/signin"></Redirect>
        // const { projects } = this.props
        // console.log(initDogs)
        // console.log(this.props)
        return(
            <div className="dashboard-container">
                <div className="row white">
                    <form className="white col s4" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="name"> Dog Name </label>
                                <input type="text" id="name" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0" onClick={this.queryDogs}>Submit</button>
                            </div>
                    </form>
                    <form className="white col s4" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="content"> Kennel Number </label>
                                <input type="text" id="kennelNum" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0" onClick={this.checkState}>Submit</button>
                            </div>
                    </form>
                    <div className="col s4">
                        <form className="white" onSubmit={this.handleSubmit}>
                                <Checkbox value="Red" label="Walk Not Logged"/>
                            <div className="input-field col">
                                <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            </div>
                        </form>
                        <form className="white" onSubmit={this.handleSubmit}>
                                <Checkbox value="Red" label="Playgroup Not Logged"/>
                            <div className="input-field col">
                                <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className=""> 
                    <DogList deleteDog={this.deleteDog} dogs={initDogs}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        dogs: state.firestore.ordered.dogs,
        initDogs: state.dog,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDog: (id) => dispatch(deleteDog(id)),
        queryDogs: () => dispatch(queryDogs())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "dogs" },
    ])
)(ManageDogs)