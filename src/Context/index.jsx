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

// Default Tasks
const defaultTasks = [
   {
      name: 'Finish the App',
      description: 'Programming the App',
      completed: false,
      important: true,
      listName: 'Office',
   },
   {
      name: 'Make my bed',
      description: 'Order my room',
      completed: false,
      important: true,
      listName: 'Home',
   },
   {
      name: 'Go Gym',
      description: 'Do excercise',
      completed: true,
      important: false,
      listName: 'Hobbies',
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

   // Tasks
   const [tasks, setTasks] = useState(defaultTasks);

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

            case '/list/:id':
               return 'List';

            default:
               return 'Home';
         }
      };

      // const newPageTitle = changePageTitle();
      setPageTitle(changePageTitle());
   }, [location]);

   // Searched Lists
   const searchedLists = lists.filter((list) => {
      const listText = list.name.toLowerCase();
      const searchTextList = searchValue.toLowerCase();
      return listText.includes(searchTextList);
   });

   //Important Taskd
   const importantTasks = tasks.filter((task) => task.important === true);

   // Searched Tasks
   const searchedTasks = importantTasks.filter((task) => {
      const taskText = task.name.toLowerCase();
      const searchTextTask = searchValue.toLowerCase();
      return taskText.includes(searchTextTask);
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
            tasks,
            setTasks,
            searchedTasks,
         }}
      >
         {children}
      </DoingTaskContext.Provider>
   );
};

DoingTaskProvider.propTypes = {
   children: PropTypes.object,
};
