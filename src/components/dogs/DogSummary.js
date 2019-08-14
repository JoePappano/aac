import React, { Component } from "react"
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// import { deleteDog } from "../../store/actions/dogActions"
// import projectReducer from "../../store/reducers/projectReducer";

class DogSummary extends Component {

    state = {
        
    }

    componentWillMount = () => {
        this.setState({
            BR: this.props.dog.BR,
            DR: this.props.dog.DR,
            EA: this.props.dog.EA,
            ER: this.props.dog.ER,
            GS: this.props.dog.GS,
            H: this.props.dog.H,
            HT: this.props.dog.HT,
            J: this.props.dog.J,
            LB: this.props.dog.LB,
            LLW: this.props.dog.LLW,
            LWO: this.props.dog.LWO,
            M: this.props.dog.M,
            RR: this.props.dog.RR,
            SP: this.props.dog.SP,
            TM: this.props.dog.TM,
            playgroup: this.props.dog.playgroup,
            walked: this.props.dog.walked,
            })
    }

    toggleTrait = (e) => {
        console.log("e.target =", e.target)
    }

    toggleTrait = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: !e.target.value
        })
        // console.log("state", !e.target.value)
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props)
        // console.log(this.state)
        // this.props.createDog(this.state);
        // this.props.history.push("/manageDogs")
    }
    
    render() {


        const {dog, deleteDog} = this.props;
        // console.log(dog)
        const trigger = <Button>See Dog Traits</Button>
        // const booleanBR = dog.BR ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>;
        const booleanPlaygroup = dog.playgroup ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>;
        const booleanWalked = dog.walked ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>

        

    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="row">
                        <div className="col s4">
                            <span className="card-title"> {dog.name} </span>
                            {/* <img alt="dogpic"></img> */}
                            <span> {dog.kennelNum}</span>
                            <span> {dog.info} </span>
                            <span> {dog.id} </span>
                        </div>
                        <div className="col s4">
                            <p> Walked Today: {dog.walked === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                            <button> Log a Walk </button>
                        </div>
                        <div className="col s4">
                            <p> Attended Playground Today: {dog.playgroup === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                            <button> Log a Playgroup</button>
                        </div>
                    </div>
                    <button onClick={() => {deleteDog(dog.id)}}> Delete </button>

                    <Modal header="Modal Header" trigger={trigger}>
                            <h3 className="grey-text text-darken-3 center"> {dog.name} </h3>
                            <div className="input-field">
                                <label htmlFor="name"> Edit Dog Name </label>
                                <input type="text" id="name"  />
                            </div>
                            <form>
                                <div className="row">
                                    <p className="col s4"> Kennel Number: {dog.kennelNum} </p>
                                    <div className="input-field col s4">
                                        <label htmlFor="content"> Update Kennel Number </label>
                                        <textarea className="materialize-textarea" type="text" id="kennelNum"  />
                                    </div>
                                    <button > Update Kennel Number </button>
                                </div>
                            </form>
                            <form>
                                <div className="row">
                                    <p className="col s8"> Barrier Reactive: {dog.BR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s4">
                                        <button id="BR" onClick={this.toggleTrait} value={this.state.BR}> Click to Toggle Yes/No</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Dog Reactive: {dog.DR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="DR" onClick={this.toggleTrait} > Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Escape Artist: {dog.EA === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="EA" onClick={this.toggleTrait} value={dog.EA}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Easily Redirected: {dog.ER === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="ER" onClick={this.toggleTrait} value={dog.ER}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Go Slow: {dog.GS === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="GS" onClick={this.toggleTrait} value={dog.GS}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Humps: {dog.H === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="H" onClick={this.toggleTrait} value={dog.H}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Seems House Trained: {dog.HT === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="HT" onClick={this.toggleTrait} value={dog.HT}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Jumpy: {dog.J === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="J" onClick={this.toggleTrait} value={dog.J}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Leash Biter: {dog.LB === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="LB" onClick={this.toggleTrait} value={dog.LB}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Loose Leash Walker: {dog.LLW === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="LLW" onClick={this.toggleTrait} value={dog.LLW}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Leash Walk Only: {dog.LWO === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="LWO" onClick={this.toggleTrait} value={dog.LWO}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Mouthy: {dog.M === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="M" onClick={this.toggleTrait} value={dog.M}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Resistance for Re-Kenneling: {dog.RR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="RR" onClick={this.toggleTrait} value={dog.RR}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Strong Puller: {dog.SP === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="SP" onClick={this.toggleTrait} value={dog.SP}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="col s6"> Treat Motivated: {dog.TM === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button id="TM" onClick={this.toggleTrait} value={dog.TM}> Click to Change True/False</button>
                                    </div>
                                </div>
                                <div className="input-field">
                                    <button className="btn pink lighten-1 z-depth-0">Submit</button>
                                </div>
                            </form>
                    </Modal>
                </div> 
            </div>
        </div>
        
    )
}
}


const mapStateToProps = (state) => {
    // console.log("state",state)
    return {
        dogs: state.firestore.ordered.dogs,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deleteDog: (id) => dispatch(deleteDog(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "dogs" },
    ])
)(DogSummary)