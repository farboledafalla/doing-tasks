import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

export const DoingTaskContext = createContext();

// Default Lists
const defaultLists = [
   {
      name: 'Home',
      description: 'Home things',
      nTasks: 0,
      nTasksCompleted: 0,
   },
   {
      name: 'Office',
      description: 'Office things',
      nTasks: 0,
      nTasksCompleted: 0,
   },
   {
      name: 'Hobbies',
      description: 'Hobbies things',
      nTasks: 0,
      nTasksCompleted: 0,
   },
];

export const DoingTaskProvider = ({ children }) => {
   // Location
   const location = useLocation();

   // Navbar open/close
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   // Text to search
   const [searchValue, setSearchValue] = useState('');

   // Navbar title
   const [pageTitle, setPageTitle] = useState('Home');

   // Lists
   const [lists, setLists] = useState(defaultLists);

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

   // Searched Tasks
   const searchedLists = lists.filter((list) => {
      const listText = list.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return listText.includes(searchText);
   });

   return (
      <DoingTaskContext.Provider
         value={{
            isNavbarOpen,
            setIsNavbarOpen,
            searchValue,
            setSearchValue,
            pageTitle,
            setPageTitle,
            lists,
            setLists,
            searchedLists,
         }}
      >
         {children}
      </DoingTaskContext.Provider>
   );
};

DoingTaskProvider.propTypes = {
   children: PropTypes.object,
};
