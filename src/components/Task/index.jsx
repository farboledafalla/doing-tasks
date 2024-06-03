import PropTypes from 'prop-types';

export const Task = ({ name, completed, important, listName }) => {
   return (
      <li className='border border-slate-300 rounded-lg mb-3'>
         <h3 className='text-xl'>{name}</h3>
         <div>
            <p>completed: {completed ? 'Si' : 'No'}</p>
            <p>important: {important ? 'Si' : 'No'}</p>
            {listName != 'NO' ? <p>Lista: listName</p> : <></>}
         </div>
      </li>
   );
};

Task.propTypes = {
   name: PropTypes.string,
   completed: PropTypes.bool,
   important: PropTypes.bool,
   listName: PropTypes.string,
};
