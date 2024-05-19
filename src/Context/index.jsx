import { createContext } from 'react';
import PropTypes from 'prop-types';

export const DoingTaskContext = createContext();

export const DoingTaskProvider = ({ children }) => {
   return <DoingTaskContext>{children}</DoingTaskContext>;
};

DoingTaskProvider.propTypes = {
   children: PropTypes.func,
};
