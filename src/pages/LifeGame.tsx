// import
import React from "react";

interface BoardProps {
  step: number;
  rowsNum: number;
}

interface NextStep {
  nextStep: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// グローバル変数
let lifeGameState: string[][] = [];
const nextLifeGameState: string[][] = [];

// // ロジック
const initializeState = (rowsNum: number) => {
  const initialRate = 0.3;

  for (let i = 0; i < rowsNum; i++) {
    const initialRow: string[] = [];
    for (let j = 0; j < rowsNum; j++) {
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

const initializeNextState = (rowsNum: number) => {
  for (let i = 0; i < rowsNum; i++) {
    const initialRow: string[] = [];
    for (let j = 0; j < rowsNum; j++) {
      initialRow.push("");
    }
    nextLifeGameState.push(initialRow);
  }
  return nextLifeGameState;
};

const returnState = (i: number, j: number, props: BoardProps) => {
  if (props.step == 0) {
    return lifeGameState[i][j];
  } else {
    //１世代以降の処理
    // 八近傍の状況
    const upperLeft = i == 0 || j == 0 ? "" : lifeGameState[i - 1][j - 1];
    const upper = i == 0 ? "" : lifeGameState[i - 1][j];
    const upperRight =
      i == 0 || j == props.rowsNum - 1 ? "" : lifeGameState[i - 1][j + 1];
    const left = j == 0 ? "" : lifeGameState[i][j - 1];
    const right = j == props.rowsNum - 1 ? "" : lifeGameState[i][j + 1];
    const lowerLeft =
      i == props.rowsNum - 1 || j == 0 ? "" : lifeGameState[i + 1][j - 1];
    const lower = i == props.rowsNum - 1 ? "" : lifeGameState[i + 1][j];
    const lowerRight =
      i == props.rowsNum - 1 || j == props.rowsNum - 1
        ? ""
        : lifeGameState[i + 1][j + 1];
    // 八近傍の状況をまとめた配列
    const neighborhoods = [
      upperLeft,
      upper,
      upperRight,
      left,
      right,
      lowerLeft,
      lower,
      lowerRight,
    ];
    const liveCellNum: number = neighborhoods.filter(
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

const handleRowsNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  rowsNum = e.target.valueAsNumber;
};

const createLifeGameBoard = (props: BoardProps) => {
  // forで回すとき都度都度配列初期化する
  const row = [];
  for (let i = 0; i < props.rowsNum; i++) {
    // forで回すとき都度都度配列初期化する
    const square = [];
    for (let j = 0; j < props.rowsNum; j++) {
      square.push(
        <button className="Square" key={j}>
          {returnState(i, j, props)}
        </button>
      );
    }
    row.push(
      <div className="SquareRow" key={i}>
        {square}
      </div>
    );
  }
  if (props.step != 0) {
    lifeGameState = nextLifeGameState;
  }
  return row;
};

// コンポーネント
const CreateLifeGameBoard = (props: BoardProps) => {
  return (
    <div className="lifeGameBoard" style={lifeGameBoardStyle}>
      {createLifeGameBoard(props)}
    </div>
  );
};

const StepNum = (props: { step: number }) => {
  return (
    <div className="stepNum" style={stepNumStyle}>
      第{props.step}世代
    </div>
  );
};

const TextFieldRows = (props: { rowsNum: number }) => {
  return (
    <div className="textFieldRows">
      <input
        type="number"
        value={props.rowsNum}
        onChange={handleRowsNumChange}
        step="5"
        min="5"
        placeholder="辺のマス目を入力"
      />
    </div>
  );
};

const TextFieldInitRate = () => {
  return (
    <div className="textFieldInitRate">
      <input
        type="number"
        step="10"
        max="100"
        min="0"
        placeholder="初期生命の割合を入力"
      />
    </div>
  );
};

const NextStepButton = (props: NextStep) => {
  return (
    <button
      className="nextStepButton"
      style={nextStepButtonStyle}
      onClick={props.nextStep}
    >
      進める
    </button>
  );
};

export default class LifeGame extends React.Component<object, BoardProps> {
  constructor(props: object) {
    super(props);
    this.state = {
      step: 0,
      rowsNum: 20,
    };
  }

  NextStep = () => {
    const step = this.state.step + 1;
    this.setState({ step: step });
  };

  render() {
    initializeState(this.state.rowsNum);
    initializeNextState(this.state.rowsNum);

    return (
      <div className="lifeGame" style={lifeGameStyle}>
        <CreateLifeGameBoard
          step={this.state.step}
          rowsNum={this.state.rowsNum}
        />
        <div>
          <StepNum step={this.state.step} />
          <TextFieldRows rowsNum={this.state.rowsNum} />
          <TextFieldInitRate />
          <NextStepButton nextStep={this.NextStep} />
        </div>
      </div>
    );
  }
}

// CSS
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
// const autoStepButtonStyle = {
//   padding: "10px",
//   margin: "10px",
// };
