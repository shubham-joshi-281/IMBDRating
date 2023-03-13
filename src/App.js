import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Detail from "./component/Detail";
import "./style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
