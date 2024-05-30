import { useRef, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const $input = useRef();

  const handleNewTodo = () => {
    const nuevoTodo = $input.current.value;
    if (nuevoTodo.trim()) {
      const nuevoArreglo = [...todos, nuevoTodo];
      setTodos(nuevoArreglo);

      $input.current.value = '';
    }
  };

  return (
    <section>
      {/* Creacion de tarea */}
      <fieldset>
        <label>Nueva tarea:</label>
        <input type='text' ref={$input} />
        <button onClick={handleNewTodo}>Cargar</button>
      </fieldset>

      {/* Listado de tareas */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
