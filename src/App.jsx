import { useState } from 'react';
import Todos from './components/Todos';

const ListTodos = [
  { id: 1,
    title: 'Todo 1',
    completed: true 
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

  const handleRemove = (id) => {
    const filteredTodos = todos.filter( todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <Todos todos={todos} onRemoveTodo={handleRemove} />
  )
}

export default App
