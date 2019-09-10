import React from "react"
import DogSummary from "./DogSummary"


const DogList = ({dogs, deleteDog}) => {
    return(
        <div className="project-list section">
            
            { dogs && dogs.map(dog => {
                return (
                    <DogSummary deleteDog={deleteDog} dog={dog} key={dog.id} />
                )
            })}
        </div>
    )
}

// class DogList extends Component {
//     render() {
//         const { dogs, deleteDog } = this.props
//         return(
//             <div className="project-list section">
                
//                 { dogs && dogs.map(dog => {
//                     return (
//                         <DogSummary deleteDog={deleteDog} dog={dog} key={dog.id} />
//                     )
//                 })}
//             </div>
//         )
//     }
// } 

export default DogList