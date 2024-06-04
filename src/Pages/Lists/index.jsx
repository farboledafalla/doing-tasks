import {useContext} from 'react'
import {Link} from 'react-router-dom'

// Context
import {DoingTaskContext} from '../../Context'

// Layout
import { Layout } from '../../components/Layout';

// Components
import { Search } from '../../components/Search';
import {ListLists} from '../../components/ListLists'
import {List} from '../../components/List'

export const Lists = () => {
   const context = useContext(DoingTaskContext)

   return (
      <Layout>
         <Search />
         <ListLists>
            {
               context.searchedLists?.map((list, index) => (
                  <Link key={index} to={`/list/${index}`}>
                     <List key={list.name} name={list.name} description={list.description} nTasks={list.nTasks} nTasksCompleted={list.nTasksCompleted} />
                  </Link>
               ))
            }
         </ListLists>
      </Layout>
   );
};
