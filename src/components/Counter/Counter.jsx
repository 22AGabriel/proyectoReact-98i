import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

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
