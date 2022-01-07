import React, { useState } from "react";

const Todo = () => {
  const [wantToBuy, setWantToBuy] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setWantToBuy(event.target[0].value);
  };

  return (
    <div className="Todo">
      ここにTODO LISTを作るぞ.
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">TODO追加</button>
      </form>
      <hr></hr>
      <div>ここにリストを表示</div>
      {wantToBuy}
    </div>
  );
};

// これは追加分です
export default Todo;
