import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs';
const Lembretes = ({list, index, deletaLembrete}) => {
  return (
    <div className='tbr-section'>
    {list.map((item) => {
        return (
            <div className='noteList' key={item.id}>
              <label className='descricao'>{item.descricao}</label>
              <BsFillTrashFill onClick={() => deletaLembrete(item.id, index)} className='trash'></BsFillTrashFill>
            </div>
        )
    })}
    </div>
  );
};

export default Lembretes;
