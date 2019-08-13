// import React, { Component } from "react"
// import DogList from "../dogs/DogList"
// import { connect } from "react-redux"
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
// import { deleteDog } from "../../store/actions/dogActions"


// class ManageDogs extends Component {

//     deleteDog = (id) => {
//         console.log(id)
//         this.props.deleteDog(id)
//     }


//     render(){
//         const { dogs } = this.props
//         // const { projects } = this.props
//         console.log(this.props)
//         return (
//             <div className="container section">
//                 <div className="card z-depth-0">
//                     <div className="card-content">
//                         <span className="card-title"> dog name </span>
//                         {/* <img alt="dogpic"> </img> */}
//                         <p> dog info </p>
//                         {/* <p> {id} </p> */}
//                         {/* <button onClick={() => {deleteDog(dog.id)}}> Delete </button> */}
//                     </div>
//                 </div>  
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//         dogs: state.firestore.ordered.dogs
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteDog: (id) => dispatch(deleteDog(id))
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//         { collection: "dogs" },
//     ])
// )(ManageDogs)