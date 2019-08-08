import React from "react"
// import projectReducer from "../../store/reducers/projectReducer";

const DogSummary = ({dog}) => {
    return(
        <div className="container">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> {dog.name} </span>
                    {/* <img alt="dogpic"></img> */}
                    <p> {dog.info} </p>
                </div> 
            </div>
        </div>
        
    )
}

export default DogSummary