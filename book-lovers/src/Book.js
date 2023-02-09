import React, {useState} from 'react'

const Book  = (props) => {
  const {name, genres, notes} = props;
  const [readMore, setReadMore] = useState(false);
  
  return (
    <article className="book">
      <h3>{name}</h3>
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
