import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

import { Layout } from '../../components/Layout';

export const List = () => {
   const context = useContext(DoingTaskContext);
   const currentPath = window.location.pathname;
   let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

   return (
      <Layout>
         <h2>Name: {context.lists?.[index].name}</h2>
         <h2>Description: {context.lists?.[index].description}</h2>
         <h2>Tasks: {context.lists?.[index].nTasks}</h2>
         <h2>Completed Tasks: {context.lists?.[index].nTasksCompleted}</h2>
      </Layout>
   );
};
