import { useState } from "react";

interface wantToBuyProps {
  id: number;
  item: string;
}
const WantToBuy = () => {
  const [idCounter, setIdCounter] = useState<number>(0);
  const [wantToBuyItem, setWantToBuyItem] = useState<string>("");
  const [wantToBuyList, setWantToBuyList] = useState<wantToBuyProps[]>([]);

  const addWantToBuy = () => {
    const nextid: number = idCounter + 1;
    setIdCounter(nextid);
    setWantToBuyList([...wantToBuyList, { id: nextid, item: wantToBuyItem }]);
    setWantToBuyItem("");
  };

  return (
    <div>
      ここに買いたい物リストを作るぞ。
      <br />
      <input
        type="text"
        value={wantToBuyItem}
        onChange={(e) => setWantToBuyItem(e.target.value)}
      />
      <button onClick={addWantToBuy}>買いたい物を追加</button>
      <hr />
      <div>ここにリストを表示するぞ</div>
      <div>
        {wantToBuyList.map((wantToBuyItem: wantToBuyProps) => (
          <li key={wantToBuyItem.id}>
            {wantToBuyItem.id} : {wantToBuyItem.item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default WantToBuy;
