const LifeGame = () => {
  let square: object[] = [];
  let div: object[] = [];
  let horizonalNum: number = 20;
  let verticalNum: number = 10;

  // ライフゲームの状況を保持する定数
  let lifeGameState: string[][] = [];

  //最初に発生させる生命の割合
  const initialRate: number = 0.5;

  //step
  let step: number = 0;

  // lifeGameStateを乱数で初期化
  const initializeState = () => {
    for (let i = 0; i < verticalNum; i++) {
      let row: string[] = [];
      for (let j = 0; j < horizonalNum; j++) {
        if (Math.random() > initialRate) {
          row.push("");
        } else {
          row.push("●");
        }
      }
      lifeGameState.push(row);
    }
    return lifeGameState;
  };

  //世代を進める
  const nextState = () => {
    step = step + 1;
    createLifeGameBoard(step);
  };

  // 配列の状況に応じて値を返す
  const returnState = (i: number, j: number, step: number) => {
    if (step == 0) {
      return lifeGameState[i][j];
    } else {
      //１世代以降の処理
      // 八近傍の状況
      let upperLeft = i == 0 || j == 0 ? "" : lifeGameState[i - 1][j - 1];
      let upper = i == 0 ? "" : lifeGameState[i - 1][j];
      let upperRight =
        i == 0 || j == horizonalNum - 1 ? "" : lifeGameState[i - 1][j + 1];
      let left = j == 0 ? "" : lifeGameState[i][j - 1];
      let right = j == horizonalNum - 1 ? "" : lifeGameState[i][j + 1];
      let lowerLeft =
        i == verticalNum - 1 || j == 0 ? "" : lifeGameState[i + 1][j - 1];
      let lower = i == verticalNum - 1 ? "" : lifeGameState[i + 1][j];
      let lowerRight =
        i == verticalNum - 1 || j == horizonalNum - 1
          ? ""
          : lifeGameState[i + 1][j + 1];
      // 八近傍の状況をまとめた配列
      let neighborhoods = [
        upperLeft,
        upper,
        upperRight,
        left,
        right,
        lowerLeft,
        lower,
        lowerRight,
      ];
      console.log(neighborhoods);
    }
  };

  // ライフゲームの板を描写する
  const createLifeGameBoard = (step: number) => {
    for (let i = 0; i < verticalNum; i++) {
      // forで回すとき都度都度配列初期化する
      square = [];
      for (let j = 0; j < horizonalNum; j++) {
        square.push(
          <button className="Square" key={j}>
            {returnState(i, j, step)}
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

  // 初期化
  initializeState();
  return (
    <div className="lifeGame">
      <div className="lifeGameBoard">{createLifeGameBoard(step)}</div>
      <div>
        <button className="nextStepButton" onClick={nextState}>
          進める
        </button>
      </div>
      <div>
        <button className="autoStep">オート</button>
      </div>
    </div>
  );
};

export default LifeGame;
