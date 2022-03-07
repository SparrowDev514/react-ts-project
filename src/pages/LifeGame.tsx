import { useState } from "react";

let horizonalNum: number = 20;
let verticalNum: number = 20;

// ライフゲームの状況を保持する定数
let lifeGameState: string[][] = [];
let nextLifeGameState: string[][] = [];

//最初に発生させる生命の割合
const initialRate: number = 0.5;

// lifeGameStateを乱数で初期化
const initializeState = () => {
  for (let i = 0; i < verticalNum; i++) {
    let initialRow: string[] = [];
    for (let j = 0; j < horizonalNum; j++) {
      if (Math.random() > initialRate) {
        initialRow.push("");
      } else {
        initialRow.push("●");
      }
    }
    lifeGameState.push(initialRow);
  }
  return lifeGameState;
};
const initializeNextState = () => {
  for (let i = 0; i < verticalNum; i++) {
    let initialRow: string[] = [];
    for (let j = 0; j < horizonalNum; j++) {
      initialRow.push("");
    }
    nextLifeGameState.push(initialRow);
  }
  return nextLifeGameState;
};

// // 初期化
initializeState();
initializeNextState();

const LifeGame = () => {
  //step
  const [step, setStep] = useState<number>(0);

  //世代を進める
  const nextState = () => {
    const nextStep: number = step + 1;
    setStep(nextStep);
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
      let liveCellNum: number = neighborhoods.filter(
        (neighborhood) => neighborhood == "●"
      ).length;

      if (lifeGameState[i][j] == "" && liveCellNum == 3) {
        nextLifeGameState[i][j] = "●";
        return "●";
      } else if (lifeGameState[i][j] == "●") {
        if (liveCellNum == 2 || liveCellNum == 3) {
          nextLifeGameState[i][j] = "●";
          return "●";
        }
        if (liveCellNum <= 1 || liveCellNum >= 4) {
          nextLifeGameState[i][j] = "";
          return "";
        }
      } else {
        return nextLifeGameState[i][j];
      }
    }
  };

  // ライフゲームの板を描写する
  const createLifeGameBoard = (step: number) => {
    // forで回すとき都度都度配列初期化する
    let row = [];
    for (let i = 0; i < verticalNum; i++) {
      // forで回すとき都度都度配列初期化する
      let square = [];
      for (let j = 0; j < horizonalNum; j++) {
        square.push(
          <button className="Square" key={j}>
            {returnState(i, j, step)}
          </button>
        );
      }
      row.push(
        <div className="SquareRow" key={i}>
          {square}
        </div>
      );
    }
    if (step != 0) {
      lifeGameState = nextLifeGameState;
    }
    return row;
  };

  // TODO: CSSを後で分離する;
  const lifeGameStyle = {
    display: "flex",
  };
  const lifeGameBoardStyle = {
    padding: "10px",
  };
  const stepNumStyle = {
    padding: "10px",
  };
  const nextStepButtonStyle = {
    padding: "10px",
    margin: "10px",
  };
  const autoStepButtonStyle = {
    padding: "10px",
    margin: "10px",
  };
  // TODO:オートの時 終わらないようなやり方を考える
  return (
    <div className="lifeGame" style={lifeGameStyle}>
      <div className="lifeGameBoard" style={lifeGameBoardStyle}>
        {createLifeGameBoard(step)}
      </div>
      <div>
        <div className="stepNum" style={stepNumStyle}>
          第{step}世代
        </div>
        <button
          className="nextStepButton"
          style={nextStepButtonStyle}
          onClick={nextState}
        >
          進める
        </button>
        <button className="autoStepButton" style={autoStepButtonStyle}>
          オート
        </button>
      </div>
    </div>
  );
};

export default LifeGame;
