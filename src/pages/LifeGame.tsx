import React from "react";
import { useState } from "react";

const [step, setStep] = useState<number>(0);

function sleep(waitTime: number | undefined){
  new Promise((resolve) => setTimeout(resolve, waitTime))
}

async function auto() {
  for (let i = 0; i <= 10000; i++) {
    await sleep(100);
    setStep(i);
  }
};

const nextState = () => {
  const nextStep: number = step + 1;
  setStep(nextStep);
};

class createLifeGameBoard extends React.Component {
  render(){
    return()
  }
}

class stepNum extends React.Component {
  render(){
    return()
  }
}

class textFieldRows extends React.Component {
  render(){
    return()
  }
}

class textFieldInitRate extends React.Component {
  render(){
    return()
  }
}

function NextStepButton() {
    return(
      <button className="nextStepButton" style={nextStepButtonStyle} onClick={nextState}>
        進める
      </button>
    )
}

function AutoStepButton() {
  return(
    <button className="autoStepButton" onClick={auto} style={autoStepButtonStyle}>
    オート
    </button>
  )
}

class LifeGame extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="lifeGameBoard" style={lifeGameBoardStyle}>
          {createLifeGameBoard(step)}
        </div> */}
        <createLifeGameBoard step = step />
        <div>
          {/* <div className="stepNum" style={stepNumStyle}>
            第{step}世代
          </div> */}
          <stepNum step = step />
          {/* <div className="textFieldRows">
            <input
              type="number"
              value={rowsNum}
              onChange={handleRowsNumChange}
              step="5"
              min="5"
              placeholder="辺のマス目を入力"
            ></input>
          </div> */}
          <textFieldRows rowsNum = rowsNum />
          {/* <div className="textFieldInitRate">
            <input
              type="number"
              step="10"
              max="100"
              min="0"
              placeholder="初期生命の割合を入力"
            ></input>
          </div> */}
          <textFieldInitRate />
          <NextStepButton />
          <AutoStepButton />
        </div>
      </div>
    );
  }
}

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


// 以下コメントアウト
// import { useState } from "react";

// // ライフゲームの状況を保持する定数
// let lifeGameState: string[][] = [];
// const nextLifeGameState: string[][] = [];

// //最初に発生させる生命の割合
// const initialRate = 0.3;

// // lifeGameStateを乱数で初期化

// const initializeState = (rowsNum: number) => {
//   for (let i = 0; i < rowsNum; i++) {
//     const initialRow: string[] = [];
//     for (let j = 0; j < rowsNum; j++) {
//       if (Math.random() > initialRate) {
//         initialRow.push("");
//       } else {
//         initialRow.push("●");
//       }
//     }
//     lifeGameState.push(initialRow);
//   }

//   return lifeGameState;
// };
// const initializeNextState = (rowsNum: number) => {
//   for (let i = 0; i < rowsNum; i++) {
//     const initialRow: string[] = [];
//     for (let j = 0; j < rowsNum; j++) {
//       initialRow.push("");
//     }
//     nextLifeGameState.push(initialRow);
//   }
//   return nextLifeGameState;
// };

// const sleep = (waitTime: number | undefined) =>
//   new Promise((resolve) => setTimeout(resolve, waitTime));

// const LifeGame = () => {
//   const [rowsNum, setRowsNum] = useState<number>(20);
//   const [step, setStep] = useState<number>(0);

//   //世代を進める
//   const nextState = () => {
//     const nextStep: number = step + 1;
//     setStep(nextStep);
//   };

//   const auto = async () => {
//     for (let i = 0; i <= 10000; i++) {
//       await sleep(100);
//       setStep(i);
//     }
//   };

