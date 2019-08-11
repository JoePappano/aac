import React from "react"
// import { deleteDog } from "../../store/actions/dogActions"
// import projectReducer from "../../store/reducers/projectReducer";

const DogSummary = ({dog, deleteDog}) => {
    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> {dog.name} </span>
                    {/* <img alt="dogpic"></img> */}
                    <p> {dog.info} </p>
                    <p> {dog.id} </p>
                    <button onClick={() => {deleteDog(dog.id)}}> Delete </button>
                </div> 
            </div>
        </div>
        
    )
}



export default DogSummary