import { VFC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WantToBuy from "../pages/WantToBuy";
import CommitCounter from "../pages/CommitCounter";
import TwitterManagement from "../pages/TwitterManagement";
import LifeGame from "../pages/LifeGame";
import CardGameMemo from "../pages/CardGameMemo";

import PageList from "./PageList";

const RouteIndex: VFC = () => {
  return (
    <BrowserRouter>
      <PageList />
      <Routes>
        <Route path="/wantToBuy" element={<WantToBuy />} />
        <Route path="/commitCounter" element={<CommitCounter />} />
        <Route path="/twitterManagement" element={<TwitterManagement />} />
        <Route path="/lifeGame" element={<LifeGame />} />
        <Route path="/cardGameMemo" element={<CardGameMemo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteIndex;
