import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id
    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Dog Name - {id}</span>
                    {/* <img alt="dogpic"> </img> */}
                    <p> Elit labore ullamco in deserunt dolore elit veniam adipisicing amet et labore laborum pariatur duis. Labore non Lorem consequat reprehenderit et irure Lorem ex consequat ipsum incididunt anim tempor excepteur. Nostrud incididunt exercitation cillum commodo occaecat nisi occaecat adipisicing enim culpa elit velit. Deserunt nulla magna commodo laboris proident velit sunt nisi dolore officia ut enim sit adipisicing. </p>
                </div>
            </div>  
        </div>
    )
}

export default ProjectDetails

