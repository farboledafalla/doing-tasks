import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DoingTaskContext = createContext();

export const DoingTaskProvider = ({ children }) => {
   // Navbar open/close
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   // Text to search
   const [searchValue, setSearchValue] = useState('');

   console.log('searchValue: ', searchValue);

   return (
      <DoingTaskContext.Provider
         value={{ isNavbarOpen, setIsNavbarOpen, searchValue, setSearchValue }}
      >
         {children}
      </DoingTaskContext.Provider>
   );
};

DoingTaskProvider.propTypes = {
   children: PropTypes.object,
};
