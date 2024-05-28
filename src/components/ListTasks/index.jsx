import PropTypes from 'prop-types';

export const ListTasks = ({ children }) => {
   return <ul className='w-full m-0 p-0 list-none'>{children}</ul>;
};

ListTasks.propTypes = {
   children: PropTypes.object,
};
