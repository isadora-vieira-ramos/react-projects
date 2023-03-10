import './App.css';
import { useState, useEffect } from 'react';
import Lembretes from './Lembretes';
import Alert from './Alert';

const getLocalStorageLists = () => {
  let lists = localStorage.getItem('listNotes');
  if (lists) {
    return (lists = JSON.parse(localStorage.getItem('listNotes')));
  } else {
    return [];
  }
}

function App() {

  const [listaLembrete, setListaLembrete] = useState(getLocalStorageLists());
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [alerta, setAlerta] = useState({ show: false, msg: ''});

  const deletaLembrete = (id, index) => {
    let listaAtualizada = [...listaLembrete];
    listaAtualizada[index].lembretes = listaLembrete[index].lembretes.filter(x => x.id !== id);
    if(listaAtualizada[index].lembretes.length < 1){
      const {id} = listaAtualizada[index];
      listaAtualizada = listaAtualizada.filter(x => x.id !== id);
    }
    
    setListaLembrete(listaAtualizada);
  }

  const salvaLembrete = () =>{
    //javascript comeca a contar a data no "0"
    var dataFormulario = new Date(data);
    dataFormulario.setDate(dataFormulario.getDate() + 1);

    if(!data || !descricao){
      mostraAlerta(true, 'Informe um valor válido para a descrição e data');
    }else if(dataFormulario< new Date()){
      mostraAlerta(true, 'A data não pode já ter passado');
    }
    else{
      const item = listaLembrete.filter(((item) => item.data === data));
      if(item.length === 0 || typeof item[0] === "undefined"){
        const novaData = {
          id: Date.now().toString(),
          data: data,
          lembretes: [
            {
              id: Date.now().toString(),
              descricao: descricao
            }
          ]
        }
        setListaLembrete([...listaLembrete, novaData]);
      }
      if(item.length === 1){
        const novoLembrete = {
          id: Date.now().toString(),
          descricao: descricao
        };
        const index = listaLembrete.findIndex(x => x === item[0]);
        const listaAtualizada = [...listaLembrete];
        listaAtualizada[index].lembretes = [
          ...listaAtualizada[index].lembretes,
          novoLembrete
        ];
        setListaLembrete(listaAtualizada);
      }
    }
  }

  const mostraAlerta = (show = false, msg = '') => {
    setAlerta({ show, msg });
  };

  const formatDate = (dateStr) => {
    var dArr = dateStr.split("-");  
    return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0];
  }

  useEffect(() => {
    localStorage.setItem('listNotes', JSON.stringify(listaLembrete));
  }, [listaLembrete]);

  return (
    <div>
      <h2 className='header'>Lembretes App</h2>
      <div className='container'>
        <h4>Novo Lembrete</h4>
        <label>Descrição lembrete</label>
        <input onChange={(e) => setDescricao(e.target.value)} className='input'></input>
        <label>Data lembrete</label>
        <input onChange={(e) => setData(e.target.value)} className='input' type='date' placeholder='Data lembrete'></input>
        {alerta.show && <Alert {...alerta} removeAlert={mostraAlerta} />}
        <button className='button' onClick={salvaLembrete}>Adicionar</button>
      </div>
      <div className='container'>
        {listaLembrete.length > 0? <h3>Todos os lembretes</h3>: <h3>Nenhum lembrete salvo</h3>}
        {
          listaLembrete.sort((a, b) => a.data > b.data ? 1 : -1).map((item, index) =>{
            const {data, lembretes} = item;
            return (
              <div key={item.id}>
                <p>{formatDate(data)}</p>
                <Lembretes deletaLembrete={deletaLembrete} index={index} list={lembretes}></Lembretes>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
