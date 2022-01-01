import { useState } from "react";

function Todo() {
  const [count, setCount] = useState(0);
  return <div className="Todo">ここにTODO LISTを作る.</div>;
}

export default Todo;
