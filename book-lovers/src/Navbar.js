import React from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
function Navbar() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
   <>
      <main>
        <div className='nav-header'>
          <button className='nav-menu' onClick={openSidebar} >
            <FaBars />
          </button>
          <span className='logo2'>BookLovers</span>
        </div>    
      </main>
   </>
  );
}

export default Navbar;
