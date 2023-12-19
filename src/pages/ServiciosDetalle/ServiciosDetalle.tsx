import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { serviciosPageData, serviciosPageDataItem } from '../../data/serviciosPageData.mock';
import Modelo3d from '../../components/ServiciosDescription/Modelo3d';
import Menu from '../../components/Menu/Menu';
import logo from '../../assets/Logo2.png';

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

      <div className="row justify-content-center">
        <div className="col-8">
          <Modelo3d icono={`${serviceData.icono}`} />
          <h1 className="text-center text-color-primary text-secondary">{titleToShow}</h1>
          <div>{textToShow}</div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary animate__animated animate__fadeInLeft w-50 mb-2"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
        <div className="col-4 menuServicios">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={logo} width="250" alt="Logo" />
        </a>
        <Menu column={true} />
      </div>


     
    </div>
  );
};
