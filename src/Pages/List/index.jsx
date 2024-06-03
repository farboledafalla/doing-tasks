import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

import { Layout } from '../../components/Layout';
import { ListTasks } from '../../components/ListTasks';
import { Task } from '../../components/Task';

export const List = () => {
   const context = useContext(DoingTaskContext);
   const currentPath = window.location.pathname;
   let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

   // Tasks of selected list
   const tasksSelectedList = context.tasks.filter(
      (task) => task.listName === context.lists?.[index].name
   );

   return (
      <Layout>
         <div className='flex flex-col justify-center w-full'>
            <div className='border border-slate-300 w-full rounded-lg mb-5'>
               <h2>Name: {context.lists?.[index].name}</h2>
               <h2>Description: {context.lists?.[index].description}</h2>
               <h2>Tasks: {context.lists?.[index].nTasks}</h2>
               <h2>
                  Completed Tasks: {context.lists?.[index].nTasksCompleted}
               </h2>
            </div>
            <h2 className='mb-4 text-xl'>Tasks</h2>
            <ListTasks>
               {tasksSelectedList?.map((task) => (
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
