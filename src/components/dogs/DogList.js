import React from "react"
import DogSummary from "./DogSummary"
import { Link } from "react-router-dom"

const DogList = ({dogs, deleteDog}) => {
    return(
        <div className="project-list section">
            {/* {projects && projects.map(project => {
                return (
                    <DogSummary project={project} key={project.id}/>
                )
            })} */}
            { dogs && dogs.map(dog => {
                return (
                    <Link>
                        <DogSummary deleteDog={deleteDog} dog={dog} key={dog.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default DogList