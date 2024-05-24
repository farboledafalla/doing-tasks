// Layout
import { Layout } from '../../components/Layout';

// Components
import { Search } from '../../components/Search';
import { ListLists } from '../../components/ListLists';
import { List } from '../../components/List';
import { ListTasks } from '../../components/ListTasks';
import { Task } from '../../components/Task';

export const Home = () => {
   return (
      <Layout>
         <div>Home</div>
         <Search />
         <div className='w-full mb-4'>
            <h2>Lists</h2>
         </div>
         <ListLists>
            <List />
            <List />
            <List />
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
      </Layout>
   );
};
