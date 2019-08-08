import React from "react"
import DogSummary from "./DogSummary"

const DogList = ({dogs}) => {
    return(
        <div className="project-list section">
            {/* {projects && projects.map(project => {
                return (
                    <DogSummary project={project} key={project.id}/>
                )
            })} */}
            { dogs && dogs.map(dog => {
                return (
                    <DogSummary dog={dog} key={dog.id} />
                )
            })}
        </div>
    )
}

export default DogList