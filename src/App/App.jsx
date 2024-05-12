import { Home } from '../Home';
import { ImportantTasks } from '../ImportantTasks';
import { Lists } from '../Lists';
import { Tasks } from '../Tasks';

import './App.css';

export const App = () => {
   return (
      <div className='bg-green-300'>
         <span>Hola Mundo desde Doing Tasks!!!</span>
         <Home />
         <ImportantTasks />
         <Lists />
         <Tasks />
      </div>
   );
};
