import "./App.css";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Dev } from "./pages/Dev/Dev";
import "./index.scss";
import Footer from "./components/Footer/Footer";
import { ServiciosDetalle } from "./pages/ServiciosDetalle/ServiciosDetalle";
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { Contacto } from "./pages/Contacto/Contacto";
import { Servicios } from "./pages/Servicios/Servicios";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="principal">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dev" element={<Dev />} />
            <Route path="/:serviceSlug" element={<ServiciosDetalle />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios/>} />
          </Routes>

          <Footer />
        </div>
      </I18nextProvider>
    </>
  );
}

export default App;
