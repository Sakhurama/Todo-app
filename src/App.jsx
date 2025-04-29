import { useState } from 'react';
import Todos from './components/Todos';

const ListTodos = [
  { id: 1,
    title: 'Aprender algo nuevo',
    completed: false 
  },
  { id: 2,
    title: 'Terminar mi Todo App',
    completed: false 
  },
  { id: 3,
    title: 'Ordenar mi habitación',
    completed: false 
  }
]

function App() {
  const [todos, setTodos] = useState(ListTodos);

  const handleRemove = (id) => {
    const filteredTodos = todos.filter( todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  const handleCompleted = (id) => {
    const completedTodo = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })

    setTodos(completedTodo)
  }

  return (
    <Todos todos={todos} onRemoveTodo={handleRemove} onComplete={handleCompleted} />
  )
}

export default App
