import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DoingTaskContext = createContext();

export const DoingTaskProvider = ({ children }) => {
   // Navbar open/close
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   return (
      <DoingTaskContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
         {children}
      </DoingTaskContext.Provider>
   );
};

DoingTaskProvider.propTypes = {
   children: PropTypes.func,
};
