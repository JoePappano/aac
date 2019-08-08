import React from "react"
import { NavLink } from "react-router-dom" 

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Upload a Picture</NavLink></li>
            <li><NavLink to='/createDog'>Upload a Dog</NavLink></li>
            <li><NavLink to='/manageDogs'>Manage Dogs</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'></NavLink></li>
        </ul>
    )
}

export default SignedInLinks