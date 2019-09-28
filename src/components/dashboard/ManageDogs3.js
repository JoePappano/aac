import React, { Component } from "react";
import DogList from "../dogs/DogList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteDog } from "../../store/actions/dogActions";
import { queryDogs } from "../../store/actions/dogActions";
import { Redirect } from "react-router-dom";
import DogSummary from "../dogs/DogSummary";
import { Checkbox } from "react-materialize";
import axios from "axios";
import { functionDeclaration } from "@babel/types";

class ManageDogs3 extends Component {
  state = {
    dogs: null
  };

//   componentDidMount = () => {
//       axios.get("/getDogs")
//           .then(res => {
//               console.log(res.data)
//               this.setState({
//                   dogs: res.data
//               })
//           })
//           .catch(err => console.log(err))
//   }


  deleteDog = id => {
    if (window.confirm("Are you sure you want to delete this dog?")) {
      this.props.deleteDog(id);
    }
  };

  checkState = e => {
    e.preventDefault();
    console.log("this.props", this.props);
    console.log("this.state", this.state);
  };

  render() {
    const { dogs, auth, nextDogs } = this.props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    let recentDogsMarkup = dogs ? (
      dogs && dogs.map(dog => (
        <DogSummary deleteDog={deleteDog} dog={dogs} key={dog.id} />
      ))
    ) : (
      <p> Loading... </p>
    );
    return (
      <div className="dashboard-container">
        <h3> Search Dog By Name </h3>
        <div>{recentDogsMarkup}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nextDogs: state.firestore.queries.dogs,
    auth: state.firebase.auth,
    // dogs: state.firestore.ordered.dogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDog: id => dispatch(deleteDog(id)),
    queryDogs: () => dispatch(queryDogs())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ManageDogs3);