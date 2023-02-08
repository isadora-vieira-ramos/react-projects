import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {BiHomeAlt} from 'react-icons/bi';
import {BiLibrary} from 'react-icons/bi';
import {BiBookAdd} from 'react-icons/bi';
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
   <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <p className='logo'>BookLovers</p>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div>
        <Link className='links' onClick={()=> closeSidebar()} to="/"><BiHomeAlt></BiHomeAlt>Home</Link>
        <Link className='links' onClick={()=> closeSidebar()} to="/books"><BiLibrary></BiLibrary>Your Books</Link>
        <Link className='links' onClick={()=> closeSidebar()} to="/book"><BiBookAdd></BiBookAdd>New Book</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
