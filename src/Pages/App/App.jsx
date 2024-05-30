import { useRoutes, BrowserRouter } from 'react-router-dom';

// Pages
import { Home } from '../Home';
import { ImportantTasks } from '../ImportantTasks';
import { Lists } from '../Lists';
import { Tasks } from '../Tasks';
import { NotFound } from '../NotFound';
import { List } from '../List';

// Components
import { Navbar } from '../../components/Navbar';

// Context
import { DoingTaskProvider } from '../../Context';

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
         path: '/list/:id',
         element: <List />,
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
         <DoingTaskProvider>
            <AppRoutes />
            <Navbar />
         </DoingTaskProvider>
      </BrowserRouter>
   );
};
