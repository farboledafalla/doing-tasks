export const CreateList = () => {
   return (
      <button
         className='bg-indigo-700 border border-none rounded-full cursor-pointer text-xl w-24 h-10 text-white font-bold fixed bottom-6 right-6 z-10 flex justify-evenly items-center'
         onClick={(event) => {
            console.log('Hiciste click al botón', event.target);
         }}
      >
         + List
      </button>
   );
};
