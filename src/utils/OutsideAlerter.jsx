import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref) => {
   useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            alert('You clicked outside of me!');
            console.log('Click');
         }
      };
      // Bind the event listener
      document.addEventListener('click', handleClickOutside, true);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener('click', handleClickOutside, true);
      };
   }, [ref]);
};

/**
 * Component that alerts if you click outside of it
 */
export const OutsideAlerter = ({ children }) => {
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef);

   return <div ref={wrapperRef}>{children}</div>;
};

OutsideAlerter.propTypes = {
   children: PropTypes.func,
};
