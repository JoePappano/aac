import React, { Component } from "react"
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { updateDog } from "../../store/actions/dogActions"


// import { deleteDog } from "../../store/actions/dogActions"
// import projectReducer from "../../store/reducers/projectReducer";

class DogSummary extends Component {

    state = {
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
        kennelNum: this.props.dog.kennelNum,
        name: this.props.dog.name,
        authorId: this.props.dog.authorId,
        authorFirstName: this.props.dog.authorFirstName,
        authorLastName: this.props.dog.authorLastName,
        id: this.props.dog.id
    }

    // componentWillMount = () => {
    //     this.setState({
       
    //         })
    // }

    // toggleTrait = (e) => {
    //     console.log("e.target =", e.target)
    // }

    toggleTraitPlaygroup = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            playgroup: !prevState.playgroup
        }))
        console.log(this.state)
    }

    toggleTraitWalked = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            walked: !prevState.walked
        }))
        console.log(this.state)
    }

    toggleTraitBR = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            BR: !prevState.BR
        }))
        console.log(this.state)
    }
    
    toggleTraitDR = (e) => {
        e.preventDefault();
        const valueDR = this.state.DR;
        this.setState({
            DR: !valueDR
        })
        console.log(this.state)
    }

    toggleTraitEA = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            EA: !prevState.EA
        }))
        console.log(this.state)
    }

    toggleTraitER = (e) => {
        e.preventDefault();
        const valueER = this.state.ER;
        this.setState({
            ER: !valueER
        })
        console.log(this.state)
    }

    toggleTraitGS = (e) => {
        e.preventDefault();
        const valueGS = this.state.GS;
        this.setState({
            GS: !valueGS 
        })
        console.log(this.state)
    }

    toggleTraitH = (e) => {
        e.preventDefault();
        const valueH = this.state.H;
        this.setState({
            H: !valueH 
        })
        console.log(this.state)
    }

    toggleTraitHT = (e) => {
        e.preventDefault();
        const valueHT = this.state.HT;
        this.setState({
            HT: !valueHT
        })
        console.log(this.state)
    }

    toggleTraitJ = (e) => {
        e.preventDefault();
        const valueJ = this.state.J;
        this.setState({
            J: !valueJ 
        })
        console.log(this.state)
    }

    toggleTraitLB = (e) => {
        e.preventDefault();
        const valueLB = this.state.LB;
        this.setState({
            LB: !valueLB 
        })
        console.log(this.state)
    }

    toggleTraitLLW = (e) => {
        e.preventDefault();
        const valueLLW = this.state.LLW;
        this.setState({
            LLW: !valueLLW 
        })
        console.log(this.state)
    }

    toggleTraitLWO = (e) => {
        e.preventDefault();
        const valueLWO = this.state.LWO;
        this.setState({
            LWO: !valueLWO 
        })
        console.log(this.state)
    }

    toggleTraitM = (e) => {
        e.preventDefault();
        const valueM = this.state.M;
        this.setState({
            M: !valueM 
        })
        console.log(this.state)
    }

    toggleTraitRR = (e) => {
        e.preventDefault();
        const valueRR = this.state.RR;
        this.setState({
            RR: !valueRR 
        })
        console.log(this.state)
    }

    toggleTraitSP = (e) => {
        e.preventDefault();
        const valueSP = this.state.SP;
        this.setState({
            SP: !valueSP 
        })
        console.log(this.state)
    }

    toggleTraitTM = (e) => {
        e.preventDefault();
        const valueTM = this.state.TM;
        this.setState({
            TM: !valueTM 
        })
        console.log(this.state)
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props)
        // console.log(this.state)
        this.props.updateDog(this.props.dog.id, this.state);
        // this.props.history.push("/manageDogs")
    }

    consoleState = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {


        const {dog, deleteDog} = this.props;
        const trigger = <Button>See Dog Traits</Button>
        const trigger2 = <Button> Delete </Button>
        
        // console.log(this.props)

        

    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="row">
                        <div className="col s4">
                            <h2> {dog.name} </h2>
                            <h1 className="card-title"> Kennel: {dog.kennelNum} </h1>
                            {/* <img alt="dogpic"></img> */}
                            <span> {dog.info} </span>
                            {/* <span> {dog.id} </span> */}
                        </div>
                        <div className="col s4">
                            <p> Walked Today: {dog.walked === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p><br />
                            <button className="btn blue" onClick={this.toggleTraitWalked}> Log a Walk </button> <br /> <br />
                            <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Save Change</button>
                        </div>
                        <div className="col s4">
                            <p> Attended Playground Today: {dog.playgroup === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p><br />
                            <button className="btn blue" onClick={this.toggleTraitPlaygroup}> Log a Playgroup</button> <br /><br />
                            <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Save Change</button>
                        </div>
                    </div>
                    
                    <button className="btn red" onClick={() => {deleteDog(dog.id)}}> Delete Dog </button> 

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
                            <hr />
                            <form>
                                <div className="row">
                                    <p className="col s6"> Barrier Reactive: {dog.BR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="col s6">
                                        <button className="btn blue" id="BR" onClick={this.toggleTraitBR}>Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Dog Reactive: {dog.DR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="DR" onClick={this.toggleTraitDR} >Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Escape Artist: {dog.EA === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="EA" onClick={this.toggleTraitEA} > Change Yes/No </button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Easily Redirected: {dog.ER === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="ER" onClick={this.toggleTraitER}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Go Slow: {dog.GS === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="GS" onClick={this.toggleTraitGS}> Change Yes/No </button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Humps: {dog.H === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="H" onClick={this.toggleTraitH}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Seems House Trained: {dog.HT === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="HT" onClick={this.toggleTraitHT}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Jumpy: {dog.J === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="J" onClick={this.toggleTraitJ}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Leash Biter: {dog.LB === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="LB" onClick={this.toggleTraitLB}>Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Loose Leash Walker: {dog.LLW === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="LLW" onClick={this.toggleTraitLLW}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Leash Walk Only: {dog.LWO === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="LWO" onClick={this.toggleTraitLWO}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Mouthy: {dog.M === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="M" onClick={this.toggleTraitM}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Resistance for Re-Kenneling: {dog.RR === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="RR" onClick={this.toggleTraitRR}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Strong Puller: {dog.SP === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="SP" onClick={this.toggleTraitSP}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <p className="col s6"> Treat Motivated: {dog.TM === true ? <span className="green-text"> Yes </span> : <span className="red-text"> No </span>} </p>
                                    <div className="input-field col s6">
                                        <button className="btn blue" id="TM" onClick={this.toggleTraitTM}> Change Yes/No</button>
                                        <button className="btn pink lighten-1 z-depth-0 buttonMargin" onClick={this.handleSubmit}>Save Change</button>
                                    </div>
                                </div>
                            
                            </form>
                    </Modal>
                </div> 
            </div>
        </div>
        
    )
}
}


// const mapStateToProps = (state) => {
//     // console.log("state",state)
//     return {
//         // dogs: state.firestore.ordered.dogs,
//         auth: state.firebase.auth
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        updateDog: (id, data) => dispatch(updateDog(id, data))
    }
}

export default compose(
    connect(null, mapDispatchToProps),
    firestoreConnect([
        { collection: "dogs" },
    ])
)(DogSummary)