function Todo() {
  return (
    <div className="Todo">
      ここにTODO LISTを作るぞ.
      <form>
        <input type="text" name="wantToBuy" />
        <button type="submit">TODO追加</button>
      </form>
      <hr></hr>
      <div>ここにリストを表示</div>
    </div>
  );
}
// これは追加分です
export default Todo;
