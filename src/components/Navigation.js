import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="navbar">
         <NavLink className="navbar-item" to="/">categories</NavLink>
         <NavLink className="navbar-item" to="/create">create card</NavLink>
      </div>
   );
}

export default Navigation;