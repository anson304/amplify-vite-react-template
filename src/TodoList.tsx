import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

interface TodoListProps {
  client: ReturnType<typeof generateClient<Schema>>;
}


const TodoList: React.FC<TodoListProps> = ({ client }) => {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

    function deleteTodo(id: string) {
        client.models.Todo.delete({ id })
    }
    
    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
        next: (data) => setTodos([...data.items]),
        });
    }, []);

    return (
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content}
          </li>
        ))}
      </ul>
    )
}

export default TodoList;
