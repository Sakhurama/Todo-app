function Todo({ id, title, completed}){
    return(
        <div>
            <input type="checkbox" id={id}/>
            <label className="ml-4" htmlFor={id}>
                {title}
            </label>
            <button></button>
        </div>
    )
} export default Todo;