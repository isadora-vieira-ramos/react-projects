import React from 'react'

const Book  = (props) => {
  const {name, genres, notes} = props;
  const clickHandler = (e) =>{
    console.log(e);
    alert("Hello world");
  };
  const complexExample = (author) => {
    alert(author);
  };
  return (
    <article className="book" onMouseOver={()=>{console.log(name)}}>
      <h3 onClick={()=> alert('Exemplo 2')}>{name}</h3>
      {
        genres.map((item) => {
            const {value, id} = item;
            return <p key={id}>{value}</p>
        })
      }
    </article>); 
}

export default Book
