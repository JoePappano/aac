import React, { Component } from "react"
import DogList from "../dogs/DogList"
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteDog } from "../../store/actions/dogActions"
import { queryDogs } from "../../store/actions/dogActions"
import { Redirect } from "react-router-dom"
import { Checkbox } from "react-materialize"
import axios from "axios"
import { functionDeclaration } from "@babel/types";
// import { getFirestore } from "redux-firestore"
// import fbConfig from "../../config/fbConfig"


class ManageDogs extends Component {

    state = {
        name: null,
        kennelNum: null,
        needsWalk: null,
        needsPlaygroup: null
    }

    // componentDidMount = () => {
    //     axios.get("/getDogs")
    //         .then(res => {
    //             console.log(res)
    //         })
    // }

    deleteDog = (id) => {
        // console.log(id)
        if(window.confirm("Are you sure you want to delete this dog?")) {
            this.props.deleteDog(id)
        } 
    }

    // queryDogs = (e) => {
    //     e.preventDefault();
    //     // console.log("im clicked")
    //     this.props.queryDogs()
    // }

    checkState = (e) => {
        e.preventDefault();
        console.log("this.props", this.props)
        console.log("this.state", this.state)
        // console.log("this.props.nextDogs.dogs", this.props.nextDogs.dogs)
    }
    // updateDog = (id, data) => {
    //     this.props.updateDog(id, data)
    // }
    

    render(){
        const { dogs, auth, nextDogs } = this.props;
        if (!auth.uid) return <Redirect to="/signin"></Redirect>
        
        // const dogsList = initDogs.length >= 1 ? <DogList deleteDog={this.deleteDog} dogs={initDogs}/> : null;
        // const { projects } = this.props
        // console.log(initDogs)
        // console.log(this.props)
        
        return(
            <div className="dashboard-container">
                {/* <div className="row white">
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
                </div> */}
                
                <div className=""> 
                    <DogList deleteDog={this.deleteDog} dogs={dogs}/>
                   {/* { nextDogs.length >= 1 ? <DogList deleteDog={this.deleteDog} dogs={nextDogs} /> : null } */}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state.firestore)
    return {
        // nextDogs: state.firestore.ordered.dogs,
        nextDogs: state.firestore.queries.dogs,
        auth: state.firebase.auth,
        dogs: state.firestore.ordered.dogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDog: (id) => dispatch(deleteDog(id)),
        queryDogs: () => dispatch(queryDogs())
    }
}




// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect(() => {
//     //   if (!props.uid) return []
//       return [
//         {
//           collection: 'dogs',
//           orderBy: ["kennelNum"]
//         }
//       ]
//     }
//     )
//   )(ManageDogs)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(() => {
        return [
            {
                collection: 'dogs',
                // where: ['name', '==', 'Fido']
            }
            
        ]
    })
)(ManageDogs)

// [
//     { 
//         collection: "dogs" ,
//         where: ['name', '==', 'Fido']
//     },
// ]