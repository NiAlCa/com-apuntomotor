import { Navbar } from "../../components/Navbar/Navbar";
import { ContenedorPage } from "../../components/Contenedor/Contenedor";
import { serviciosData } from "../../data/serviciosData.mock";
import "./servicios.scss";

export const Servicios = () => {
  return (
    <>
      <Navbar />
      <div className="page  align-items-center flex-column d-flex justify-content-center">
        <ContenedorPage bg="bg-white">
          <div className="col align-items-center flex-column d-flex justify-content-center w-100">
            {serviciosData.map((servicio, index) => (
              <div key={index} className={`servicio-card ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="img-title-card">
                  <h2>{servicio.title}</h2>
                  <img className="servicio-img" src={servicio.img} alt={servicio.title} />
                </div>
                <div className="text-service">
                  {servicio.txt.split('\n').map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContenedorPage>
      </div>
    </>
  );
};
