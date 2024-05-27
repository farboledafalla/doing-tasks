import PropTypes from 'prop-types';

export const ListLists = ({ children }) => {
   return <ul className='w-full m-0 p-0 list-none'>{children}</ul>;
};

ListLists.propTypes = {
   children: PropTypes.object,
};
