import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Oxnote from "./pages/oxnote/Oxnote";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/oxnote" element={<Oxnote />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
