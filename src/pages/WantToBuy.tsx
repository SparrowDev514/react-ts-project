import { useState } from "react";

interface wantToBuyProps {
  id: number;
  item: string;
}
const WantToBuy = () => {
  const [idCounter, setIdCounter] = useState<number>(0);
  const [wantToBuyItem, setWantToBuyItem] = useState<string>("");
  const [wantToBuyList, setWantToBuyList] = useState<wantToBuyProps[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const addWantToBuy = () => {
    const nextid: number = idCounter + 1;
    setIdCounter(nextid);
    setWantToBuyList([...wantToBuyList, { id: nextid, item: wantToBuyItem }]);
    setWantToBuyItem("");
    setIsActive(false);
  };

  const removeItem = (id: number) => {
    const newWantToBuyList = wantToBuyList.filter((item) => item.id != id);
    setWantToBuyList([...newWantToBuyList]);
  };

  const validateTextField = (text: string) => {
    setWantToBuyItem(text);
    text ? setIsActive(true) : setIsActive(false);
  };

  return (
    <div>
      ここに買いたい物リストを作るぞ。
      <br />
      <input
        type="text"
        value={wantToBuyItem}
        onChange={(e) => {
          validateTextField(e.target.value);
        }}
      />
      <button disabled={!isActive} onClick={addWantToBuy}>
        買いたい物を追加
      </button>
      <hr />
      <div>ここにリストを表示するぞ</div>
      <div>
        {wantToBuyList.map((wantToBuyItem: wantToBuyProps) => (
          <li key={wantToBuyItem.id}>
            {wantToBuyItem.id} : {wantToBuyItem.item}
            <button onClick={() => removeItem(wantToBuyItem.id)}>
              削除する
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WantToBuy;
