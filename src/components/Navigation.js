import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;<NavLink to="/">Home</NavLink>
          &nbsp;
          &nbsp;
          &nbsp;
          <NavLink to="/cards">Greeting Cards</NavLink>
       </div>
    );
}
 
export default Navigation;