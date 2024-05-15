import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home';
import { ImportantTasks } from '../ImportantTasks';
import { Lists } from '../Lists';
import { Tasks } from '../Tasks';

import './App.css';

// Routes
const AppRoutes = () => {
   let routes = useRoutes([
      {
         path: '/',
         element: <Home />,
      },
      {
         path: '/important-tasks',
         element: <ImportantTasks />,
      },
      {
         path: '/lists',
         element: <Lists />,
      },
      {
         path: '/tasks',
         element: <Tasks />,
      },
   ]);

   return routes;
};

export const App = () => {
   return (
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
   );
};