import { FaCar } from "react-icons/fa";
import { servicesData } from '../../data/servicesData.mock';
import styles from './Services.module.scss';

const Services = () => {

  
  return (
    <>
      <div className={`d-flex justify-content-around align-items-center mb-5 ${styles.divider}`}>
        <div className={styles.divider} />
        <h2 className={`text-secondary text-center mx-3 ${styles.text}`}>
          NUESTROS SERVICIOS
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
              <h3>{servicesData[1].title}</h3>
              <p>{servicesData[1].txt}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[3].img} alt={servicesData[3].title} />
              <h3>{servicesData[3].title}</h3>
              <p>{servicesData[3].txt}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
          </div>

          {/* CENTRO */}
          <div className={`col d-flex flex-column align-items-center  justify-content-center  ${styles.column}`}>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={40} className="bg-danger rounded-pill p-1" />
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={40} className="bg-danger rounded-pill p-1"/>
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={40} className="bg-danger rounded-pill p-1"/>
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={40} className="bg-danger rounded-pill p-1"/>
            </div>
            <div className={`grid-item-c ${styles.gridItemc}`}>
              <FaCar size={40} className="bg-danger rounded-pill p-1"/>
            </div>
            <div className={styles.lineaRoja}></div>
          </div>

          {/* Derecha */}
          <div className={`col  d-flex flex-column align-items-center   ${styles.column}`}>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[0].img} alt={servicesData[0].title} />
              <h3>{servicesData[0].title}</h3>
              <p>{servicesData[0].txt}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[2].img} alt={servicesData[2].title} />
              <h3>{servicesData[2].title}</h3>
              <p>{servicesData[2].txt}</p>
            </div>
            <div className={`grid-item ${styles.gridItemc}`}></div>
            <div className={`grid-item ${styles.gridItem}`}>
              <img src={servicesData[4].img} alt={servicesData[4].title} />
              <h3>{servicesData[4].title}</h3>
              <p>{servicesData[4].txt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;