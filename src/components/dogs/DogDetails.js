import React from 'react'
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { deleteDog } from "../../store/actions/dogActions"

const DogDetails = (props) => {

    
    const { dog } = props;
    // console.log(props)

    if (dog) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {dog.name} </span>
                        {/* <img alt="dogpic"> </img> */}
                        <p> {dog.info} </p>
                        {/* <p> {id} </p> */}
                        {/* <button onClick={() => {deleteDog(dog.id)}}> Delete </button> */}
                    </div>
                </div>  
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p> Loading dog... </p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const dogs = state.firestore.data.dogs;
    const dog = dogs ? dogs[id] : null;
    return{
        dog: dog
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteDog: (id) => dispatch(deleteDog(id))
//     }
// }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "dogs"}
    ])
)(DogDetails)