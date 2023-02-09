import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const getLocalStorageLists = () => {
  let list = localStorage.getItem('bookList');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('bookList')));
  } else {
    return [];
  }
}


const AppProvider = ({ children }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [list, setList] = useState(getLocalStorageLists());

   const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
    value ={{isSidebarOpen, openSidebar, closeSidebar, list, setList}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
