import { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Context
import { DoingTaskContext } from '../../Context';

export const Navbar = () => {
   const refNavbar = useRef(null);

   // Cerrar el menu al hacer click afuera de el
   useEffect(() => {
      const handler = (e) => {
         if (!refNavbar.current.contains(e.target)) {
            context.setIsNavbarOpen(false);
         }
      };

      document.addEventListener('mousedown', handler);

      return () => {
         document.removeEventListener('mousedown', handler);
      };
   });

   // Context
   const context = useContext(DoingTaskContext);

   // Active Route Styles
   const activeStyle = 'underline underline-offset-4';

   return (
      <div className='bg-slate-200 fixed top-0 z-10 w-full' ref={refNavbar}>
         <div className='border border-b-slate-300 w-full py-1'>
            <button
               className='bg-indigo-600 text-white px-3 ml-1 font-bold'
               onClick={() => context.setIsNavbarOpen(!context.isNavbarOpen)}
            >
               X
            </button>
         </div>
         <nav
            className={`w-full justify-center text-center text-lg ${
               context.isNavbarOpen ? 'flex' : 'hidden'
            }`}
         >
            <ul className='w-full'>
               <li
                  className='border border-b-slate-300 w-full py-1'
                  onClick={() => context.setIsNavbarOpen(false)}
               >
                  <NavLink
                     to={'/'}
                     className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                  >
                     Home
                  </NavLink>
               </li>
               <li
                  className='border border-b-slate-300 w-full py-1'
                  onClick={() => context.setIsNavbarOpen(false)}
               >
                  <NavLink
                     to={'/important-tasks'}
                     className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                  >
                     Important Tasks
                  </NavLink>
               </li>
               <li
                  className='border border-b-slate-300 w-full py-1'
                  onClick={() => context.setIsNavbarOpen(false)}
               >
                  <NavLink
                     to={'/lists'}
                     className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                  >
                     Lists
                  </NavLink>
               </li>
               <li
                  className='border border-b-slate-300 w-full py-1'
                  onClick={() => context.setIsNavbarOpen(false)}
               >
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
      </div>
   );
};
