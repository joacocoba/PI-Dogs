import React from 'react'
import { StyledNavBar } from './StyledNavBar'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <StyledNavBar>
            <div className="container">
                <div className="title">
                    <p>PI - Dogs | Joaquin Caubarrere</p>
                </div>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/dogs" >Create breed</NavLink>
                        </li>
                        {/* <li className="list-item">
                            <NavLink exact to="/about" >About</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </StyledNavBar>
    )
}

export default Navbar
