import React, {useEffect, useState} from 'react';
import { useGlobalContext } from './context';
import Select from 'react-select';
import genres from './genres';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const { list, setList, isSidebarOpen } = useGlobalContext();
  const [zIndex, setIndex] = useState(false);
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var newBook = {
      id: new Date().getTime().toString(),
      name: name,
      genres: selectedGenres.map((item) => {
        const {value, id} = item;
        const genre = {
          id: id, 
          value: value
        };
        return genre;
      }),
      notes: notes
    }
    setList([...list, newBook]);
    setName('');
    setNotes('');
    setSelectedGenres([]);
    navigate('/books');
  }

  const changeClassName = () =>{
    if(isSidebarOpen){
      setIndex(isSidebarOpen);
    }else{
      const timeout = setTimeout(() => {
      setIndex(isSidebarOpen);
    }, 300);
    return () => clearTimeout(timeout);
    }
  }

  const handleChange = (selectedOptions) => {
    setSelectedGenres(selectedOptions);
  }

  useEffect(() => {
    changeClassName();
  }, [isSidebarOpen]);

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(list));
  }, [list]);

  return (
   <>
      <section>
        <form className='form' onSubmit={handleSubmit}>
          <h3>New Book</h3>
          <label>Book name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Genres:</label>
          <Select value={selectedGenres} className={`${zIndex ? 'select index' : 'select'}`} onChange={handleChange} isMulti options={genres}></Select>
          <label>Your notes about it</label>
          <textarea rows={10} className='textarea' value={notes}
            onChange={(e) => setNotes(e.target.value)}></textarea>
          <button type='submit'>Ok</button>
        </form>
      </section>
   </>
  );
}

export default AddBook;
