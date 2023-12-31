
import { serviciosCardsData } from '../../data/serviciosCardsData.mock';
import style from './Cards.module.scss';
import { useTranslation } from 'react-i18next';
export const Cards = () => {
  const { t } = useTranslation();

  return (
    <div className={` mb-5 ${style.container}`}>
      <div className="row justify-content-center">
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="divider" />
        <h2 className="text-secondary text-center mx-3">
        {t('servi.card')}
        </h2>
        <div className="divider" />
      </div>

        {serviciosCardsData.map((item, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4 row justify-content-center rounded" >
            
           
            <div className="card h-100 w-75 p-0">
       
              <img className="card-img-top img-fluid w-100" src={item.img} alt={item.title} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-secondary">{t(`serviciosCardData.${item.title}.title`)}</h5>
    
                <p className="card-text flex-grow-1">{t(`serviciosCardData.${item.title}.txt`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
