import React, { useCallback, useState } from "react";
import Todos from "../components/Todos";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = useCallback(() => {
    console.log("hello Count");
    setCount(count + 1);
  }, [count]);
  //   const increment = () => {
  //      setCount(count + 1);
  //   };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallBack;
