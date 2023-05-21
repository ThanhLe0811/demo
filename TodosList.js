import React from "react";

const   TodosList = (todos,setTodos)  =>  {
    return(
        <div>
            {todos.map((todo)  =>(
                <li className="list-item" key= {todo.id}>
                    <input 
                    type="text" 
                    value={todo.title} 
                    className="list" 
                    onChange={(event) => event.preventDefault()}
                    />
                        <button className="button-complete task-but">
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-but">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-but">
                            <i className="fa fa-trash"></i>
                        </button>
                </li>
            ))}
        </div>
        );
};
export  default TodosList;