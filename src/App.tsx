import "./App.css";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Dev } from "./pages/Dev/Dev";
import "./index.scss";
import Footer from "./components/Footer/Footer";
import { ServiciosDetalle } from "./pages/ServiciosDetalle/ServiciosDetalle";

function App() {
  return (
    <>

      <div className="principal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dev" element={<Dev />} />
          <Route path="/:serviceSlug" element={<ServiciosDetalle />} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
