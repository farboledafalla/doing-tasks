import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   // States
   const [viewNavbar, setViewNavbar] = useState(false);

   // Active Route Styles
   const activeStyle = 'underline underline-offset-4';

   return (
      <div className='bg-slate-200 fixed top-0 z-10 w-full'>
         <div
            className='border border-b-slate-300 w-full py-1'
            onClick={() => setViewNavbar(!viewNavbar)}
         >
            X
         </div>
         {viewNavbar && (
            <nav className='w-full flex justify-center text-center text-lg'>
               <ul className='w-full'>
                  <li className='border border-b-slate-300 w-full py-1'>
                     <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className='border border-b-slate-300 w-full py-1'>
                     <NavLink
                        to={'/important-tasks'}
                        className={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Important Tasks
                     </NavLink>
                  </li>
                  <li className='border border-b-slate-300 w-full py-1'>
                     <NavLink
                        to={'/lists'}
                        className={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Lists
                     </NavLink>
                  </li>
                  <li className='border border-b-slate-300 w-full py-1'>
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
         )}
      </div>
   );
};
