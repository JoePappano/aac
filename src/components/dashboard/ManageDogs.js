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

class ManageDogs extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.queryDogs(this.state.name);
    // console.log("fdafdsafdsa", this.state)
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

  handleProps = e => {
    e.preventDefault();
    console.log(this.props);
  };

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
    const { dogs, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12 blue lighten-5">
                <textarea
                  id="name"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                ></textarea>
                <label htmlFor="textarea1">Dog Name</label>
              </div>
            </div>
            <div>
              <button type="submit"> Submit </button>
            </div>
            <div>
              <button type="submit" onClick={this.handleProps}>
                {" "}
                Check Props{" "}
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <DogList dogs={dogs} />
          </div>
          <div className="col s12 m5 offset-m1">
            {/* <Notifications notifications={notifications}/> */}
          </div>
        </div>
        <button onClick={this.handleProps}> Check props </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    nextDogs: state.firestore.queries.dogs,
    auth: state.firebase.auth,
    dogs: state.dog.dogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDog: id => dispatch(deleteDog(id)),
    queryDogs: (queriedDog) => dispatch(queryDogs(queriedDog))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "dogs" }])
)(ManageDogs);
