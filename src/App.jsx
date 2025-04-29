import { useState } from 'react';
import Todos from './components/Todos';

const ListTodos = [
  { id: 1,
    title: 'Todo 1',
    completed: false 
  },
  { id: 2,
    title: 'Todo 2',
    completed: false 
  },
  { id: 3,
    title: 'Todo 3',
    completed: false 
  }
]

function App() {
  const [todos, setTodos] = useState(ListTodos);

  return (
    <Todos todos={ListTodos} />
  )
}

export default App
