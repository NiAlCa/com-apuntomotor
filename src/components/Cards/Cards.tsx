
import { serviciosCardsData } from '../../data/serviciosCardsData.mock';
import style from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={` animate__animated animate__rotateInUpRight ${style.container}`}>
      <div className="row justify-content-center">
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="divider" />
        <h2 className="text-secondary text-center mx-3">
          OTROS SERVICIOS
        </h2>
        <div className="divider" />
      </div>

        {serviciosCardsData.map((item, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            
           
            <div className="card h-100">
       
              <img className="card-img-top img-fluid" src={item.img} alt={item.title} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-secondary">{item.title}</h5>
    
                <p className="card-text flex-grow-1">{item.txt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
