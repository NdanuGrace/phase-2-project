import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    width: "500px",
    padding: "15px",
    margin: "0 6px 6px",
background: "rgb(117, 168, 161)",
    textDecoration: "none",
    color: "black",
    fontSize: "20px"
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