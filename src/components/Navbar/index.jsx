import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   // Active Route Styles
   const activeStyle = 'underline underline-offset-4';

   return (
      <nav>
         <ul>
            <li>
               <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={'/important-tasks'}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Important Tasks
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={'/lists'}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Lists
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={'/tasks'}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Tasks
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};
