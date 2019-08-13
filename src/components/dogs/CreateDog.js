import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createDog } from "../../store/actions/dogActions"

class CreateDog extends Component {
    state = {
        name:"",
        kennelNum: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createDog(this.state);
        this.props.history.push("/manageDogs")
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Upload a Dog</h5>
                    <div className="input-field">
                        <label htmlFor="name"> Dog Name </label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"> Kennel Number </label>
                        <textarea className="materialize-textarea" type="text" id="kennelNum" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createProject: (project) => dispatch(createProject(project))
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        createDog: (dog) => dispatch(createDog(dog))
    }
}

export default connect(null, mapDispatchToProps)(CreateDog)