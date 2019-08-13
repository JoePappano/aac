import React, { Component } from "react"
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// import { deleteDog } from "../../store/actions/dogActions"
// import projectReducer from "../../store/reducers/projectReducer";

class DogSummary extends Component {


    render(props) {
        const {dog, deleteDog} = this.props;
        const trigger = <Button>See Info</Button>
        console.log("fdsafdafd", this.props)
        
        const booleanBR = dog.BR ? <p className="green-text"> Yes </p> : <p className="red-text"> No </p>;

    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> {dog.name} </span>
                    {/* <img alt="dogpic"></img> */}
                    <p> {dog.kennelNum}</p>
                    <p> {dog.info} </p>
                    <p> {dog.id} </p>
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
                                    <button> Update Kennel Number </button>
                                </div>
                            </form>
                            <div className="row">
                                <p className="col s4"> Barrier Reactive: </p>
                                <p className="col s4"> {booleanBR} </p>
                                <div className="input-field col s4">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Dog Reactive:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Escape Artist:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Easily Directed:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Go Slow:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Humps:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Seems House Trained:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Jumpy:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Leash Biter:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Leash Walk Only:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Mouthy:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Resistance for Re-Kenneling:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Strong Puller:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s6"> Treat Motivated:  </p>
                                <div className="input-field col s6">
                                    <button> Click to Change True/False</button>
                                </div>
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Submit</button>
                            </div>
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