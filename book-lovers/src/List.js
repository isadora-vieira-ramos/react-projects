import React from 'react';
import { useGlobalContext } from './context';
import Book from './Book';
function List() {
  const {list, setList} = useGlobalContext();

  if(list.length <= 0){
    return (
        <p>No notes yet</p>
    )
  }

  return (
    <section>
      <section className="booklist">
       {list.map((book)=>{
        return <Book key={book.id} {...book}></Book>;
       })}
      </section>
    </section>
  );
}

export default List;