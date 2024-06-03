import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

// Layout
import { Layout } from '../../components/Layout';

// Components
import { Search } from '../../components/Search';
import { ListTasks } from '../../components/ListTasks';
import { Task } from '../../components/Task';

export const ImportantTasks = () => {
   const context = useContext(DoingTaskContext);

   return (
      <Layout>
         <Search />
         <div className='flex flex-col justify-center w-full'>
            <h2 className='w-full text-xl mb-4'>Important Tasks</h2>
            <ListTasks>
               {context.searchedImportantTasks?.map((task) => (
                  <Task
                     key={task.name}
                     name={task.name}
                     completed={task.completed}
                     important={task.important}
                     listName='NO'
                  />
               ))}
            </ListTasks>
         </div>
      </Layout>
   );
};
