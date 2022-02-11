const LifeGame = () => {
  let square: object[] = [];
  let div: object[] = [];
  let horizonalNum: number = 20;
  let verticalNum: number = 20;

  // ライフゲームの状況を保持する
  const lifeGameState = () => {};

  // ライフゲームの状況によってマス目ごとの状況(◉ or "")を返す
  const setLifeGameState = (horizonal: number, vertical: number) => {
    return "(" + horizonal + "," + vertical + ")";
  };

  // ライフゲームの板を描写する
  const createLifeGameBoard = () => {
    for (let i = 0; i < verticalNum; i++) {
      // forで回すとき都度都度配列初期化する
      square = [];
      for (let j = 0; j < horizonalNum; j++) {
        // lifeGameStateによって
        square.push(
          <button className="Square" key={j}>
            {setLifeGameState(j, i)}
          </button>
        );
      }
      div.push(
        <div className="SquareRow" key={i}>
          {square}
        </div>
      );
    }
    return div;
  };
  return <div className="LifeGame">{createLifeGameBoard()}</div>;
};

export default LifeGame;
