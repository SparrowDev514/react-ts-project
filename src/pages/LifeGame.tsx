const LifeGame = () => {
  let square: object[] = [];
  let div: object[] = [];
  let horizonalNum: number = 20;
  let verticalNum: number = 20;

  const createLifeGameBoard = () => {
    for (let i = 0; i < verticalNum; i++) {
      // forで回すとき都度都度配列初期化する
      square = [];
      for (let j = 0; j < horizonalNum; j++) {
        square.push(<button className="Square" key={j} />);
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
