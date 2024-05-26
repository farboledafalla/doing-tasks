import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

export const DoingTaskContext = createContext();

export const DoingTaskProvider = ({ children }) => {
   // Location
   const location = useLocation();

   // Navbar open/close
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   // Text to search
   const [searchValue, setSearchValue] = useState('');

   // Navbar title
   const [pageTitle, setPageTitle] = useState('Home');

   // Update page title on navigate
   useEffect(() => {
      const changePageTitle = () => {
         switch (location.pathname) {
            case '/important-tasks':
               return 'Important Tasks';

            case '/lists':
               return 'Lists';

            case '/tasks':
               return 'Tasks';

            default:
               return 'Home';
         }
      };

      // const newPageTitle = changePageTitle();
      setPageTitle(changePageTitle());
   }, [location]);

   return (
      <DoingTaskContext.Provider
         value={{
            isNavbarOpen,
            setIsNavbarOpen,
            searchValue,
            setSearchValue,
            pageTitle,
            setPageTitle,
         }}
      >
         {children}
      </DoingTaskContext.Provider>
   );
};

DoingTaskProvider.propTypes = {
   children: PropTypes.object,
};
