import React from "react"
import ToDoItem from "./ToDoItem"

function App() {
    return (
        <div class="todo-list">
            {/* instances of ToDoItems */}
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>


    )

}

export default App