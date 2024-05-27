import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

// Layout
import { Layout } from '../../components/Layout';

// Components
import { Search } from '../../components/Search';
import { ListLists } from '../../components/ListLists';
import { List } from '../../components/List';
import { ListTasks } from '../../components/ListTasks';
import { Task } from '../../components/Task';
import { CreateList } from '../../components/CreateList';

export const Home = () => {
   const context = useContext(DoingTaskContext);

   return (
      <Layout>
         <Search />
         <div className='w-full mb-4'>
            <h2>Lists</h2>
         </div>
         <ListLists>
            {context.searchedLists?.map((task) => (
               <List
                  key={task.name}
                  name={task.name}
                  description={task.description}
                  nTasks={task.nTasks}
                  nTasksCompleted={task.nTasksCompleted}
               />
            ))}
         </ListLists>
         <div className='w-full mt-6 mb-4'>
            <h2>Important Tasks</h2>
         </div>
         <ListTasks>
            <Task />
            <Task />
            <Task />
            <Task />
         </ListTasks>
         <CreateList />
      </Layout>
   );
};
