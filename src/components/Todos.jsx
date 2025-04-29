import Todo from "./Todo";

function Todos({todos}){
    return (
        <ul className="bg-main border-1 rounded-md shadow-md"
        >
            {todos.map(todo => (
                <li 
                    key={todo.id}
                    className={`px-10 py-2 border-b hover:bg-second ${todo.completed ? 'line-through text-green-400' : 'text-white'
                    }`}
                >
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}
        </ul>
    )
} export default Todos;