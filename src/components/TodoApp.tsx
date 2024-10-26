import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState } from "react"

const TodoApp = () => {

  const [todo, settodo] = useState<{id : number ,text : string}[]>([])
  const [inputValue, setinputValue] = useState('')
  const [nextId, setnextId] = useState(1)

  
  const handleInput = (e)=>{
     setinputValue(e.target.value)
  }

  const handleClick = () =>{
    if(inputValue.trim())

    {
      settodo([...todo,{id : nextId, text : inputValue.trim()}]);
      setnextId(nextId + 1);
      setinputValue('');
    }
  }
  const removeTodo = (id : number)=>{
      settodo(todo.filter(todo=>(todo.id !== id)))
  }
  return (
    <div className="text-left">
      <h1 className="text-5xl mb-8 text-center">Todo App</h1>
      <Label className="mb-3 text-lg line-clamp-1">Add a New Todo</Label>
      <Input className="mb-5 w-96" type="text" value={inputValue} onChange={handleInput}></Input>
      <Button className="mb-5 bg-blue-950" onClick={handleClick}>Add Todo</Button>
      <ol className="list-decimal list-inside">
        {todo.map(todoList => (
          <li className="mb-4" key={todoList.id}>
            {todoList.text}
            <Button className="ms-4  bg-blue-950" onClick={()=>removeTodo(todoList.id)}>Remove</Button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default TodoApp
