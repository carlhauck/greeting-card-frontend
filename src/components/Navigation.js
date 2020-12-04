import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div>
         &nbsp;
         &nbsp;
         &nbsp;
         &nbsp;
         &nbsp;<NavLink to="/">Categories</NavLink>
         &nbsp;
         &nbsp;
         &nbsp;
         <NavLink to="/create">Create A Card</NavLink>
      </div>
   );
}

export default Navigation;