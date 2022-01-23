import "./App.css";
import { VFC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WantToBuy from "./pages/WantToBuy";
import CommitCounter from "./pages/CommitCounter";
import FakeTwitter from "./pages/FakeTwitter";

const App: VFC = () => {
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
              <Link to="/fakeTwitter">FakeTwitter</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/wantToBuy" element={<WantToBuy />} />
          <Route path="/commitCounter" element={<CommitCounter />} />
          <Route path="/fakeTwitter" element={<FakeTwitter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
