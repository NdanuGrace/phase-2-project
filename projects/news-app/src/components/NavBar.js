import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    width: "50px",
    padding: "10px",
    margin: "0 6px 6px",
background: "lightblue",
    textDecoration: "none",
    color: "black",
  };
function NavBar() {
    return (

        
        <nav className="nav-bar">
            <div className="nav-container">
           
            
                <NavLink to="/"
                // exact 
                style={linkStyles}
              
                >
                    Home
                    </NavLink>

               
                <NavLink 
                 to="/about"
                //  exact
                 style={linkStyles}
                
                 >
                    About
                    </NavLink>

                    <NavLink
                  to="/reviews"
                  
                  style={linkStyles}
               
                  >
                    Reviews
                    
                    </NavLink>

            </div>
        </nav>
    )
}

export default NavBar;