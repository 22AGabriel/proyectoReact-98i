import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countSecundario] = useState(0);

  //   const handleSum = () => {
  //     setCount(count + 1);
  //   };

  //   const handleLess = () => {
  //     setCount(count - 1);
  //   };

  const handleClick = (operator) => {
    let newValue = 0;
    if (operator === 'sum') {
      newValue = count + 1;
    } else {
      newValue = count - 1;
    }

    setCount(newValue);
  };

  // Caso prohibido: No pasarle un arreglo de dependencias!!!!11!

  // Caso 1: No depende de nada
  // Se ejecuta el callback 1 (una) vez, cuando el componente se monta
  useEffect(() => {
    console.log('Mira mamá, me ejecuté cuando el componente cargó');
  }, []);

  // Caso 2: Depende de una variable, o función
  // Se ejecuta el callback tantas veces como la variable o función cambie
  useEffect(() => {
    console.log(count);
  }, [count]);

  // Caso 3: Depende de más de una variable o función
  // Se ejecuta el callback tantas veces como las variables o funciones cambien
  // Con que 1 se actualice, ya es suficiente para correr el callback
  useEffect(() => {
    console.log('Count es:', count);
    console.log('CountSecundario es:', countSecundario);
  }, [count, countSecundario]);

  // Caso 4: Control del desmontaje del componente
  // La fn anónima que devuelve el return es la que se ejecuta
  useEffect(() => {
    return () => {
      console.log(
        'Este bloque se va a ejecutar cuando se desmonte el componente'
      );
    };
  }, []);

  return (
    <section>
      <p>El contador va: {count}</p>
      <button
        onClick={() => {
          handleClick('sum');
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleClick('less');
        }}
      >
        -
      </button>
    </section>
  );
};

export default Counter;
