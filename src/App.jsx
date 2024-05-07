import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberOfMembers from "./components/NumOfMembers/NumberOfMembers";
import Home from "./pages/Home/Home.jsx";
import MainInputArea from "./components/MainInputArea/MainInputArea";
import FinalResult from "./components/FinalResult/FinalResult.jsx";

const App = () => {
  return (
    <Home>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NumberOfMembers />} />
          <Route path="/maininputarea" element={<MainInputArea />} />
          <Route path="/finalresult" element={<FinalResult />} />
        </Routes>
      </BrowserRouter>
    </Home>
  );
};

export default App;
