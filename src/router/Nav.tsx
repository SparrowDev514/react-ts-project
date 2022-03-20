import { VFC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import WantToBuy from "../pages/WantToBuy";
import CommitCounter from "../pages/CommitCounter";
import TwitterManagement from "../pages/TwitterManagement";
import LifeGame from "../pages/LifeGame";
import CardGameMemo from "../pages/CardGameMemo";

const Nav: VFC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {/* <li>
            <Link to="/">Home</Link>
          </li> */}
            <li>
              <Link to="/wantToBuy">WantToBuy</Link>
            </li>
            <li>
              <Link to="/commitCounter">CommitCounter</Link>
            </li>
            <li>
              <Link to="/TwitterManagement">TwitterManagement</Link>
            </li>
            <li>
              <Link to="/lifeGame">LifeGame</Link>
            </li>
            <li>
              <Link to="/cardGameMemo">CardGameMemo</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/wantToBuy" element={<WantToBuy />} />
          <Route path="/commitCounter" element={<CommitCounter />} />
          <Route path="/TwitterManagement" element={<TwitterManagement />} />
          <Route path="/lifeGame" element={<LifeGame />} />
          <Route path="/cardGameMemo" element={<CardGameMemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Nav;