//   // 配列の状況に応じて値を返す
//   const returnState = (i: number, j: number, step: number) => {
//     if (step == 0) {
//       return lifeGameState[i][j];
//     } else {
//       //１世代以降の処理
//       // 八近傍の状況
//       const upperLeft = i == 0 || j == 0 ? "" : lifeGameState[i - 1][j - 1];
//       const upper = i == 0 ? "" : lifeGameState[i - 1][j];
//       const upperRight =
//         i == 0 || j == rowsNum - 1 ? "" : lifeGameState[i - 1][j + 1];
//       const left = j == 0 ? "" : lifeGameState[i][j - 1];
//       const right = j == rowsNum - 1 ? "" : lifeGameState[i][j + 1];
//       const lowerLeft =
//         i == rowsNum - 1 || j == 0 ? "" : lifeGameState[i + 1][j - 1];
//       const lower = i == rowsNum - 1 ? "" : lifeGameState[i + 1][j];
//       const lowerRight =
//         i == rowsNum - 1 || j == rowsNum - 1 ? "" : lifeGameState[i + 1][j + 1];
//       // 八近傍の状況をまとめた配列
//       const neighborhoods = [
//         upperLeft,
//         upper,
//         upperRight,
//         left,
//         right,
//         lowerLeft,
//         lower,
//         lowerRight,
//       ];
//       const liveCellNum: number = neighborhoods.filter(
//         (neighborhood) => neighborhood == "●"
//       ).length;

//       if (lifeGameState[i][j] == "" && liveCellNum == 3) {
//         nextLifeGameState[i][j] = "●";
//         return "●";
//       } else if (lifeGameState[i][j] == "●") {
//         if (liveCellNum == 2 || liveCellNum == 3) {
//           nextLifeGameState[i][j] = "●";
//           return "●";
//         }
//         if (liveCellNum <= 1 || liveCellNum >= 4) {
//           nextLifeGameState[i][j] = "";
//           return "";
//         }
//       } else {
//         return nextLifeGameState[i][j];
//       }
//     }
//   };

//   // ライフゲームの板を描写する
//   const createLifeGameBoard = (step: number) => {
//     // forで回すとき都度都度配列初期化する
//     const row = [];
//     for (let i = 0; i < rowsNum; i++) {
//       // forで回すとき都度都度配列初期化する
//       const square = [];
//       for (let j = 0; j < rowsNum; j++) {
//         square.push(
//           <button className="Square" key={j}>
//             {returnState(i, j, step)}
//           </button>
//         );
//       }
//       row.push(
//         <div className="SquareRow" key={i}>
//           {square}
//         </div>
//       );
//     }
//     if (step != 0) {
//       lifeGameState = nextLifeGameState;
//     }
//     return row;
//   };

//   const handleRowsNumChange = (e: any) => {
//     setRowsNum(() => e.target.value);
//   };

//   // // 初期化
//   initializeState(rowsNum);
//   initializeNextState(rowsNum);

//   return (
//     <div className="lifeGame" style={lifeGameStyle}>
//       <div className="lifeGameBoard" style={lifeGameBoardStyle}>
//         {createLifeGameBoard(step)}
//       </div>
//       <div>
//         <div className="stepNum" style={stepNumStyle}>
//           第{step}世代
//         </div>
//         <div className="textFieldRows">
//           <input
//             type="number"
//             value={rowsNum}
//             onChange={handleRowsNumChange}
//             step="5"
//             min="5"
//             placeholder="辺のマス目を入力"
//           ></input>
//         </div>
//         <div className="textFieldInitRate">
//           <input
//             type="number"
//             step="10"
//             max="100"
//             min="0"
//             placeholder="初期生命の割合を入力"
//           ></input>
//         </div>
//         <button
//           className="nextStepButton"
//           style={nextStepButtonStyle}
//           onClick={nextState}
//         >
//           進める
//         </button>
//         <button
//           className="autoStepButton"
//           onClick={auto}
//           style={autoStepButtonStyle}
//         >
//           オート
//         </button>
//       </div>
//     </div>
//   );
// };

// // TODO: CSSを後で分離する;
// const lifeGameStyle = {
//   display: "flex",
// };
// const lifeGameBoardStyle = {
//   padding: "10px",
// };
// const stepNumStyle = {
//   padding: "10px",
// };
// const nextStepButtonStyle = {
//   padding: "10px",
//   margin: "10px",
// };
// const autoStepButtonStyle = {
//   padding: "10px",
//   margin: "10px",
// };

// export default LifeGame;
