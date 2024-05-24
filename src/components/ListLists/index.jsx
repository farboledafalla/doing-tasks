import PropTypes from 'prop-types';

export const ListLists = ({ children }) => {
   return (
      <ul className='w-full m-0 pl-4 pt-o pr-0 pb-0 list-none border border-slate-200'>
         {children}
      </ul>
   );
};

ListLists.propTypes = {
   children: PropTypes.object,
};
