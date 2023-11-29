import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Subject from "./pages/Subject";
import Result from "./pages/Result";
import NoPage from "./pages/NoPage";
import ScoreEdit from "./pages/ScoreEdit";
import "./index.css";
import Score from "./pages/Score";
import First from "./pages/First";

 function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Subject />} />
        <Route path="Result" element={<Result />} />
        <Route path="Subject" element={<Subject />} />
        <Route path="ScoreEdit" element={<ScoreEdit />} />
        <Route path="Score" element={<Score />} />
        <Route path="First" element={<First />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes> 

    </>
  );
}


export default App;
