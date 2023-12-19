import { FaCar } from "react-icons/fa";
import { servicesData } from '../../data/servicesData.mock';
import styles from './Services.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next'
const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <I18nextProvider i18n={i18n}>
      <div className={`d-flex justify-content-around align-items-center mb-5 ${styles.divider}`}>
        <div className={styles.divider} />
        <h2 className={`text-secondary text-center mx-3 ${styles.text}`}>
          {t('servi.top')}
        </h2>
        <div className={styles.divider} />
      </div>
      <div className={`container mt-4 ${styles.container}`}>
        <div className={`row ${styles.row}`}>

          {/* Izquierda */}
          <div className={`col d-flex flex-column align-items-center   ${styles.column}`}>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[1].img} alt={servicesData[1].title} />
              <h3>{t(`servicesData.${'ELECTRICIDAD DEL AUTOMOVIL'}.title`)}</h3>
              <p>{t(`servicesData.${'ELECTRICIDAD DEL AUTOMOVIL'}.txt`)}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[3].img} alt={servicesData[3].title} />
              <h3>{t(`servicesData.${'CAMBIO DE NEUMATICOS'}.title`)}</h3>
              <p>{t(`servicesData.${'CAMBIO DE NEUMATICOS'}.txt`)}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
          </div>

          {/* CENTRO */}
          <div className={`col d-flex flex-column align-items-center  justify-content-center  ${styles.columnc}`}>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={60} className="bg-danger rounded-pill p-3" />
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={60} className="bg-danger rounded-pill p-3" />
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={60} className="bg-danger rounded-pill p-3" />
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={60} className="bg-danger rounded-pill p-3" />
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={60} className="bg-danger rounded-pill p-3" />
            </div>
            <div className={styles.lineaRoja}></div>
          </div>

          {/* Derecha */}
          <div className={`col  d-flex flex-column align-items-center   ${styles.column}`}>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[0].img} alt={servicesData[0].title} />
              <h3>{t(`servicesData.${'PRE ITV'}.title`)}</h3>
              <p>{t(`servicesData.${'PRE ITV'}.txt`)}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[2].img} alt={servicesData[2].title} />
              <h3>{t(`servicesData.${'DIANOSTICO MULTIMARCA'}.title`)}</h3>
              <p>{t(`servicesData.${'DIANOSTICO MULTIMARCA'}.txt`)}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[4].img} alt={servicesData[4].title} />
              <h3>{t(`servicesData.${'CARGA DE AIRE ACONDICIONADO'}.title`)}</h3>
              <p>{t(`servicesData.${'CARGA DE AIRE ACONDICIONADO'}.txt`)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`cboton ${styles.cboton}`} >
        <button className={`boton ${styles.boton}`}>{t('servi.bottom')}</button>

      </div>
      </I18nextProvider>
    </>
  );
};

export default Services;