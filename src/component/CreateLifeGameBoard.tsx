// import React, { useState } from "react";

// interface CellProps {
//   column: number;
//   line: number;
//   isSurvive: boolean;
//   isLive: boolean;
// }
// const CreateLifeGameBoard = () => {
//   // ボードのHTMLを返す
//   const returnBoard = () => {
//     const column = [];
//     for (let i = 0; i < columnLineNum; i++) {
//       const square = [];
//       for (let j = 0; j < columnLineNum; j++) {
//         square.push(
//           <div className="Square" key={j}>
//             {board[i][j]["isLive"] ? "●" : ""}
//           </div>
//         );
//       }
//       column.push(
//         <div className="SquareColumn" key={i}>
//           {square}
//         </div>
//       );
//     }
//     setIsSurvive();
//     return column;
//   };

//   //コンポーネント
//   const CreateLifeGameBoard = () => {
//     return (
//       <div className="lifeGameBoard" style={lifeGameBoardStyle}>
//         {returnBoard()}
//       </div>
//     );
//   };
// };

// export default CreateLifeGameBoard;
