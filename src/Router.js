import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Oxnote from "./pages/oxnote/Oxnote";
import ResultPage from "./pages/ResultPage";
import CheckWrongAnswers from "./pages/oxnote/CheckWrongAnswers";
import OxResultPage from "./pages/oxnote/OxResultPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/oxnote" element={<Oxnote />} />
        <Route path="/oxdetail" element={<CheckWrongAnswers />} />
        <Route path="/oxresult" element={<OxResultPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
