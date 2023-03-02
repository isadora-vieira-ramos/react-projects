import React, { useState } from 'react';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';

function ToBeReadList() {
  const [book, setBook] = useState('');
  const [list, setList] = useState([]);

  const addBook = () => {
    setList([...list, {
      name: book,
      id: Date.now().toString()
    }]);
    setBook('');
  }

  const deleteBook = (id) => {
    setList(list.filter(x => x.id !== id));
  }


  return (
    <section className="tbr-section">
      <h2>To Be Read List</h2>
      <div className='div-input'>
        <input className='tbr-input' value={book} placeholder='Add book' onChange={(e) => setBook(e.target.value)}></input>
        <button className='tbr-button' onClick={() => addBook()}>Ok</button>
      </div>
      {
        list.map((item) => {
          const {name} = item;
          return (
            <div className='div-list'>
              <p>{name}</p>
              <div>
                <AiOutlineUp className='div-input-icon'></AiOutlineUp>
                <AiOutlineDown className='div-input-icon'></AiOutlineDown>
                <RiDeleteBinLine className='delete-icon-tbr' onClick={() => deleteBook(item.id)}></RiDeleteBinLine>
              </div>
            </div>
          )
        })
      }
    </section>
  );
}

export default ToBeReadList;