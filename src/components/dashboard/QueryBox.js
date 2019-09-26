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
import ManageDogs from "./ManageDogs";


class QueryBox extends Component {
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
    this.props.queryDogs(this.state.name)
    // console.log("fdafdsafdsa", this.state)
  };

  render() {
    const { dog, auth, nextDogs } = this.props;
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12 blue lighten-5">
                <textarea id="name" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="textarea1">Dog Name</label>
              </div>
            </div>
            <div>
                <button type="submit"> Submit </button>
            </div>
          </form>
        </div>
        <DogList  deleteDog={deleteDog} dog={dog} key={dog.id}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state.dog.dog)
    return {
        queriedDog: state.dog.dog,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        queryDogs: (queriedDog) => dispatch(queryDogs(queriedDog)),
        deleteDog: id => dispatch(deleteDog(id))
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
        ),
    firestoreConnect([
        { collection: "dogs" },
    ])
)(QueryBox)