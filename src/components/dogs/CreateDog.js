import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom"
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
        const { auth } = this.props
        if (!auth.uid) return <Redirect to="/signin"></Redirect>
        console.log(this.props)
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDog: (dog) => dispatch(createDog(dog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDog)