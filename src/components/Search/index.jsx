import { useContext } from 'react';

// Context
import { DoingTaskContext } from '../../Context';

export const Search = () => {
   const context = useContext(DoingTaskContext);

   return (
      <input
         className='border border-slate-300 rounded-lg w-full px-2 py-1.5 mb-5 focus:outline-none'
         placeholder='Write your task'
         value={context.searchValue}
         onChange={(event) => {
            context.setSearchValue(event.target.value);
         }}
      />
   );
};
