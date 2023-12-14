import "./App.css";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Dev } from "./pages/Dev/Dev";
import "./index.scss";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="principal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dev" element={<Dev />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
