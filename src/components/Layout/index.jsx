// Props
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
   return (
      <div className='flex flex-col mt-52 items-center mx-4'>{children}</div>
   );
};

Layout.propTypes = {
   children: PropTypes.array,
};
