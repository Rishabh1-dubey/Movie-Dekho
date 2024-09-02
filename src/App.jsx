import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="bg-[#1f1e24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
