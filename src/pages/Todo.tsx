import { useState } from "react";

const Todo = () => {
  const [idCounter, setIdCounter] = useState<number>(0);
  const [wantToBuys, setWantToBuy] = useState<Object[]>([]);

  /**
   * フォーム送信したらtodo配列にtodoを追加
   * @param {Event} e 送信イベント
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputText: String = e.target["wantToBuy"].value;
    const nextid: number = idCounter + 1;
    setIdCounter(nextid);
    setWantToBuy([...wantToBuys, { id: nextid, item: inputText }]);
  };

  return (
    <div className="Todo">
      ここにTODO LISTを作るぞ.
      <form onSubmit={handleSubmit}>
        <input name="wantToBuy" />
        <button>TODO追加</button>
      </form>
      <hr></hr>
      <div>ここにリストを表示</div>
      <div>
        {wantToBuys.map((wantToBuy: any) => (
          <li key={wantToBuy.id}>{wantToBuy.item}</li>
        ))}
      </div>
    </div>
  );
};
// これは追加分です
export default Todo;
