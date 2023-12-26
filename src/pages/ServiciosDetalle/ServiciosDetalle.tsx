import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { serviciosPageData, serviciosPageDataItem } from '../../data/serviciosPageData.mock';
import Modelo3d from '../../components/ServiciosDescription/Modelo3d';
import Menu from '../../components/Menu/Menu';
import logo from '../../assets/Logo2.webp';

export const ServiciosDetalle = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { t, i18n } = useTranslation();

  const serviceData: serviciosPageDataItem | undefined = serviciosPageData.find(
    (service) => service.slash === serviceSlug
  );

  if (!serviceData) {
    return <div>{t('serviceNotFound')}</div>;
  }

  const textToShow = i18n.language === 'en' ? serviceData.textEn : serviceData.textEs;
  const titleToShow = i18n.language === 'en' ? serviceData.titleEn : serviceData.titleEs;

  return (

      <div className="row justify-content-center flex-md-row flex-column-reverse ">
        <div className="col-md-8 col-12 px-5" >
          <Modelo3d icono={`${serviceData.icono}`} />
          <h1 className="text-center text-color-primary text-secondary">{titleToShow}</h1>
          <div>{textToShow}</div>
          <div className="d-flex justify-content-center">
          <Link to="/contacto">
            <button
              type="button"
              className="btn btn-primary animate__animated animate__fadeInLeft w-100 mb-2"
            >
              {t('contactUs')}
            </button>
            </Link>
          </div>
        </div>
        <div className="col-xl-2 col-sm-4 menuServicios d-flex flex-sm-row flex-md-column col-12  justify-content-md-start justify-content-between px-5 px-sm-5 animate__animated animate__zoomInRight">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
        >
          <img src={logo}  alt="Logo Apuntomotor"  style={{ maxWidth: '200px',}}/>
        </a>
        <Menu column={true} />
      </div>


     
    </div>
  );
};
