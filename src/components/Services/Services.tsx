import { servicesData } from '../../data/servicesData.mock';
import './Services.scss';

const Services = () => {
  const izqCards = servicesData.filter((item) => item.position === 'izq');
  const derCards = servicesData.filter((item) => item.position === 'der');

  return (
    <>
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="divider" />
        <h2 className="text-secondary text-center mx-3">
          NUESTROS SERVICIOS
        </h2>
        <div className="divider" />
      </div>
      <div className="container mx-auto text-center">
        <div className="row">
          {/* Cards a la izquierda */}
          <div className="col mb-4 d-flex flex-column align-items-center">
            {izqCards.map((item, idx) => (
              <div key={idx} className="mb-4">
                <div className="card h-100">
                  <img
                    className="card-img-top img-fluid rounded"
                    src={item.img}
                    alt={item.title}
                    style={{ width: '150px', height: '150px', alignSelf: 'center'  }}
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title text-secondary">{item.title}</h5>
                    <p className="card-text flex-grow-1">{item.txt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Línea roja que divide */}
          <div className="col-md-1 d-none d-md-block ">
            <div className="linea">
            <div className="line-with-icons"></div>
            </div>
          </div>

          {/* Cards a la derecha */}
          <div className="col mb-4 d-flex flex-column align-items-center">
            {derCards.map((item, idx) => (
              <div key={idx} className="mb-4">
                <div className="card h-100">
                  <img
                    className="card-img-top img-fluid rounded"
                    src={item.img}
                    alt={item.title}
                    style={{ width: '150px', height: '150px', alignSelf: 'center' }}
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title text-secondary">{item.title}</h5>
                    <p className="card-text flex-grow-1">{item.txt}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Services;
