import {React} from 'react';
import { useGlobalContext } from './context';
import Book from './Book';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function List() {
  const {list, setList} = useGlobalContext();

  const deleteItem = (id) => {
    setList(list.filter(b => b.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(list));
  }, [list]);


  if(list.length <= 0){
    return (
      <section className='section-center'>
        <div className='grocery-form'>
          <h3>There are no book notes saved</h3>
          <Link className='add-btn' to="/book">Add one here</Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      <section className="booklist">
        <h2>Your notes</h2>
       {list.map((book)=>{
        return <Book key={book.id} {...book} deleteItem={deleteItem} list={list}></Book>;
       })}
      </section>
    </section>
  );
}

export default List;