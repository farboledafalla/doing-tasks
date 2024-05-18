import { useRoutes, BrowserRouter } from 'react-router-dom';

// Pages
import { Home } from '../Home';
import { ImportantTasks } from '../ImportantTasks';
import { Lists } from '../Lists';
import { Tasks } from '../Tasks';
import { NotFound } from '../NotFound';

// Components
import { Navbar } from '../../components/Navbar';

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
      {
         path: '/*',
         element: <NotFound />,
      },
   ]);

   return routes;
};

export const App = () => {
   return (
      <BrowserRouter>
         <AppRoutes />
         <Navbar />
      </BrowserRouter>
   );
};
