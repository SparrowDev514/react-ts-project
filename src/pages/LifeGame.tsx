const LifeGame = () => {
  let square: object[] = [];
  let div: object[] = [];
  let horizonalNum: number = 20;
  let verticalNum: number = 10;

  // ライフゲームの状況を保持する定数
  let LifeGameState: number[][] = [];

  //最初に発生させる生命の割合
  const initialRate: number = 0.5;

  // LifeGameStateを乱数で初期化
  const initializeState = () => {
    for (let i = 0; i < verticalNum; i++) {
      let row: number[] = [];
      for (let j = 0; j < horizonalNum; j++) {
        row.push(Math.random());
      }
      LifeGameState.push(row);
    }
    return LifeGameState;
  };

  // 配列の状況に応じて値を返す
  const returnState = (i: number, j: number) => {
    if (LifeGameState[i][j] > initialRate) {
      return "";
    } else {
      return "●";
    }
  };

  initializeState();

  // ライフゲームの板を描写する
  const createLifeGameBoard = () => {
    for (let i = 0; i < verticalNum; i++) {
      // forで回すとき都度都度配列初期化する
      square = [];
      for (let j = 0; j < horizonalNum; j++) {
        square.push(
          <button className="Square" key={j}>
            {returnState(i, j)}
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
