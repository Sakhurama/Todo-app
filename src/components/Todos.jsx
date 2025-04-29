import Todo from "./Todo";

function Todos({todos, onRemoveTodo, onComplete}){
    return (
        <ul className="flex flex-col gap-3 bg-main border-1 p-6 rounded-md shadow-md"
        >
            {todos.map(todo => (
                <li 
                    key={todo.id}
                    className={`w-lg px-10 py-2 border border-lines rounded-md 
                        ${todo.completed ? 'line-through bg-green-600 hover:bg-green-800' : 'text-white hover:bg-second'}`
                    }
                >
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onComplete={onComplete}
                    />
                </li>
            ))}
        </ul>
    )
} export default Todos;