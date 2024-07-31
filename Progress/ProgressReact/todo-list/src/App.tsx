import { useState } from 'react'
import './App.css'

type TodoType = {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [toDos, setToDos] = useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const addToDo = () => {
    setToDos([
      ...toDos,
      {
        text: inputText,
        id: toDos.length + 1,
        completed: false, 
      }
    ]);
  }

  const completedTask = (id: number) => {
    setToDos(
     toDos.map(item => {
      if(item.id === id) {
        item.completed = true;
      }
      return item;
     }) 
    )
  }


  return (
    <>
     <input 
     onChange={handleChange}
     type="text" />
     <br />
     <button 
     onClick={addToDo}
     >
      Add ToDo
     </button>
     <br />
     <ul>
      { 
        toDos.map(item => (
          <li key={item.id} className='card' onClick={() => completedTask(item.id)}>
            <p>{item.text}</p>
            <input 
            type='checkbox'
            checked={item.completed}
            />
          </li>
        )) 
      }
     </ul>
    </>
  )
}

export default App
