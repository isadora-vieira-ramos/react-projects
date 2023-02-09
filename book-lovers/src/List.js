import React from 'react';
import { useGlobalContext } from './context';
import Book from './Book';
import { Link } from 'react-router-dom';
function List() {
  const {list, setList} = useGlobalContext();

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
        return <Book key={book.id} {...book}></Book>;
       })}
      </section>
    </section>
  );
}

export default List;