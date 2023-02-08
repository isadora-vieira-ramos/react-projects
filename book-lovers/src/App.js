import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './AddBook';
import List from './List';
function App() {

  return (
    <Router>
     <Sidebar></Sidebar>
     <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<List></List>}/>
        <Route path='/book' element={<AddBook></AddBook>} />
        <Route path='/books' element={<List></List>}/>
      </Routes>
    </Router>

  );
}

export default App;
