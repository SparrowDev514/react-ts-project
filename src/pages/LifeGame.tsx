// import
import React, { cloneElement, useState } from "react";

interface CellProps {
  column: number;
  line: number;
  isSurvive: boolean;
  isLive: boolean;
}
interface locationProps {
  column: number;
  line: number;
}

const LifeGame = () => {
  const [columnLineNum, setColumnLineNum] = useState<number>(5);
  const [generation, setGeneration] = useState<number>(1);
  const [board, setBoard] = useState<CellProps[][]>(initializeBoard);

  // 初期状態を定義する
  function initializeBoard() {
    const initialRate = 0.5;
    const cellBoard: CellProps[][] = [];
    for (let i = 0; i < columnLineNum; i++) {
      const cellColumn: CellProps[] = [];
      for (let j = 0; j < columnLineNum; j++) {
        const cell: CellProps = {
          column: 0,
          line: 0,
          isSurvive: false,
          isLive: true,
        };
        cell["isLive"] = Math.random() > initialRate ? false : true;
        cell["column"] = i;
        cell["line"] = j;
        cellColumn.push(cell);
      }
      cellBoard.push(cellColumn);
    }
    return cellBoard;
  }

  // isSueviveフラグを更新する
  const setIsSurvive = () => {
    board.map((column) => {
      column.map((cell) => {
        const aroundCells: CellProps[] = getAroundCells(cell);
        const liveCells: CellProps[] = aroundCells.filter((liveCell) => {
          return liveCell["isLive"];
        });
        if (liveCells.length == 3 && !cell["isLive"]) {
          // 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する。
          board[cell["column"]][cell["line"]]["isSurvive"] = true;
        } else if (
          (liveCells.length == 2 || liveCells.length == 3) &&
          cell["isLive"]
        ) {
          // 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。
          board[cell["column"]][cell["line"]]["isSurvive"] = true;
        } else if (liveCells.length <= 1 && cell["isLive"]) {
          // 生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅する。
          board[cell["column"]][cell["line"]]["isSurvive"] = false;
        } else if (liveCells.length >= 4 && cell["isLive"]) {
          // 生きているセルに隣接する生きたセルが4つ以上ならば、過密により死滅する。
          board[cell["column"]][cell["line"]]["isSurvive"] = false;
        }
      });
    });

    console.log(board);
  };

  // cellの周囲のcellの情報を得る
  const getAroundCells = (cell: CellProps) => {
    const upperLeftCell: CellProps =
      board[
        getAroundLocation(cell["column"], cell["line"], "upperLeft")["column"]
      ][getAroundLocation(cell["column"], cell["line"], "upperLeft")["line"]];

    const upperCell: CellProps =
      board[getAroundLocation(cell["column"], cell["line"], "upper")["column"]][
        getAroundLocation(cell["column"], cell["line"], "upper")["line"]
      ];

    const upperRightCell: CellProps =
      board[
        getAroundLocation(cell["column"], cell["line"], "upperRight")["column"]
      ][getAroundLocation(cell["column"], cell["line"], "upperRight")["line"]];

    const leftCell: CellProps =
      board[getAroundLocation(cell["column"], cell["line"], "left")["column"]][
        getAroundLocation(cell["column"], cell["line"], "left")["line"]
      ];

    const rightCell: CellProps =
      board[getAroundLocation(cell["column"], cell["line"], "right")["column"]][
        getAroundLocation(cell["column"], cell["line"], "right")["line"]
      ];

    const lowerLeftCell: CellProps =
      board[
        getAroundLocation(cell["column"], cell["line"], "lowerLeft")["column"]
      ][getAroundLocation(cell["column"], cell["line"], "lowerLeft")["line"]];

    const lowerCell: CellProps =
      board[getAroundLocation(cell["column"], cell["line"], "lower")["column"]][
        getAroundLocation(cell["column"], cell["line"], "lower")["line"]
      ];

    const lowerRightCell: CellProps =
      board[
        getAroundLocation(cell["column"], cell["line"], "lowerRight")["column"]
      ][getAroundLocation(cell["column"], cell["line"], "lowerRight")["line"]];

    const aroundCells: CellProps[] = [
      upperLeftCell,
      upperCell,
      upperRightCell,
      leftCell,
      rightCell,
      lowerLeftCell,
      lowerCell,
      lowerRightCell,
    ];
    return aroundCells;
  };

  // 近傍のセルの位置情報を返す関数
  const getAroundLocation = (
    column: number,
    line: number,
    direction: string
  ) => {
    const location: locationProps = {
      column: 0,
      line: 0,
    };
    switch (direction) {
      case "upperLeft":
        location["column"] = correctLocation(column - 1);
        location["line"] = correctLocation(line - 1);
        break;
      case "upper":
        location["column"] = correctLocation(column - 1);
        location["line"] = correctLocation(line);
        break;
      case "upperRight":
        location["column"] = correctLocation(column - 1);
        location["line"] = correctLocation(line + 1);
        break;
      case "left":
        location["column"] = correctLocation(column);
        location["line"] = correctLocation(line - 1);
        break;
      case "right":
        location["column"] = correctLocation(column);
        location["line"] = correctLocation(line + 1);
        break;
      case "lowerLeft":
        location["column"] = correctLocation(column + 1);
        location["line"] = correctLocation(line - 1);
        break;
      case "lower":
        location["column"] = correctLocation(column + 1);
        location["line"] = correctLocation(line);
        break;
      case "lowerRight":
        location["column"] = correctLocation(column + 1);
        location["line"] = correctLocation(line + 1);
        break;
    }
    return location;
  };

  // はみ出した位置を補正してくれる関数
  const correctLocation = (locNum: number) => {
    if (locNum < 0) {
      return columnLineNum - 1;
    } else if (locNum >= columnLineNum) {
      return 0;
    } else {
      return locNum;
    }
  };
  // ボードのHTMLを返す
  const returnBoard = () => {
    const column = [];
    for (let i = 0; i < columnLineNum; i++) {
      const square = [];
      for (let j = 0; j < columnLineNum; j++) {
        square.push(
          <div className="Square" key={j}>
            {board[i][j]["isLive"] ? "●" : ""}
          </div>
        );
      }
      column.push(
        <div className="SquareColumn" key={i}>
          {square}
        </div>
      );
    }
    setIsSurvive();
    return column;
  };

  //世代を一つ進める
  const nextStep = () => {
    setGeneration(generation + 1);
    console.log(generation);
  };

  //コンポーネント
  const CreateLifeGameBoard = () => {
    return (
      <div className="lifeGameBoard" style={lifeGameBoardStyle}>
        {returnBoard()}
      </div>
    );
  };

  const NextStepButton = () => {
    return (
      <button
        className="nextStepButton"
        style={nextStepButtonStyle}
        onClick={nextStep}
      >
        進める
      </button>
    );
  };

  // CSS
  const lifeGameStyle = {
    display: "flex",
  };
  const lifeGameBoardStyle = {
    padding: "10px",
  };
  const nextStepButtonStyle = {
    padding: "10px",
    margin: "10px",
  };

  return (
    <div className="lifeGame" style={lifeGameStyle}>
      <CreateLifeGameBoard />
      <div>
        <NextStepButton />
        {/* <AutoStepButton /> */}
      </div>
    </div>
  );
};

export default LifeGame;
