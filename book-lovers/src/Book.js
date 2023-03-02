import React, {useState} from 'react'
import {RiDeleteBinLine} from 'react-icons/ri';

const Book  = (props) => {
  const {name, genres, notes, deleteItem, list, id} = props;
  const [readMore, setReadMore] = useState(false);
  
  return (
    <article className="book">
      <div className='delete-div'>
        <h3>{name}</h3>
        <RiDeleteBinLine className='delete-icon' onClick={() => deleteItem(id)}></RiDeleteBinLine>
      </div>
      <p>
        {readMore ? notes : `${notes.substring(0, 200)}...`}
        {notes.length > 200 && (
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        )}
      </p>
      {
        genres.map((item) => {
            const {value, id} = item;
            return <p className='tags' key={id}>{value}</p>
        })
      }  
    </article>); 
}

export default Book
