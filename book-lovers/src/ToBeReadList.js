import React, { useState, useEffect } from 'react';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getLocalStorageLists = () => {
  let list = localStorage.getItem('tbr-list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('tbr-list')));
  } else {
    return [];
  }
}

function ToBeReadList() {
  const [book, setBook] = useState('');
  const [list, setList] = useState(getLocalStorageLists);


  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...list];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setList(updatedList);
  };

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

  const onDragEnd = result => {

  }

  useEffect(() => {
    localStorage.setItem('tbr-list', JSON.stringify(list));
  }, [list]);


  return (
    <section className="tbr-section">
      <h2>To Be Read List</h2>
      <div className='div-input'>
        <input className='tbr-input' value={book} placeholder='Add book' onChange={(e) => setBook(e.target.value)}></input>
        <button className='tbr-button' onClick={() => addBook()}>Ok</button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId='1'>
            {provided => (
              <section className='tbr-section' {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((item, index) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {provided => (
                        <div className='div-list' key={item.id} {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            <p>{index + 1} - {item.name}</p>
                            <RiDeleteBinLine className='delete-icon-tbr' onClick={() => deleteBook(item.id)}></RiDeleteBinLine>
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </section>            
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </section>
  );
}

export default ToBeReadList;