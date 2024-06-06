import { useRef, useState } from 'react';
import Card from '../Card/Card';

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
        <input className='form-control' type='text' ref={$input} />
        <button className='btn btn-primary' onClick={handleNewTodo}>
          Cargar
        </button>
      </fieldset>

      {/* Listado de tareas */}
      <div>
        {todos.map((todo, index) => (
          <Card
            key={index}
            imgUrl='...'
            titulo={todo}
            descripcion={`Este es el todo numero #${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
