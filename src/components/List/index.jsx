// Props Types
import PropTypes from 'prop-types';

export const List = ({ name, description, nTasks, nTasksCompleted }) => {
   return (
      <li className='border border-slate-300 rounded-lg mb-3'>
         <h2>{name}</h2>
         <div>
            <p>{description}</p>
            <p>Tasks: {nTasks}</p>
            <p>Completed Tasks: {nTasksCompleted}</p>
         </div>
      </li>
   );
};

List.propTypes = {
   name: PropTypes.string,
   description: PropTypes.string,
   nTasks: PropTypes.number,
   nTasksCompleted: PropTypes.number,
};
