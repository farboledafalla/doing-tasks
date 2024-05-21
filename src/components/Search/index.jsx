import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

export const Search = () => {
   const context = useContext(DoingTaskContext);

   return (
      <input
         placeholder='Write your task'
         onChange={(event) => {
            context.setSearchValue(event.target.value);
         }}
      />
   );
};
