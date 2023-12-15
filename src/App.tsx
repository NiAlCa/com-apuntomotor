import "./App.css";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Dev } from "./pages/Dev/Dev";
import "./index.scss";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="principal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dev" element={<Dev />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
