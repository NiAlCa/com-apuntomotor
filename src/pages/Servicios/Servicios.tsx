import { serviciosData } from "../../data/serviciosData.mock";
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next'
import "./servicios.scss";
import Menu from '../../components/Menu/Menu';
import logo from '../../assets/Logo2.webp';

export const Servicios = () => {
  const {  i18n } = useTranslation();
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="row  justify-content-center flex-md-row flex-column-reverse">
          {/* Contenedor de las tarjetas y el botón */}
          <div className="col-md-8 col-12 px-5 ">
            <div className="page align-items-center flex-column d-flex justify-content-center">
              <div className="col align-items-center flex-column d-flex justify-content-center w-100">
                {serviciosData.map((servicio, index) => (
                  <div
                    key={index}
                    className={`servicio-card col-xs-12  ${index % 1 === 0 ? "normal" : "reverse"} ${index % 1 === 0 ? "right-animation" : "left-animation"
                      } animate__animated ${index % 1 === 0 ? "animate__zoomInRight" : "animate__zoomInLeft"}`}
                  >
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
              
                
            </div>
          </div>
          
          {/* Contenedor del menú */}
      
            <div className="col-xl-2 col-sm-4 menuServicios d-flex flex-sm-row flex-md-column col-12  justify-content-md-start justify-content-between px-5 px-sm-5 animate__animated animate__zoomInRight">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
                <img src={logo} alt="Logo Apuntomotor" style={{ maxWidth: '200px' }} />
              </a>
              <Menu column={true} />
            </div>
        </div>
      </I18nextProvider>
    </>
  );
};
