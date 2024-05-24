import PropTypes from 'prop-types';

export const ListTasks = ({ children }) => {
   return (
      <ul className='border border-slate-200 w-full m-0 pl-4 pt-0 pr-0 pb-0 list-none'>
         {children}
      </ul>
   );
};

ListTasks.propTypes = {
   children: PropTypes.object,
};
