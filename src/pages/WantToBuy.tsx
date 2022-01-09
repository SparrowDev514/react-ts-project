import { useState } from "react";

const WantToBuy = () => {
  const [idCounter, setIdCounter] = useState<number>(0);
  const [wantToBuyList, setWantToBuy] = useState<Object[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputText: String = e.target["wantToBuy"].value;
    const nextid: number = idCounter + 1;
    setIdCounter(nextid);
    setWantToBuy([...wantToBuyList, { id: nextid, item: inputText }]);
  };

  return (
    <div className="WantToBuy">
      ここに買いたい物リストを作るぞ.
      <form onSubmit={handleSubmit}>
        <input name="wantToBuy" />
        <button>買いたい物を追加</button>
      </form>
      <hr></hr>
      <div>ここにリストを表示</div>
      <div>
        {wantToBuyList.map((wantToBuy: any) => (
          <li key={wantToBuy.id}>{wantToBuy.item}</li>
        ))}
      </div>
    </div>
  );
};

export default WantToBuy;
